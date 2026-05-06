# Mohammad Saber Seerat — Developer Portfolio

A modern, responsive personal portfolio website built to showcase my work as a
Frontend Developer specializing in **React** and **JavaScript**. Designed with
a clean, GitHub-inspired aesthetic, dark/light mode, and smooth animations.




## ✨ Features

- 🎨 Modern, professional developer-style UI
- 🌗 Dark / Light mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations & micro-interactions
- 🧭 Sticky navigation with smooth scrolling and scroll-spy
- 🖥️ Terminal-style hero section
- 💼 Experience timeline, skills grid, project showcase
- 📊 Live GitHub stats integration
- 📄 Download CV button
- 🔍 SEO optimized (meta tags, OG, semantic HTML)

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TanStack Start (Vite 7)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Inter, Space Grotesk, JetBrains Mono
- **Routing:** TanStack Router (file-based)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── portfolio/        # Hero, About, Skills, Experience, Projects, etc.
│   └── ui/               # shadcn UI primitives
├── routes/
│   ├── __root.tsx        # Root layout (HTML shell, SEO, fonts)
│   └── index.tsx         # Home page (assembles all sections)
├── lib/
├── hooks/
└── styles.css            # Design tokens (OKLCH) & global styles
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Install dependencies
bun install
# or
npm install

# Start the dev server
bun dev
# or
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
bun run build
bun run start
```

---

## 📝 Customization

- **Content / sections:** edit files in `src/components/portfolio/`
- **Colors & theme:** edit OKLCH design tokens in `src/styles.css`
- **SEO / metadata:** edit `src/routes/__root.tsx` and `src/routes/index.tsx`
- **CV file:** place your resume at `public/cv-mohammad-saber-seerat.pdf`

---

## 📬 Contact

**Mohammad Saber Seerat** — Frontend Developer

- 📧 Email: [saber.seerat66@gmail.com](mailto:saber.seerat66@gmail.com)
- 📱 Phone: +93 0786743584
- 🐙 GitHub: [@SaberSeerat](https://github.com/SaberSeerat)

---

## 📄 License

Released under the [MIT License](LICENSE).

---

> Built with ❤️ using React, TanStack Start, and Tailwind CSS.