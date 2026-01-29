# Mikka Kette P. Esparagoza - Portfolio

A modern personal portfolio website built with Angular 20 featuring a dark theme with red accent colors and glassmorphism design elements.

## 🎨 Design Theme

- **Style**: Dark theme with glassmorphism and gradient effects
- **Primary Color**: #e23636 (Red)
- **Features**: Glass-like panels, glowing effects, and modern gradients

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Navigation bar with mobile menu
│   │   │   ├── about/           # About/Landing section
│   │   │   ├── about-me/        # About me details
│   │   │   ├── tech-stack/      # Tech stack showcase
│   │   │   ├── projects/        # Projects gallery
│   │   │   ├── resume/          # Resume section
│   │   │   ├── contact/         # Contact information
│   │   │   └── footer/          # Footer component
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.scss
│   ├── assets/
│   │   ├── images/              # Profile and project images
│   │   └── resume/              # Resume files
│   └── styles.scss              # Global styles with dark theme
├── public/
│   ├── favicon.ico
│   ├── hann-cv.pdf             # Resume PDF
│   └── _redirects              # SPA routing for deployment
└── DEPLOYMENT.md               # Deployment instructions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm
- Angular CLI (v20+)

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
# or
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
npm run deploy:netlify
```

### Deploy to GitHub Pages
```bash
npm run deploy:github
```

The build artifacts will be stored in the `dist/browser/` directory. See `DEPLOYMENT.md` for detailed deployment instructions.

## 🔗 Contact & Social Links

- **Email**: [esparagozamikkakette@gmail.com](mailto:esparagozamikkakette@gmail.com)
- **LinkedIn**: [Mikka Kette Esparagoza](https://www.linkedin.com/in/mikka-kette-esparagoza-1228563a7/)
- **GitHub**: [@esparagoza-mikkakette](https://github.com/esparagoza-mikkakette)

## 🛠️ Technologies Used

- **Frontend**: Angular 20, TypeScript 5.9
- **Styling**: SCSS with CSS custom properties
- **Build Tool**: Angular CLI with esbuild
- **Fonts**: Inter (Google Fonts)
- **Design**: Dark theme with glassmorphism effects
- **Deployment**: Netlify/Vercel ready with SPA routing

## 🎨 Customization

### Theme Colors
Edit the CSS variables in `src/styles.scss`:
```scss
:root {
  --bg: #0b0d10;
  --bg2: #0f1217;
  --text: rgba(255, 255, 255, 0.92);
  --muted: rgba(255, 255, 255, 0.68);
  --accent: #e23636;
  --accent2: #ff4a4a;
  --border: rgba(255, 255, 255, 0.12);
}
```

### Content Updates
- **About Section**: Edit `src/app/components/about/about.html`
- **About Me**: Edit `src/app/components/about-me/about-me.html`
- **Tech Stack**: Edit `src/app/components/tech-stack/tech-stack.html`
- **Projects**: Edit `src/app/components/projects/projects.html`
- **Contact Info**: Edit `src/app/components/contact/contact.html`

### Assets
- **Profile Images**: Add to `src/assets/images/`
- **Resume**: Update `public/hann-cv.pdf`
- **Favicon**: Replace `public/favicon.ico`

## 🚀 Features

- ✅ Responsive design with mobile-first approach
- ✅ Dark theme with glassmorphism effects
- ✅ Smooth animations and hover effects
- ✅ SEO optimized with proper meta tags
- ✅ Single Page Application (SPA) routing
- ✅ Optimized build with code splitting
- ✅ Progressive Web App ready
- ✅ Deployment ready for major platforms

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.
