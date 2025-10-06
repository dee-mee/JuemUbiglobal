# JUEM UNIGLOBAL TECH ELECTRONICS Website

This is a static website for JUEM UNIGLOBAL TECH ELECTRONICS, a sound system company based in Kenya. The site is built with React and Tailwind CSS, served statically without a build step, making it perfect for hosting on platforms like GitHub Pages.

## How to Deploy to GitHub Pages

This project is already configured for easy deployment to GitHub Pages. Follow these steps:

### 1. Create a GitHub Repository

If you haven't already, create a new repository on GitHub. You can name it whatever you like, for example, `juem-uniglobal-website`.

### 2. Push the Code

Push all the files (`index.html`, `index.tsx`, `components/`, etc.) to your new GitHub repository.

```bash
# Initialize git if you haven't already
git init
git add .
git commit -m "Initial commit of website files"

# Add your remote repository and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git branch -M main
git push -u origin main
```
*Replace `YOUR_USERNAME` and `YOUR_REPOSITORY` with your actual GitHub username and repository name.*

### 3. Configure GitHub Pages

1.  In your GitHub repository, go to **Settings**.
2.  In the left sidebar, click on **Pages**.
3.  Under the "Build and deployment" section, for the **Source**, select **Deploy from a branch**.
4.  Set the branch to `main` and the folder to `/ (root)`.
5.  Click **Save**.

That's it! GitHub will now build and deploy your site. It may take a few minutes for the site to become live. You will find the URL for your live site in the same GitHub Pages settings section.

### Why this works so easily:

*   **.nojekyll file**: This file tells GitHub Pages not to process the site with Jekyll, and to serve all files as-is.
*   **No Build Step**: The project uses an `importmap` in `index.html` to load React directly from a CDN, so no local build process is required.
*   **Relative Paths**: All assets are either loaded from external CDNs/APIs or use relative paths, so they work correctly regardless of the hosting path.
