# Deployment Guide - Push to GitHub & Deploy to Vercel

## 🔐 Fix GitHub Authentication Issue

You're getting a 403 error because you need proper authentication. Here are the solutions:

### Option 1: Use Personal Access Token (Recommended)

1. **Create a Personal Access Token on GitHub:**
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name (e.g., "portfolio-deploy")
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

2. **Push using the token:**
   ```bash
   git push https://YOUR_TOKEN@github.com/kinhdev24/kinhdev24-portfolio.git main
   ```
   Replace `YOUR_TOKEN` with your actual token.

   OR update the remote URL:
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/kinhdev24/kinhdev24-portfolio.git
   git push origin main
   ```

### Option 2: Use SSH (More Secure)

1. **Generate SSH key** (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add SSH key to GitHub:**
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste and save

3. **Update remote to use SSH:**
   ```bash
   git remote set-url origin git@github.com:kinhdev24/kinhdev24-portfolio.git
   git push origin main
   ```

### Option 3: Push to Your Own Fork

If you don't have access to the kinhdev24 repository, you can:

1. **Fork the repository** on GitHub
2. **Update the remote:**
   ```bash
   git remote set-url origin https://github.com/vijaysmart043/kinhdev24-portfolio.git
   git push origin main
   ```

---

## 🚀 Deploy to Vercel

### Method 1: Connect GitHub Repository (Recommended)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your repository: `kinhdev24/kinhdev24-portfolio`
   - Click "Import"

3. **Configure Project:**
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` or `yarn build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` or `yarn install` (auto-detected)

4. **Environment Variables (if needed):**
   - Add any required environment variables
   - Most Next.js projects don't need them for basic deployment

5. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-5 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Select your project
   - Deploy!

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Method 3: Auto-Deploy from GitHub

Once you connect your GitHub repository to Vercel:
- ✅ **Automatic deployments** happen on every push to `main` branch
- ✅ **Preview deployments** for pull requests
- ✅ **Instant updates** when you push changes

---

## 📝 Quick Checklist

- [ ] Fix GitHub authentication (use token or SSH)
- [ ] Push code to GitHub successfully
- [ ] Sign in to Vercel with GitHub
- [ ] Import your repository
- [ ] Configure build settings (usually auto-detected)
- [ ] Deploy!
- [ ] Customize domain (optional)

---

## 🔧 Troubleshooting

### Build Errors on Vercel:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Make sure `next.config.ts` is properly configured

### Image Issues:
- Some images were replaced with tech-themed placeholders
- You may need to add actual images back if they're missing

### Environment Variables:
- If your app needs API keys, add them in Vercel → Project Settings → Environment Variables

---

## 🌐 Custom Domain (Optional)

1. Go to your project in Vercel
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

---

**Your code is already committed! Just push to GitHub and deploy on Vercel.** 🎉

