It all started with the intrest in Android Development

Progress:-

Week 1 : Reserching about Android Development with Android Studio and Google

    Outcomes on my Research about Android Development :- 

Decomplication :-

Used to Reverse Engineer

Convert into Readable Code.

May sometimes cannot be right on extracting the files

Languages that APK can be built:-

1.Java

2.Kotlin

3.C++(Android Native Development Kit )—should be integrated with Java

4.Python – using kivy framwork

5. React Native (Android and IOS)

The Android code is packed into .dex files.

 Dex stands for Dalvik Executable. A Dex file contains code that is ultimately executed by the Android Runtime.

Tools you will need —

·        APKTOOL - For reverse engineering Android APK files.

·        Dex2Jar - Tool to work with android .dex and ajava .class files.

·        JD-GUI - Java Decompiler is a tool to decompile and analyse Java “byte code”.

 
PROGRESS 1:
_________________________________________________________________________________________________________

Java is the majorly used language for Android development. Java is a mature and widely-used language that offers a rich set of libraries and tools for Android development, making it the go-to choice for many developers.

Ways to access dependencies / libraries  

Gradle build files: The Gradle build files specify the dependencies and libraries used in an Android project. You can check the build.gradle files for the app and module level to see the dependencies listed under the "dependencies" section.

Library documentation: The library documentation will typically list all the dependencies required for the library to work properly.


AndroidManifest.xml: Some libraries also require declarations in the AndroidManifest.xml file, such as permissions or activities.


CMakeLists.txt: If you are using CMake to build your C++ code, you can check the CMakeLists.txt file for the libraries specified with the "find_library" or "target_link_libraries" commands.


Code references: Finally, you can also check the code references to see which libraries are being imported and used in the project.

list of popular Library’s

Android Support Library

Retrofit

OkHttp

Glide

Butter Knife

Room

Dagger

RxJava

Firebase

Picasso

Gson

Material Design

Android Architecture Components

Constraint Layout

Timber

Google Maps

Fabric

LeakCanary

Stetho

ZXing (Barcode Scanner Library)

build.gradle and AndroidManifest.xml are two different configuration files in Android app development. The main differences between them are:

Purpose: build.gradle is used for project-level build configuration, such as setting up dependencies and build types. AndroidManifest.xml, on the other hand, is used for app-level configuration, such as declaring app components, required permissions, and device compatibility.

Content: build.gradle contains information about the build environment, such as the minimum required SDK version, build tools version, and dependencies on external libraries. AndroidManifest.xml contains information about the app itself, such as its package name, launch activities, services, broadcast receivers, and content providers.

Build Process: build.gradle is processed by Gradle during the build process, while AndroidManifest.xml is processed by the Android system when the app is installed and launched.

The AndroidManifest.xml file is a central configuration file for an Android app and is required for all Android apps. It contains important information about the app, such as the app's name, package name, required permissions, activities, services, and broadcast receivers.

found and started working with 2 CLI applications 

AAPT build-tools (Android SDK)

keytool (Java)

aapt would give the details of application 

keytool will let us know the signature details of the application 

1.AAPT output

2.Keytool Output

Here is the list of details i would like to display on my web application 

1.Application name: (application: label)
2.versionName= ''
3.version code=''
4.package name =
4.Min Sdk= (sdkVersion)
5.target or recommended version = (targetSdkVersion)
6.Screen sizes = (support-screens)
7.Densities= (densities)
8.Permission =>
{
a.(uses-permissions:)
b.(uses-implied-permission)
c.(uses-permission:)
}

9.Features = {
(feature-group:)
a.(uses-feature-not-required:)
b.(uses-feature)
c.(uses-implied-feature)
}

10.(Signature Details)

PROGRESS 2:
_________________________________________________________________________________________________________
Created a AWS server and ran my program in cloud and got the result

Made figma design and statred with responsive front End

PROGRESS 3:
_________________________________________________________________________________________________________

A.implemented Upload and Submit Button using React
#Able to Upload to server 
B.removed submit button and made and onchange event
#used new react hook useref for removing submit button





"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },