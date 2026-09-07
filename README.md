# Anakha S — Developer Portfolio

> An interactive developer portfolio showcasing frontend engineering, full-stack applications, AI-powered systems, and experimental web experiences.

🌐 **Live Portfolio:** https://portfolio-bsqc.vercel.app/

💼 **LinkedIn:** https://www.linkedin.com/in/anakha-s-a76081356/

🐙 **GitHub:** https://github.com/anakhas771

📧 **Email:** anakhas771@gmail.com

---

## Overview

This repository contains my personal developer portfolio, built as an interactive and motion-focused web experience rather than a traditional static portfolio.

The site combines:

- Interactive WebGL visuals
- Three.js-powered graphics
- Animated page transitions
- Custom project presentations
- Responsive layouts
- Personal skillset and experience
- Resume viewing and download
- GitHub and LinkedIn integration
- Web analytics

The portfolio is designed to demonstrate not only the projects I have built, but also my approach to frontend engineering, interaction design, performance, and modern web experiences.

---

## Featured Projects

### 01 — AI Incident Response Platform

An AI-powered incident response platform designed to help engineering teams investigate and respond to production incidents using AI-assisted analysis and intelligent investigation workflows.

#### Highlights

- AI-assisted incident investigation
- Retrieval-Augmented Generation (RAG)
- Semantic knowledge retrieval
- AI-powered investigation workflows
- Intelligent remediation support
- REST APIs
- Production-oriented backend architecture
- Dockerized development environment

#### Tech Stack

`Python` `Django REST Framework` `React` `PostgreSQL` `RAG` `AI Agents` `Redis` `Celery` `Docker`

🔗 **Repository:**  
https://github.com/anakhas771/AI-Incident-Response-Platform

---

### 02 — MotionForge

A modern frontend animation library focused on interactive UI motion, reusable animation patterns, and browser-based animation previews.

#### Highlights

- Interactive animation previews
- Reusable UI animation patterns
- Animation categories
- Browser-based previews
- Motion-focused interface
- Downloadable source packages
- Responsive frontend architecture

#### Tech Stack

`Next.js` `TypeScript` `React` `Tailwind CSS` `Framer Motion` `GSAP`

🔗 **Live Project:**  
https://motionforge-roan.vercel.app/

---

### 03 — KnowledgeOS

An enterprise AI knowledge intelligence platform designed to transform fragmented organizational information into a centralized, searchable knowledge system.

#### Highlights

- Retrieval-Augmented Generation
- Semantic search
- Knowledge graph construction
- AI agents
- Document and knowledge ingestion
- Vector-based retrieval
- Enterprise knowledge discovery
- AI-assisted knowledge workflows

#### Tech Stack

`Python` `Django REST Framework` `React` `PostgreSQL` `RAG` `Semantic Search` `Knowledge Graph` `FAISS` `OpenSearch` `Redis` `Celery` `Docker`

🔗 **Repository:**  
https://github.com/anakhas771/KnowledgeOS

---

## Skillset

### Frontend Engineering

`React` `Next.js` `JavaScript` `TypeScript` `HTML5` `CSS3`

`Tailwind CSS` `GSAP` `Framer Motion` `Three.js` `WebGL`

`Responsive Design` `Interactive UI` `Web Animations` `Modern UI Design`

### Backend Engineering

`Python` `Django` `Django REST Framework`

`REST APIs` `PostgreSQL` `MySQL` `Redis` `Celery`

### AI & Data

`RAG` `Semantic Search` `Knowledge Graphs`

`AI Agents` `FAISS` `OpenSearch`

### DevOps & Development Tools

`Git` `GitHub` `Docker` `AWS` `Vercel`

`VS Code` `PyCharm` `Postman`

---

## Portfolio Tech Stack

The portfolio itself is built on a lightweight Vue-based architecture with a strong focus on animation and interactive graphics.

| Area | Technology |
| --- | --- |
| Framework | Vue 2 |
| Routing | Vue Router |
| State Management | Vuex |
| Build Tool | Vue CLI |
| Templates | Pug |
| Styling | SCSS |
| 3D / Graphics | Three.js |
| Rendering | WebGL |
| Graphics Programming | GLSL |
| Animation | CSS Transitions + WebGL |
| Analytics | Google Analytics + Vercel Web Analytics |
| Deployment | Vercel |
| Version Control | Git + GitHub |

---

## Key Features

### Interactive WebGL Experience

The portfolio uses Three.js and custom WebGL components to create the visual environment behind the interface.

The WebGL layer is responsible for:

- Animated backgrounds
- Interactive project visuals
- Texture loading
- Visual transitions
- Motion effects
- Responsive resizing
- GPU-accelerated rendering

### Interactive Project Showcase

Projects are displayed through a custom animated works section containing:

- Project numbering
- Project titles
- Project descriptions
- Skills and tools
- Project thumbnails
- External project links
- Animated navigation
- Interactive hover states

### Custom Preloader

The portfolio includes a customized animated preloader with personal branding.

Current branding:

```text
AK
ANAKHA
2026
```

The preloader combines:

- Animated counter
- Circular progress artwork
- SVG masking
- Custom typography
- Entrance and exit transitions
- Animated rotation

### Personal Section

The portfolio includes a dedicated personal section with:

- Skillset
- LinkedIn
- GitHub
- Resume viewer
- Resume download
- Email contact

### Responsive Experience

The interface adapts between desktop and mobile layouts while maintaining the site's visual language, interactions, and animation system.

### WebGL Fallback Handling

The application includes handling for WebGL initialization failures so the interface can continue loading instead of leaving the user permanently stuck on the preloader.

---

## Project Structure

```text
Goofy/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
│
├── src/
│   ├── assets/
│   │   └── img/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── works/
│   │   └── who-i-am/
│   │
│   ├── const/
│   │   └── WORKS.js
│   │
│   ├── webgl/
│   │
│   ├── views/
│   │
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   └── store.js
│
├── package.json
├── vue.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/anakhas771/Portfolio.git
cd Portfolio
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run serve
```

Vue CLI will provide the local development URL in the terminal.

---

## Available Scripts

### Development Server

```bash
npm run serve
```

Starts the local development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Development Build

```bash
npm run build:dev
```

Creates a development-mode production build.

### Development Mode

```bash
npm run dev
```

Starts the application using the development configuration.

### Lint

```bash
npm run lint
```

Runs the project's linting configuration.

### Start

```bash
npm start
```

Starts the development environment.

---

## Customization Guide

### Projects

Project information is maintained in:

```text
src/const/WORKS.js
```

This file controls:

- Project names
- Descriptions
- Skills
- Project URLs
- Project ordering

### Project Images

Project thumbnails are stored in:

```text
src/assets/img/webgl/
```

### Personal Information

Personal content is primarily located in:

```text
src/components/who-i-am/
```

This includes:

- Skillset
- Social links
- Resume links
- Contact information

### Preloader

Preloader components are located in:

```text
src/components/common/
```

Important files include:

```text
Preloader.vue
PreloaderCount.vue
PreloaderInitial.vue
PreloaderProgress.vue
```

### WebGL

The WebGL implementation lives in:

```text
src/webgl/
```

This directory contains the project's interactive graphics, rendering, textures, and WebGL modules.

---

## Environment Variables

The portfolio uses Vue CLI environment variables for site metadata and deployment configuration.

Typical variables include:

```text
VUE_APP_WEBSITE_NAME
VUE_APP_DESCRIPTION
VUE_APP_DOMAIN
```

Environment-specific configuration can be provided through:

```text
.env
.env.local
.env.development
.env.production
```

Do not commit private API keys, tokens, credentials, or other secrets to the repository.

---

## Deployment

The portfolio is deployed using Vercel.

### Deployment Flow

```text
Local Development
        │
        ▼
       Git
        │
        ▼
     GitHub
        │
        ▼
      Vercel
        │
        ▼
 Production Website
```

### Production

🌐 https://portfolio-bsqc.vercel.app/

---

## Analytics

The portfolio integrates web analytics to understand general website usage and traffic.

Configured analytics:

- Google Analytics
- Vercel Web Analytics

Analytics are used to understand website traffic, usage patterns, and general visitor behavior.

---

## Performance

Because the portfolio uses WebGL, Three.js, animated transitions, and interactive rendering, performance can vary depending on:

- Device GPU
- Browser
- Hardware acceleration
- Screen resolution
- Available system resources

For the best experience, use a modern browser with hardware acceleration enabled.

---

## Browser Support

The project currently targets:

```text
> 1%
last 2 versions
```

through its Browserslist configuration.

---

## Development Notes

This project intentionally retains its Vue 2 architecture.

The current stack includes:

- Vue 2
- Vue Router 3
- Vuex 3
- Vue CLI 4
- Vue Template Compiler
- Webpack-based tooling
- Three.js
- Pug
- SCSS

The project also uses the OpenSSL legacy provider flag in its build and development scripts to remain compatible with its older build toolchain.

This is a deliberate choice for the current portfolio rather than an immediate migration to Vue 3.

---

## Accessibility

The portfolio combines a highly visual interface with standard web functionality.

Accessibility considerations include:

- Semantic HTML where applicable
- External link support
- Resume access
- Responsive layouts
- Non-WebGL fallback behavior
- Keyboard-accessible standard links

---

## Resume

The portfolio provides both browser viewing and downloading of the current resume.

Resume file:

```text
public/Anakha_S_SoftwareDeveloper_resume.pdf
```

---

## Contact

### Anakha S

Frontend / Full-Stack Developer

📧 **Email**  
anakhas771@gmail.com

💼 **LinkedIn**  
https://www.linkedin.com/in/anakha-s-a76081356/

🐙 **GitHub**  
https://github.com/anakhas771

🌐 **Portfolio**  
https://portfolio-bsqc.vercel.app/

---

## Acknowledgements

The original visual foundation of this portfolio was inspired by and adapted from the TPLH website/template by **Yoichi Kobayashi**.

The project has since been extensively customized for my personal portfolio, including:

- Personal branding
- Project showcase
- Skillset
- Custom project thumbnails
- Resume integration
- Contact links
- Preloader branding
- WebGL behavior
- Portfolio content
- Navigation and interaction
- Deployment configuration

---

## Built With

```text
Vue 2
Vue Router
Vuex
Vue CLI
Pug
SCSS
Three.js
WebGL
GLSL
JavaScript
Git
GitHub
Vercel
```

---

## Repository

🐙 **GitHub Repository**

https://github.com/anakhas771/Portfolio

---

<p align="center">
  Designed & developed by <strong>Anakha S</strong>
</p>
