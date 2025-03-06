package com.example.soundscape.android.presentation.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.ReadOnlyComposable
import androidx.compose.runtime.compositionLocalOf
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

val LocalSpacing = compositionLocalOf { Dimensions() }

data class Dimensions(
    val default: Dp = 0.dp,
    val xsmall: Dp = 2.dp,
    val small: Dp = 4.dp,
    val mediumSmall: Dp = 8.dp,
    val medium: Dp = 16.dp,
    val mediumLarge: Dp = 24.dp,
    val large: Dp = 32.dp,
    val xLarge: Dp = 48.dp,
    val xxLarge: Dp = 56.dp,
    val xxxLarge: Dp = 64.dp,
)

val MaterialTheme.spacing: Dimensions
    @Composable
    @ReadOnlyComposable
    get() = LocalSpacing.current

