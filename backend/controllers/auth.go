package controllers

import (
    "errors"
    "net/http"
    "time"
    "os"
    "soundscape/models"
    "github.com/dgrijalva/jwt-go"
    "github.com/labstack/echo/v4"
    "golang.org/x/crypto/bcrypt"
    "gorm.io/gorm"
)

var jwtSecret = os.Getenv("JWT_SECRET")

type LoginRequest struct {
    Email string `json:"email"`
    Password string `json:"password"`
}

type RegisterRequest struct {
    Username string `json:"username"`
    Email    string `json:"email"`
    Password string `json:"password"`
}

func RegisterUser(db *gorm.DB) echo.HandlerFunc {
    return func(c echo.Context) error {
        user := new(RegisterRequest)
        if err := c.Bind(user); err != nil {
            return err
        }
        hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
        if err != nil {
            return err
        }
        newUser := models.User{
            Username:  user.Username,
            Email:     user.Email,
            Password:  string(hashedPassword),
            CreatedAt: time.Now(),
        }
        if err := db.Create(&newUser).Error; err != nil {
            if errors.Is(err, gorm.ErrDuplicatedKey) {
                return c.JSON(http.StatusConflict, map[string]string{"message": "Username or email already exists. Try logging in."})
            }
            return c.JSON(http.StatusBadRequest, map[string]string{"message": "User registration failed"})
        }
        return c.JSON(http.StatusOK, newUser)
    }
}

func LoginUser(db *gorm.DB) echo.HandlerFunc {
    return func(c echo.Context) error {
        loginRequest := new(LoginRequest)
        if err := c.Bind(loginRequest); err != nil {
            return err
        }

        var user models.User
        if err := db.Where("email = ?", loginRequest.Email).First(&user).Error; err != nil {
            return c.JSON(http.StatusUnauthorized, map[string]string{"message": "Email not found. Try registering."})
        }

        if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginRequest.Password)); err != nil {
            return c.JSON(http.StatusUnauthorized, map[string]string{"message": "Invalid password"})
        }

        token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
            "id":  user.ID,
            "exp": time.Now().Add(time.Hour * 72).Unix(),
        })

        jwtSecret := os.Getenv("JWT_SECRET")
        tokenString, err := token.SignedString([]byte(jwtSecret))
        if err != nil {
            return err
        }

        return c.JSON(http.StatusOK, map[string]string{"token": tokenString})
    }
}
