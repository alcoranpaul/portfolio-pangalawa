# Bible Chronicles – ADHD-Friendly Bible Reader Console App

## 🧾 Project Overview
**Bible Chronicles** is a personal console-based application designed to help maintain consistent Bible reading habits through interactive typing sessions and progress-based unlocks. Built as a lightweight, cross-platform **C# .NET 8** app, it opens on startup and guides users through Scripture in a way that encourages focus and engagement — especially for those with ADHD or short attention spans.

> The app was created out of personal need: being at my computer most of the day, I wanted an always-accessible, distraction-free Bible reader that felt rewarding to use.

---

## ⚙️ Technologies Used

- **Language:** C#
- **Framework:** .NET 8
- **Logging:** Serilog (console + file)
- **Data Handling:** Newtonsoft.Json
- **Auto-Updating:** GitHub Releases API
- **CI/CD:** GitHub Actions (build, test, release automation)
- **Startup Integration (Windows):** Microsoft.Win32.Registry

---

## 💡 Key Features & Implementation Details

### 💬 Console-Based Interactive Reading
- Users read and type out Bible passages to "complete" them.
- Real-time feedback shows accuracy and allows retrying.
- Gamified mechanics to maintain focus.

> **Why it matters:** Encourages active reading over passive scanning, improving retention and engagement — ideal for ADHD users.

---

### 📁 Progress Tracking with JSON
- Tracks current book/chapter, completed verses, unlockable characters/traits.
- Persistent data using structured JSON files.
- Handles different environments: development (`bin/Debug`) vs. release (`bin/Publish`).

> **Why it matters:** Ensures progress isn't lost across updates or environments.

---

### 🔁 Auto-Updating via GitHub Releases
- Fetches latest version using GitHub API.
- Downloads, extracts, and installs updates via PowerShell.
- Automatically restarts with the updated `.exe`.

> **Why it matters:** Seamless updates with no manual intervention.

---

### 🧰 Startup Integration (Windows Only)
- Optional toggle to "Run at Startup".
- Adds/removes app from Windows Registry:
  `HKCU\Software\Microsoft\Windows\CurrentVersion\Run`
- Handles permissions and path setup.

> **Why it matters:** Encourages daily use by launching automatically.

---

### 🌐 Cross-Platform Development
- Self-contained builds for:
  - `win-x64`
  - `linux-x64`
  - `osx-x64`, `osx-arm64`

> **Why it matters:** Enables broader usage and future scalability.

---

### 🛠 CI/CD Pipeline via GitHub Actions
- Automated workflows for:
  - Building and testing
  - Publishing builds
  - Changelog generation
  - Creating GitHub Releases

> **Why it matters:** Reliable, fast, and consistent deployments.

---

## 🧪 Challenges & Solutions

### ❗ Typing Session UX in Console
**Solution:**
- Custom typing engine with live comparison
- Visual feedback (correct/incorrect)
- Sound effects + success messages

✅ **Result:** Engaging console-based experience.

---

### ❗ Managing Save Data Across Environments
**Solution:**
- Clear JSON structure
- Separate dev/release path logic
- Robust file IO

✅ **Result:** Reliable and persistent data handling.

---

### ❗ SmartScreen Warnings on First Run
**Solution:**
- Prepared code-signing (future)
- Added trust instructions

✅ **Result:** Built trust foundation for smoother first-run experiences.

---

### ❗ Building for Multiple Platforms
**Solution:**
- Targeted multiple RIDs via `.csproj`
- Platform detection in update scripts

✅ **Result:** Fully automated cross-platform publishing.

---

## 🔄 Collaboration & Future Plans

Though currently a personal tool, **Bible Chronicles** has potential to become a community-driven application.

### 🚀 Planned Improvements
- GUI version for broader accessibility
- Mobile companion app
- Cloud sync for multi-device support
- Unlock system with story-based progression

---

## 📈 Outcome & Impact

✅ Created a personal, ADHD-friendly Bible reader  
✅ Strengthened C# skills in:
- Console interactivity
- File management
- DevOps practices

✅ Gained experience in:
- Cross-platform publishing
- Auto-updating
- Logging and diagnostics

✅ Integrated CI/CD in a solo project  
✅ Developed confidence in full-stack app creation

---

## 🧩 Summary

**Bible Chronicles** is more than just a Bible reader — it's a reflection of personal growth through purpose-driven development.

This project blends **spiritual discipline** with **software craftsmanship** to deliver an engaging, repeatable, and meaningful experience. It proves that even small tools can make a big impact when built with **intention**, **care**, and **user-focused design**.
