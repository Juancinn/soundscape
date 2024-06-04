package routes

import (
    "soundscape/controllers"
    "github.com/labstack/echo/v4"
    "gorm.io/gorm"
)

func RegisterRoutes(e *echo.Echo, db *gorm.DB) {
    e.POST("/register", controllers.RegisterUser(db))
    e.POST("/login", controllers.LoginUser(db))
}
