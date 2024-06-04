package main

import (
    "log"
    "os"
    "github.com/joho/godotenv"
    "github.com/labstack/echo/v4"
    "github.com/labstack/echo/v4/middleware"
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
    "soundscape/models"
    "soundscape/routes"
)

func initDB() *gorm.DB {
    err := godotenv.Load(".env.local")
    if err != nil {
        log.Fatal("Error loading .env.local file")
    }

    dsn := os.Getenv("DATABASE_URL")
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal(err)
    }
    db.AutoMigrate(&models.User{})
    return db
}

func main() {
    e := echo.New()
    e.Use(middleware.Logger())
    e.Use(middleware.Recover())

    // CORS middleware
    e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
        AllowOrigins: []string{"http://localhost:3000"},
        AllowMethods: []string{echo.GET, echo.POST, echo.PUT, echo.DELETE},
    }))

    db := initDB()
    routes.RegisterRoutes(e, db)

    e.Logger.Fatal(e.Start(":8080"))
}
