# Vaibhav Katkar's Portfolio

A modern, cyberpunk-themed portfolio website built with React.js, featuring dark/light mode toggle, smooth animations, and interactive UI components.

## Project Structure

The project has been restructured to follow a standard React folder layout:

```
src/
├── main.jsx                 # Application entry point
├── App.jsx                  # Root App component
├── global.css              # Global styles with theme variables
│
├── components/             # All React components
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Skills.jsx          # Skills section
│   ├─��� Projects.jsx        # Projects section
│   ├── Education.jsx       # Education section
│   ├── Contact.jsx         # Contact section
│   ├── Footer.jsx          # Footer component
│   ├── SectionTitle.jsx    # Reusable section title
│   ├── NeonButton.jsx      # Custom neon button
│   ├── CursorEffect.jsx    # Cursor trail effect
│   └── ui/                 # UI library components
│       ├── toaster.jsx
│       ├── sonner.jsx
│       └── tooltip.jsx
│
├── context/                # React Context
│   └── ThemeContext.jsx    # Dark/Light mode context
│
├── hooks/                  # Custom React hooks
│   ├── useCursorTrail.js   # Canvas-based cursor trail
│   └── useScrollAnimation.js # Scroll-based animations
│
├── lib/                    # Utility libraries
│   └── utils.js            # Helper functions
│
├── utils/                  # Constants and utilities
│   ├── constants.js        # Color and theme constants
│   ├── animations.js       # Framer Motion animation variants
│   └── data.js             # Portfolio data (projects, skills, etc.)
│
└── pages/                  # Page components
    ├── Index.jsx           # Home page
    └── NotFound.jsx        # 404 page
```

## Features

- ✨ **Dark/Light Mode Toggle** - Switch between dark and light themes with persistent storage
- 🎨 **Cyberpunk Design** - Neon colors and glassmorphism effects
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🖱️ **Interactive Cursor Trail** - Custom canvas-based cursor effect
- 📱 **Responsive Design** - Mobile-friendly with Tailwind CSS
- 🎯 **Scroll Animations** - Elements animate on scroll
- 🎪 **Project Showcase** - Interactive project cards with modals
- 📧 **Contact Form** - Functional contact section

## Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (or npm/yarn)

### Installation

1. **Clone or extract the project**
   ```bash
   cd your-project-folder
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## Build for Production

```bash
pnpm run build:client
# or
npm run build:client
# or
yarn build:client
```

The optimized build will be created in the `dist/spa` folder.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (client + server)
- `pnpm build:client` - Build client-side code only
- `pnpm start` - Start production server
- `pnpm test` - Run tests with Vitest
- `pnpm format.fix` - Format code with Prettier

## Customization

### Changing Theme Colors

Edit `src/global.css` to modify the CSS variables in `:root` and `.dark` sections:

```css
:root {
  --neon-blue: 180 90% 40%;
  --neon-purple: 280 80% 45%;
  --neon-green: 140 80% 40%;
  /* ... more colors */
}
```

### Updating Portfolio Content

Edit `src/utils/data.js` to update:
- Projects list
- Skills and proficiencies
- Education history
- Certifications
- Courses

### Modifying Components

All components are in `src/components/`. Each component is self-contained and can be customized independently.

## Theme System

The app uses React Context (`src/context/ThemeContext.jsx`) for theme management:

- Automatically detects system preference on first visit
- Saves user preference to localStorage
- Theme class applied to HTML element for CSS-based styling
- Use `useTheme()` hook to access theme state and toggle function

```jsx
import { useTheme } from '@/context/ThemeContext';

function MyComponent() {
  const { isDarkMode, toggleTheme } = useTheme();
  // ...
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. All images should be optimized before adding to the project
2. Use CSS classes from Tailwind for styling instead of inline styles
3. Components are code-split by page in production builds
4. Canvas animations use `requestAnimationFrame` for optimal performance

## Troubleshooting

### Port Already in Use
If port 8080 is already in use, Vite will automatically use the next available port.

### Style Issues
Make sure `src/global.css` is imported in `src/main.jsx` (it should be).

### Build Errors
Clear the cache and reinstall dependencies:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build:client
```

## Future Enhancements

- Add more interactive sections
- Implement blog functionality
- Add social media integration
- Create resume download feature
- Add analytics tracking
- Implement email service for contact form

## License

This portfolio is personal and for demonstration purposes.

## Contact

For inquiries and collaboration opportunities:
- Email: vaibhav.katkar@indiraicem.ac.in
- Phone: 7038128870
- LinkedIn: https://linkedin.com
- GitHub: https://github.com

---

**Happy coding! 🚀**
