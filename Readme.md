This branch has the logic of getting the details out from APK 

versionCode and versionName: These two values indicate the version of the app. versionCode is an integer value that's used by Android to differentiate between different versions of the same app, and versionName is a human-readable string that provides more detail about the version.
compileSdkVersion and targetSdkVersion: These values indicate the Android SDK versions that the app was compiled against and designed to run on, respectively.
uses-permission: These tags list the permissions that the app requires in order to run. For example, android.permission.INTERNET indicates that the app needs to be able to access the internet, and android.permission.WRITE_EXTERNAL_STORAGE indicates that it needs permission to write to external storage.
application-label: These tags indicate the localized name of the app in various languages.
uses-feature: These tags list the hardware and software features that the app requires in order to run. For example, android.hardware.faketouch indicates that the app requires a touch screen.