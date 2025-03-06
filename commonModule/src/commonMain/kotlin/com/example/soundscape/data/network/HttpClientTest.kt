package com.example.soundscape.data.network

import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

object HttpClientTest {
    private val httpClient = createHttpClient()

    suspend fun testHttpClient(): String {
        return try {
            val response: HttpResponse = withContext(Dispatchers.Default) {
                httpClient.get("https://httpbin.org/get") {
                    headers {
                        append(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                    }
                }
            }
            "Success! Response Code: ${response.status.value}, Body: ${response.bodyAsText()}"
        } catch (e: Exception) {
            "Error: ${e.message}"
        }
    }
}