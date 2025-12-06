# 🚀 GitHub Deployment Guide for WISDOM Bible Study Website

## Prerequisites

1. **GitHub Account** - Create one at [github.com](https://github.com) if you don't have one
2. **Claude Code** installed on your desktop
3. **Git** installed on your computer (Claude Code can help install this)

---

## Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `wisdom-bible-study` (or your preferred name)
3. Description: `WISDOM Bible Study - 5-Week Christian Doctrine Curriculum`
4. Select **Public** (required for free GitHub Pages hosting)
5. **DO NOT** initialize with README (we have our own files)
6. Click **Create repository**
7. Copy the repository URL (looks like: `https://github.com/YOUR_USERNAME/wisdom-bible-study.git`)

---

## Step 2: Open Claude Code

Open your terminal/command prompt and start Claude Code:

```bash
claude
```

---

## Step 3: Commands to Give Claude Code

Copy and paste these prompts to Claude Code one at a time:

### Prompt 1: Navigate to your website folder
```
Navigate to my Downloads folder (or wherever I saved the Rooted_Website folder) and list the contents
```

### Prompt 2: Initialize Git and push to GitHub
```
I need to push the Rooted_Website folder to my GitHub repository. The repo URL is:
https://github.com/YOUR_USERNAME/wisdom-bible-study.git

Please:
1. Initialize git in this folder
2. Add all files
3. Create initial commit
4. Add the remote origin
5. Push to main branch

My GitHub username is: YOUR_USERNAME
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## Step 4: GitHub Authentication

When Claude Code tries to push, you may need to authenticate. Claude will guide you through one of these methods:

### Option A: GitHub CLI (Recommended)
Claude Code can help you install and authenticate with GitHub CLI:
```
Help me install GitHub CLI and authenticate with my GitHub account
```

### Option B: Personal Access Token
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name like "Claude Code"
4. Select scopes: `repo` (full control)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. When prompted for password, paste the token instead

---

## Step 5: Enable GitHub Pages (Free Hosting!)

After pushing your code:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** in the left sidebar
4. Under "Source", select **Deploy from a branch**
5. Branch: **main** / Folder: **/ (root)**
6. Click **Save**
7. Wait 2-3 minutes
8. Your site will be live at: `https://YOUR_USERNAME.github.io/wisdom-bible-study/`

---

## Step 6: Update Domain References

Once you know your GitHub Pages URL (or if you have a custom domain), tell Claude Code:

```
Search and replace all instances of "https://yourdomain.com" with "https://YOUR_USERNAME.github.io/wisdom-bible-study" in all HTML files, sitemap.xml, and robots.txt
```

Then push the updates:
```
Commit these changes with message "Update domain URLs" and push to GitHub
```

---

## Quick Reference: Common Claude Code Commands

### Check Git Status
```
Show me the git status of this repository
```

### Make Changes and Push
```
I made changes to the website. Please add all changes, commit with message "Updated contact info", and push to GitHub
```

### Pull Latest Changes
```
Pull the latest changes from GitHub
```

### View Commit History
```
Show me the recent git commit history
```

---

## Optional: Custom Domain Setup

If you have your own domain (e.g., `wisdombiblestudy.com`):

### Step 1: Add CNAME file
Tell Claude Code:
```
Create a file called CNAME in the root of my website with just my domain: wisdombiblestudy.com
```

### Step 2: Configure DNS
Add these records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

### Step 3: Enable in GitHub
1. Repository Settings → Pages
2. Custom domain: Enter your domain
3. Check "Enforce HTTPS"

---

## Troubleshooting

### "Permission denied" error
```
Help me set up GitHub authentication - I'm getting permission denied when trying to push
```

### "Repository not found" error
- Double-check your repository URL
- Make sure the repo exists on GitHub
- Verify your username is correct

### Files not showing on website
- Check that index.html is in the root folder
- Wait 5-10 minutes for GitHub Pages to build
- Check Actions tab for build errors

---

## Full Example Session with Claude Code

Here's what a complete session might look like:

```
You: Navigate to ~/Downloads/Rooted_Website

Claude: [navigates and shows files]

You: Initialize a git repository here, add all files, and commit with message "Initial commit - WISDOM Bible Study website"

Claude: [initializes git, adds files, commits]

You: Add remote origin https://github.com/pastorbailey/wisdom-bible-study.git and push to main branch

Claude: [adds remote and pushes - may prompt for authentication]

You: The push was successful. Now update all instances of "yourdomain.com" to "pastorbailey.github.io/wisdom-bible-study" in all files

Claude: [updates URLs across all files]

You: Commit these changes with message "Update URLs for GitHub Pages" and push

Claude: [commits and pushes]
```

---

## After Deployment Checklist

- [ ] Website loads at GitHub Pages URL
- [ ] All pages navigate correctly  
- [ ] Images display properly
- [ ] PDF downloads work
- [ ] Mobile responsive layout works
- [ ] Submit sitemap to Google Search Console
- [ ] Test social sharing previews

---

## Need Help?

If you get stuck, just describe the issue to Claude Code:
```
I'm trying to push my website to GitHub but getting this error: [paste error message]. Help me fix it.
```

Claude Code can diagnose and resolve most Git/GitHub issues!

---

*Guide created for WISDOM Bible Study Website - December 2025*
