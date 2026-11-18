# Portfolio website template

A plain HTML, CSS and JavaScript site. No build step, no frameworks. Edit the files, upload the folder, done.

## Folder structure

```
portfolio-template/
├── index.html          All your content (text, projects, skills, contact)
├── css/style.css       Colors, fonts, layout (change the theme at the top)
├── js/main.js          Theme button and footer year
├── assets/
│   ├── favicon.svg     Browser tab icon
│   ├── cv.pdf          Put your CV here (file name must match the link in index.html)
│   └── images/         Project screenshots and your photo
└── .nojekyll           Tells GitHub Pages to serve the files as they are
```

## How to edit

1. Open the folder in VS Code (or any editor).
2. Open `index.html` and search for the comments that start with `EDIT`. These mark what to change.
3. To add a project, copy one `<article class="project">` block and paste it below the last one.
4. To change colors or fonts, edit the variables at the top of `css/style.css`.
5. To preview, open `index.html` in a browser, or use the VS Code "Live Server" extension.

Before publishing, replace the `#` links in the projects and the `your-username` links in the contact section, or delete them.

## Host it for free

### GitHub Pages
1. Create a repository named `your-username.github.io` on GitHub.
2. Upload everything inside this folder (so `index.html` is at the top level of the repository).
3. Open Settings, then Pages, set the source to "Deploy from a branch", choose `main` and `/ (root)`, and save.
4. Your site appears at `https://your-username.github.io` after a minute or two.

### Netlify or Cloudflare Pages
Drag and drop this folder onto the dashboard. You get a link immediately, and you can add your own domain later.

## Keeping it useful for job applications
- Lead with 3 to 5 of your best projects and say what you built and which tools you used.
- Link to source code and a live demo wherever you can.
- Keep a current CV in `assets/cv.pdf`.
