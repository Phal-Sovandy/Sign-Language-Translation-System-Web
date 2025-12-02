# Project Structure

This document describes the organization of the Sign Language Translation System web application.

## Directory Structure

```
src/
├── assets/              # Static assets (images, fonts, videos)
│   ├── fonts/          # Font files
│   ├── images/         # Image files (organized by type)
│   └── videos/         # Video files
│
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── ui/             # UI components (Tooltip, etc.)
│   └── visuals/       # Visual/decoration components
│
├── config/              # Configuration files
│   ├── changelog.js    # Changelog data
│   ├── hero.js         # Hero section content
│   ├── socialLinks.jsx # Social media links
│   └── index.js        # Centralized exports
│
├── constants/           # Application constants
│   ├── routes.js       # Route paths
│   └── index.js        # Centralized exports
│
├── hooks/               # Custom React hooks
│   ├── useActiveSection.js
│   ├── useScrollPosition.js
│   └── index.js        # Centralized exports
│
├── pages/               # Page components
│   ├── AboutPage.jsx
│   ├── ChangelogPage.jsx
│   ├── ContactPage.jsx
│   ├── DemoPage.jsx
│   └── DocumentationPage.jsx
│
├── routes/              # Routing configuration
│   └── index.jsx        # AppRoutes component
│
├── sections/            # Page sections/components
│   ├── about/           # About page sections
│   ├── contact/         # Contact sections
│   ├── demo/            # Demo sections
│   ├── faq/             # FAQ sections
│   ├── feature/         # Feature showcase
│   ├── feedback/        # Feedback sections
│   ├── hero/            # Hero sections
│   ├── interface/       # Interface showcase
│   ├── motion/          # Motion sections
│   ├── stats/           # Statistics sections
│   ├── story/           # Story sections
│   └── workflow/        # Workflow sections
│
├── styles/              # Global styles
│   └── fonts.css        # Font definitions
│
├── utils/               # Utility functions
│   ├── date.js          # Date formatting utilities
│   ├── scroll.js        # Scroll utilities
│   └── index.js         # Centralized exports
│
├── App.jsx              # Main app component
├── index.css            # Global CSS
└── main.jsx             # Application entry point
```

## Key Principles

1. **Separation of Concerns**: Components, utilities, configs, and pages are clearly separated
2. **Reusability**: Common utilities and hooks are extracted for reuse
3. **Centralized Configuration**: Config files are organized and exported from index files
4. **Consistent Naming**: Files follow consistent naming conventions
5. **Modular Structure**: Each feature/section has its own folder

## Import Guidelines

- Use centralized exports from `index.js` files when available
- Import utilities from `utils/` folder
- Import hooks from `hooks/` folder
- Import constants from `constants/` folder
- Import config from `config/` folder

## Adding New Features

1. **New Page**: Add to `pages/` and update `routes/index.jsx`
2. **New Section**: Add to `sections/[feature-name]/`
3. **New Utility**: Add to `utils/` and export from `utils/index.js`
4. **New Hook**: Add to `hooks/` and export from `hooks/index.js`
5. **New Constant**: Add to `constants/` and export from `constants/index.js`
