# 🏫 Academy Manager — PWA App
## Deploy Instructions (Free • 30 Minutes)

---

## 📁 FILES IN THIS FOLDER

```
academy-pwa/
├── index.html        ← Your main app (PWA-ready)
├── manifest.json     ← Makes it installable as an app
├── sw.js             ← Service worker (offline support)
└── icons/            ← App icons (all sizes)
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## 🚀 STEP 1 — Upload to GitHub (Free Hosting)

1. Go to https://github.com → Sign up (free)
2. Click "+" → "New repository"
3. Name: `academy-app` → Set Public → Create
4. Click "uploading an existing file"
5. **Drag ALL files AND the icons folder** into the upload area
6. Click "Commit changes"

---

## 🌐 STEP 2 — Enable GitHub Pages (Your Free Website)

1. In your repository → Click "Settings"
2. Left sidebar → "Pages"
3. Source → "Deploy from branch"
4. Branch → "main" → "/ (root)"
5. Click "Save"
6. Wait 2 minutes → Your app is live at:
   👉 https://YOUR-USERNAME.github.io/academy-app

---

## 🔥 STEP 3 — Connect Firebase Database

1. Go to https://console.firebase.google.com
2. Create project → "AcademyManager"
3. Build → Firestore Database → Create database
4. Choose "Start in test mode" → Region: asia-south1 → Enable
5. ⚙️ Settings → Project Settings → Your apps → Web (</>)
6. Register app → Copy the 6 config values

---

## 📱 STEP 4 — Open App & Enter Firebase Keys

1. Open your app link in Chrome
2. Paste the 6 Firebase config values in the setup screen
3. Click "Connect & Launch App"
4. Login as Admin (password: admin123)
5. Done! 🎉

---

## 📲 STEP 5 — Install as App on Phone

### Android:
1. Open app link in Chrome
2. A banner will pop up: "Install Academy Manager"
3. Tap Install → Done! App appears on home screen ✅

### iPhone:
1. Open app link in Safari
2. Tap Share button (⎋) at bottom
3. Tap "Add to Home Screen"
4. Tap "Add" → Done! ✅

### Windows Laptop:
1. Open app link in Chrome
2. Click the install icon (⊕) in address bar
3. Click Install → App opens in its own window ✅

---

## ✅ DEFAULT LOGIN CREDENTIALS

| Role    | Credential        |
|---------|-------------------|
| Admin   | Password: admin123|
| Student | PIN: 1234         |

Change admin password in: Admin → Settings

---

## 💡 SHARE WITH STUDENTS

Send this WhatsApp message to students:
"Hi! Please open this link in Chrome and install our Academy App:
https://YOUR-USERNAME.github.io/academy-app
Tap 'Install' when it asks. Your login: [Name] + PIN 1234"

---

## 🆓 COST = ₹0

| Service        | Plan  | Cost |
|----------------|-------|------|
| GitHub Pages   | Free  | ₹0   |
| Firebase       | Spark | ₹0   |
| App Install    | PWA   | ₹0   |
