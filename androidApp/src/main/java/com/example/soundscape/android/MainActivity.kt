package com.example.soundscape.android

import android.os.Bundle
import android.widget.TextView
import androidx.activity.ComponentActivity
import androidx.lifecycle.lifecycleScope
import com.example.soundscape.data.network.HttpClientTest
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val textView = TextView(this).apply { text = "Testing..." }
        setContentView(textView)

        lifecycleScope.launch {
            val result = HttpClientTest.testHttpClient()
            runOnUiThread {
                textView.text = result
            }
        }
    }
}