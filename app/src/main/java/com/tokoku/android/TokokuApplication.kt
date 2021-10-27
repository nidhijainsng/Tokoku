package com.tokoku.android

import android.app.Application
import android.content.pm.ApplicationInfo
import android.webkit.WebView


class TokokuApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        if (0 != applicationInfo.flags and ApplicationInfo.FLAG_DEBUGGABLE) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
    }
}