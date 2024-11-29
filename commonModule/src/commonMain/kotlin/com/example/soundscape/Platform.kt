package com.example.soundscape

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform