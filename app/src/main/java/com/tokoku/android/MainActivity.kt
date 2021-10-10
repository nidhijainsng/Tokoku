package com.tokoku.android

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView

import androidx.appcompat.app.AlertDialog


class MainActivity : AppCompatActivity() {

    private var webView: WebView? = null

    override fun onPause() {
        super.onPause()
        webView?.onPause()
        webView?.pauseTimers()
    }

    override fun onBackPressed() {
        AlertDialog.Builder(this)
            .setMessage("Do you want to exit?")
            .setCancelable(false)
            .setPositiveButton(
                "Yes"
            ) { _, _ -> super@MainActivity.onBackPressed() }
            .setNegativeButton("No", null)
            .show()
    }

    override fun onResume() {
        super.onResume()
        webView?.resumeTimers()
        webView?.onResume()
    }

    override fun onDestroy() {
        super.onDestroy()
        webView?.destroy()
        webView = null
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.web_view)
        webView?.settings?.javaScriptEnabled = true
        webView?.settings?.mediaPlaybackRequiresUserGesture = true
        webView?.settings?.domStorageEnabled = true

        webView?.loadUrl("file:///android_asset/www/tokoku/index.html");
    }
}