# Bible Chronicles – ADHD-Friendly Bible Reader Console Application

## Project Overview

Bible Chronicles is a console-based application designed to support consistent Bible reading habits through interactive typing sessions and progress-based unlocks. Developed as a lightweight, cross-platform C# .NET 8 application, it launches on startup and guides users through Scripture in a way that promotes focus and engagement—particularly for individuals with ADHD or short attention spans.

This project was born from a personal need: spending most of the day at the computer, I wanted a distraction-free Bible reader that felt both accessible and rewarding to use.

---

## Technologies Used

- Language: C#
- Framework: .NET 8
- Logging: Serilog (console and file outputs)
- Data Handling: Newtonsoft.Json
- Auto-Updating: GitHub Releases API
- CI/CD: GitHub Actions
- Startup Integration (Windows): Microsoft.Win32.Registry

---

## Key Features and Implementation Details

### Console-Based Interactive Reading

- Users type out Bible passages to complete them.
- Real-time feedback shows typing accuracy and offers retry functionality.
- Designed with gamified mechanics to encourage attention and focus.

**Purpose:** Reinforces active reading over passive scanning, improving engagement and retention.

---

### Progress Tracking with JSON

- Stores current book/chapter, completed verses, and unlockable characters or traits.
- Utilizes structured JSON files to persist data across sessions.
- Manages path differences between development and release builds.

**Purpose:** Ensures progress is preserved even during updates or environment transitions.

---

### Auto-Updating via GitHub Releases

- Queries the GitHub API for the latest version.
- Downloads update packages and installs them via PowerShell.
- Automatically restarts the updated executable.

**Purpose:** Maintains application currency without requiring manual updates.

---

### Windows Startup Integration

- Optional feature to enable or disable "Run at Startup."
- Modifies Windows Registry entries under `HKCU\Software\Microsoft\Windows\CurrentVersion\Run`.
- Handles permission and path management robustly.

**Purpose:** Facilitates daily use by launching the application automatically.

---

### Cross-Platform Compatibility

- Self-contained builds available for:
  - Windows (win-x64)
  - Linux (linux-x64)
  - macOS (osx-x64, osx-arm64)

**Purpose:** Increases accessibility and future scalability across different platforms.

---

### CI/CD Pipeline with GitHub Actions

- Automates:
  - Build and test operations
  - Creation of self-contained builds
  - Generation of changelogs from commit history
  - Packaging and publishing of GitHub Releases

**Purpose:** Enables reliable, repeatable deployments with minimal manual intervention.

---

## Challenges and Solutions

### Typing Session UX in Console

**Challenge:** Creating a smooth, engaging typing experience within the constraints of a console application.

**Solution:**
- Developed a custom typing engine with real-time comparison.
- Included visual indicators for correct and incorrect inputs.
- Added auditory feedback and success messages.

**Result:** A responsive, immersive typing interaction within a console environment.

---

### Managing Save Data Across Environments

**Challenge:** Ensuring persistent and consistent data handling across development and production environments.

**Solution:**
- Implemented structured JSON formats with clear, consistent keys.
- Segregated logic for handling dev and release file paths.
- Used robust file I/O practices.

**Result:** Reliable and environment-agnostic data storage.

---

### Cross-Platform Build Pipeline

**Challenge:** Building and packaging the application for multiple operating systems.

**Solution:**
- Configured the project to target multiple Runtime Identifiers (RIDs).
- Integrated OS detection into the auto-update script.

**Result:** Fully functional cross-platform build and update system.

---

## Outcome and Impact

- Developed a custom Bible reading application tailored to daily workflows
- Improved core competencies in:
  - C# console interactivity
  - File handling and structured data management
  - CI/CD and release automation
- Gained practical experience in:
  - Cross-platform deployment
  - Auto-update infrastructure
  - Logging and diagnostics integration
- Demonstrated ability to design and implement a full-stack application independently

---

## Summary

Bible Chronicles exemplifies how purpose-driven development can combine personal needs with professional skill-building. By integrating spiritual practice with focused software design, the application delivers a meaningful and repeatable user experience. It stands as a case study in how simple tools, when built with clarity and care, can create substantial value.
