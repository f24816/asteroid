# Astro x Capacitor Starter Kit

## Setting up the project

```bash
npm install
```

## Running the project

Anytime you change the astro code, you need to sync it with the capacitor project to export the app.

```bash
npx cap sync
```

```bash
npx cap open android
```

Run the project normally in android studio.

## Exporting the app

For exporting chose the option "Build -> Build Bundle(s) / APK(s) -> Build APK(s)".
The exported files will be located in ./android/app/build/outputs/apk/debug/app-debug.apk