# Health-AI Website

The official website for the **Health-AI** project - a System Breakthrough Project revolutionizing how AI is developed and validated for health through federated learning.

🌐 **Live Site:** [https://thijsackermans.github.io/Health-AI_page/](https://thijsackermans.github.io/Health-AI_page/)

---


## 📚 Table of Contents

- [Quick Start](#-quick-start)
- [Content Management](#-content-management-pagescms)
- [Adding Images](#-adding-images)
- [Content Structure](#-content-structure)
- [Deployment](#-deployment)
- [Local Development](#-local-development)

---

## 🚀 Quick Start

### For Content Editors (Non-Technical)

**The easiest way to edit content is through PagesCMS:**

1. Go to [PagesCMS](https://pagescms.org/)
2. Connect with your GitHub account
3. Select the `Health-AI_page` repository
4. Edit content through the visual interface
5. Changes are automatically saved and deployed

📖 **PagesCMS Documentation:** [https://pagescms.org/docs](https://pagescms.org/docs)

### For Developers

```bash
# Clone the repository
git clone https://github.com/ThijsAckermans/Health-AI_page.git
cd Health-AI_page

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
BASE_PATH=/Health-AI_page npm run build
```

---

## ✏️ Content Management (PagesCMS)

All website content is stored in the `_content/` folder as JSON and Markdown files. You can edit these files directly or use PagesCMS for a visual editor.

### PagesCMS Configuration

The CMS is configured via `.pages.yml` in the root folder. This defines all content types and their fields.

📖 **PagesCMS Field Types:** [https://pagescms.org/docs/configuration/fields](https://pagescms.org/docs/configuration/fields)

### Content Types

| Content Type | File Location | Description |
|--------------|---------------|-------------|
| **Settings** | `_content/settings.json` | Site name, description, social links |
| **Navigation** | `_content/navigation.json` | Main menu items |
| **Home Page** | `_content/home.json` | Hero section, introduction |
| **About** | `_content/about.json` | Project description, objectives |
| **News** | `_content/news/*.md` | News articles (collection) |
| **Publications** | `_content/publications/*.md` | Scientific publications |
| **Partners** | `_content/partners/*.md` | Consortium partners |
| **Work Packages** | `_content/workpackages/*.md` | Project work packages |
| **Outreach** | `_content/outreach.json` | Events and dissemination |
| **Contact** | `_content/contact.json` | Contact information |
| **Patients** | `_content/patients.json` | Patient information |
| **Legal Pages** | `_content/privacy.md`, `_content/disclaimer.md`, `_content/cookies.md` | Legal documents |

---

## 🖼️ Adding Images

### Image Location

All images must be placed in the `public/assets/` folder:

```
public/
└── assets/
    ├── hero-bg.jpg          # Home page hero background
    ├── intro-image.jpg      # Home page introduction image
    ├── about-hero.jpg       # About page hero image
    ├── partners/            # Partner logos
    │   ├── mdw-logo.png
    │   ├── philips-logo.png
    │   ├── maastricht-university-logo.png
    │   └── ...
    ├── news/                # News article images
    │   └── article-name/
    │       └── cover.jpg
    └── blog/                # Legacy blog images
        └── ...
```

### Required Images Checklist

**⚠️ The following images need to be added:**

#### Site-wide Images
- [x] `public/assets/hero-bg.jpg` - Hero background (1920x1080px) ✓
- [x] `public/assets/intro-image.jpg` - Introduction section image (1200x800px) ✓
- [x] `public/assets/about-hero.jpg` - About page hero (1920x600px) ✓

#### Partner Logos (16 partners)

Place in `public/assets/partners/`:

| Partner | Filename |
|---------|----------|
| Medical Data Works B.V. | `mdw-logo.png` |
| Maastricht University | `maastricht-university-logo.png` |
| Philips | `philips-logo.png` |
| Radboudumc | `radboudumc-logo.png` |
| UMCG | `umcg-logo.png` |
| TNO | `tno-logo.png` |
| NKI-AVL | `nki-avl-logo.png` |
| Isala | `isala-logo.png` |
| MAASTRO Clinic | `maastro-logo.png` |
| Brightlands | `brightlands-logo.png` |
| Health-RI | `health-ri-logo.png` |
| SURF | `surf-logo.png` |
| Branchkey | `branchkey-logo.png` |
| Roseman Labs | `roseman-labs-logo.png` |
| IQVIA | `iqvia-logo.png` |
| Linksight | `linksight-logo.png` |

**Recommended logo specifications:**
- Format: PNG with transparent background
- Size: 200-400px width, maintain aspect ratio
- File size: Under 100KB for web performance

### How to Add Images

#### Method 1: Through PagesCMS (Recommended)
1. Open PagesCMS and navigate to the content item
2. Click on an image field
3. Upload your image through the media browser
4. The image will be automatically placed in `public/assets/`

#### Method 2: Direct File Upload
1. Add images to the appropriate `public/assets/` subfolder
2. Reference them in content files using the path `/assets/your-image.jpg`

#### Method 3: Via GitHub
1. Go to the repository on GitHub
2. Navigate to `public/assets/`
3. Click "Add file" → "Upload files"
4. Drag and drop your images
5. Commit the changes

### Image References in Content

In JSON files, reference images like this:
```json
{
  "heroImage": "/assets/hero-bg.jpg",
  "logo": "/assets/partners/mdw-logo.png"
}
```

In Markdown files, use the frontmatter:
```markdown
---
coverImage: "/assets/news/my-article/cover.jpg"
---
```

Or inline markdown:
```markdown
![Alt text](/assets/my-image.jpg)
```

---

## 📁 Content Structure

### JSON Content Files (Singleton Pages)

JSON files are used for single pages with structured data:

```json
{
  "title": "Page Title",
  "content": "<p>HTML content with <strong>formatting</strong></p>",
  "heroImage": "/assets/image.jpg"
}
```

**Rich text fields** support HTML tags: `<p>`, `<strong>`, `<em>`, `<ul>`, `<li>`, `<h2>`, `<h3>`, `<a>`, `<br>`

### Markdown Content Files (Collections)

Markdown files are used for collections like news, partners, and publications:

```markdown
---
title: "Article Title"
date: "2025-01-15"
excerpt: "Brief description for listings"
coverImage: "/assets/news/article/cover.jpg"
featured: true
---

## Main Content

Write your content here using **Markdown** formatting.

- Bullet points
- Are supported

### Subheadings work too

Links: [Link text](https://example.com)
```

### News Articles

Create a new file in `_content/news/` with this format:

```markdown
---
title: "Your News Title"
date: "2025-01-20"
author: "Health-AI Consortium"
excerpt: "A brief summary for the news listing page."
coverImage: "/assets/news/your-article/cover.jpg"
featured: false
---

Your article content here...
```

### Partners

Create a new file in `_content/partners/` with this format:

```markdown
---
name: "Partner Name"
shortName: "PN"
logo: "/assets/partners/partner-logo.png"
country: "Netherlands"
website: "https://partner-website.com"
description: "Brief description of the partner organization."
role: "Role in the Health-AI project"
order: 1
---
```

### Work Packages

Create a new file in `_content/workpackages/` with this format:

```markdown
---
number: 1
title: "Work Package Title"
lead: "Lead Partner Name"
description: "Description of the work package objectives and scope."
objectives:
  - "First objective"
  - "Second objective"
  - "Third objective"
---
```

### Publications

Create a new file in `_content/publications/` with this format:

```markdown
---
title: "Publication Title"
authors: "Author A., Author B., Author C."
journal: "Journal Name"
year: 2025
type: "Journal Article"
doi: "10.1000/example"
url: "https://link-to-paper.com"
abstract: "Abstract of the publication."
---
```

---

## 🚀 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup (one-time):**
1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment", set **Source** to **GitHub Actions**
3. Push to `main` - the site deploys automatically

### Custom Domain

To use a custom domain like `health-ai.nl`:

1. Update `.github/workflows/nextjs.yml`:
   ```yaml
   env:
     BASE_PATH:   # Empty for custom domain
   ```

2. Add custom domain in **Settings** → **Pages** → **Custom domain**

3. Create `public/CNAME` with your domain:
   ```
   health-ai.nl
   ```

4. Configure DNS at your domain registrar:
   - Add a CNAME record pointing to `thijsackermans.github.io`

---

## 💻 Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Build with GitHub Pages base path
BASE_PATH=/Health-AI_page npm run build

# Start production server locally
npm start
```

### Project Structure

```
Health-AI_page/
├── _content/           # All content files (JSON + Markdown)
│   ├── settings.json   # Site settings
│   ├── home.json       # Home page content
│   ├── about.json      # About page content
│   ├── news/           # News articles (*.md)
│   ├── partners/       # Partner profiles (*.md)
│   ├── publications/   # Publications (*.md)
│   └── workpackages/   # Work packages (*.md)
├── public/
│   └── assets/         # All images and media
├── src/
│   ├── app/            # Next.js pages and components
│   ├── lib/            # Content API and utilities
│   └── interfaces/     # TypeScript type definitions
├── .pages.yml          # PagesCMS configuration
└── next.config.js      # Next.js configuration
```

---

## 📖 Documentation Links

| Resource | URL |
|----------|-----|
| **PagesCMS Docs** | [https://pagescms.org/docs](https://pagescms.org/docs) |
| **PagesCMS Fields** | [https://pagescms.org/docs/configuration/fields](https://pagescms.org/docs/configuration/fields) |
| **Next.js Docs** | [https://nextjs.org/docs](https://nextjs.org/docs) |
| **Markdown Guide** | [https://www.markdownguide.org/](https://www.markdownguide.org/) |
| **GitHub Pages** | [https://docs.github.com/en/pages](https://docs.github.com/en/pages) |
| **Tailwind CSS** | [https://tailwindcss.com/docs](https://tailwindcss.com/docs) |

---

## 🛠️ Technical Stack

This project is built on the [Next.js blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) template with significant customizations for the Health-AI project.

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 14.1.0 | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | Utility-first CSS framework |
| [PagesCMS](https://pagescms.org/) | - | Git-based content management |

### Markdown Processing

Content is processed using:

- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** - Parses YAML frontmatter from Markdown files
- **[remark](https://github.com/remarkjs/remark)** - Markdown processor
- **[remark-html](https://github.com/remarkjs/remark-html)** - Converts Markdown to HTML

### How It Works

1. **Content files** are stored in `_content/` as JSON (structured data) and Markdown (rich text)
2. **Build time**: Next.js reads content files and generates static HTML pages
3. **Frontmatter** (YAML between `---` markers) provides metadata (title, date, etc.)
4. **Markdown body** is converted to HTML using remark
5. **Static export** creates a fully static site deployable to any hosting

### Key Files for Developers

| File | Purpose |
|------|---------|
| `src/lib/contentApi.ts` | Functions to read and parse content files |
| `src/lib/markdownToHtml.ts` | Markdown to HTML conversion |
| `src/interfaces/content.ts` | TypeScript types for content |
| `.pages.yml` | PagesCMS content schema |
| `next.config.js` | Next.js configuration (static export, basePath) |
| `tailwind.config.ts` | Tailwind CSS configuration |

### Extending the Site

To add a new page type:

1. Define the content schema in `.pages.yml`
2. Add TypeScript interface in `src/interfaces/content.ts`
3. Add API function in `src/lib/contentApi.ts`
4. Create page component in `src/app/(site)/`
5. Add navigation link in `_content/navigation.json`

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Test locally with `npm run dev`
4. Commit: `git commit -m "Add my feature"`
5. Push: `git push origin feature/my-feature`
6. Open a Pull Request

---

## 📄 License

This project is part of the Health-AI System Breakthrough Project, funded by the AI Coalition for the Netherlands (AIC4NL).

---

## 🆘 Need Help?

- **Content editing:** Use [PagesCMS](https://pagescms.org/) for the visual editor
- **Technical issues:** Open an issue on [GitHub](https://github.com/ThijsAckermans/Health-AI_page/issues)
- **Project inquiries:** Contact the coordinator at Medical Data Works B.V.

