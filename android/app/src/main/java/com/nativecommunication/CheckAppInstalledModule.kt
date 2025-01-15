package com.nativecommunication

import android.content.pm.PackageManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class CheckAppInstalledModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "CheckAppInstalled"
    }

   @ReactMethod
    fun isAppInstalled(packageName: String, promise: Promise) {
        try {
            val packageManager = reactApplicationContext.packageManager
            packageManager.getPackageInfo(packageName, 0) // No need for GET_ACTIVITIES
            promise.resolve(true) // App is installed
        } catch (e: PackageManager.NameNotFoundException) {
            promise.resolve(false) // App is not installed
        } catch (e: SecurityException) {
            promise.reject("SECURITY_ERROR", "Permission issue: ${e.message}") // Handle restricted access
        } catch (e: Exception) {
            promise.reject("ERROR", "Something went wrong: ${e.message}") // Generic error handling
        }
    }
}
