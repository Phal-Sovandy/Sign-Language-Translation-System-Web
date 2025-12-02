# Contributing to Khmer Sign Language Translation System

Thank you for your interest in contributing to the Khmer Sign Language Translation System! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Areas for Contribution](#areas-for-contribution)
- [Questions?](#questions)

## 📜 Code of Conduct

This project adheres to a code of conduct that all contributors are expected to follow:

- **Be Respectful**: Treat all contributors with respect and kindness
- **Be Inclusive**: Welcome newcomers and help them get started
- **Be Constructive**: Provide helpful feedback and suggestions
- **Be Patient**: Remember that everyone has different skill levels and backgrounds

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

- **Node.js** 18.0.0 or higher installed
- **npm** 9.0.0 or higher
- **Git** installed and configured
- A modern code editor (VS Code recommended)
- Basic knowledge of React, JavaScript, and Git

### Setting Up Your Development Environment

1. **Fork the Repository**

   - Click the "Fork" button on the GitHub repository page
   - This creates a copy of the repository in your GitHub account

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/sign-language-translation-system-web.git
   cd sign-language-translation-system-web
   ```

3. **Add Upstream Remote**

   ```bash
   git remote add upstream https://github.com/Phal-Sovandy/sign-language-translation-system-web.git
   ```

4. **Install Dependencies**

   ```bash
   npm install
   ```

5. **Set Up Environment Variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your EmailJS credentials (optional for local development).

6. **Start Development Server**

   ```bash
   npm run dev
   ```

   The application should now be running at `http://localhost:5173`

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:

- **Clear Title**: Descriptive title of the bug
- **Description**: Detailed description of the issue
- **Steps to Reproduce**: Step-by-step instructions to reproduce the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable, include screenshots
- **Environment**: Browser, OS, and version information

### Suggesting Features

Have an idea for a new feature? Open an issue with:

- **Feature Title**: Clear, descriptive title
- **Description**: Detailed description of the feature
- **Use Case**: Why this feature would be useful
- **Possible Implementation**: If you have ideas on how to implement it

### Contributing Code

1. **Find an Issue or Create One**

   - Browse existing issues or create a new one
   - Comment on the issue to let others know you're working on it

2. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

3. **Make Your Changes**

   - Write clean, readable code
   - Follow the coding standards (see below)
   - Add comments for complex logic
   - Update documentation if needed

4. **Test Your Changes**

   ```bash
   npm run dev
   ```

   Test thoroughly in your browser across different scenarios.

5. **Commit Your Changes**

   Follow the commit message guidelines (see below).

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**

   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template with details about your changes

## 🔄 Development Workflow

### Branch Naming Convention

- `feature/feature-name` - For new features
- `fix/bug-description` - For bug fixes
- `update/description` - For updates to existing features
- `refactor/description` - For code refactoring
- `docs/description` - For documentation changes
- `style/description` - For styling changes

### Keeping Your Fork Updated

Regularly sync your fork with the upstream repository:

```bash
# Fetch latest changes
git fetch upstream

# Switch to main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push to your fork
git push origin main
```

### Before Submitting a PR

- [ ] Code follows the project's coding standards
- [ ] All tests pass (if applicable)
- [ ] Documentation is updated
- [ ] No console errors or warnings
- [ ] Code is properly formatted
- [ ] Commit messages follow the guidelines
- [ ] PR description is clear and detailed

## 💻 Coding Standards

### General Guidelines

- **Readability First**: Write code that is easy to read and understand
- **Consistency**: Follow existing code patterns and styles
- **Comments**: Add comments for complex logic, not obvious code
- **DRY Principle**: Don't Repeat Yourself - extract reusable code
- **Small Functions**: Keep functions focused and small

### JavaScript/React Guidelines

- Use **functional components** with hooks
- Use **const** and **let**, avoid **var**
- Use **arrow functions** for callbacks
- Use **template literals** for string concatenation
- Use **destructuring** when appropriate
- Use **async/await** instead of promises when possible

### File Naming

- **Components**: PascalCase (e.g., `ContactPage.jsx`)
- **Utilities**: camelCase (e.g., `date.js`)
- **Constants**: camelCase (e.g., `routes.js`)
- **Hooks**: camelCase with "use" prefix (e.g., `useScrollPosition.js`)

### Code Formatting

- Use **2 spaces** for indentation
- Use **single quotes** for strings (or double quotes consistently)
- Use **semicolons** at the end of statements
- Maximum line length: **100 characters** (soft limit)
- Remove trailing whitespace

### Component Structure

```jsx
// 1. Imports
import { useState } from "react";
import Component from "./Component";

// 2. Component definition
export default function MyComponent({ prop1, prop2 }) {
  // 3. Hooks
  const [state, setState] = useState(null);

  // 4. Event handlers
  const handleClick = () => {
    // ...
  };

  // 5. Effects
  useEffect(() => {
    // ...
  }, []);

  // 6. Render
  return <div>{/* JSX */}</div>;
}
```

### CSS/Tailwind Guidelines

- Use **Tailwind CSS** utility classes
- Prefer utility classes over custom CSS
- Use **responsive prefixes** (sm:, md:, lg:, xl:, 2xl:)
- Keep custom CSS minimal and well-documented
- Use **CSS variables** for theme colors when needed

## 📝 Commit Message Guidelines

We follow conventional commit message format:

```
<type>: <subject>

[optional body]

[optional footer]
```

### Types

- **Add**: New feature
- **Fix**: Bug fix
- **Update**: Update to existing feature
- **Refactor**: Code refactoring
- **Docs**: Documentation changes
- **Style**: Formatting, styling changes
- **Test**: Adding or updating tests
- **Chore**: Maintenance tasks

### Examples

```bash
# Good commit messages
Add: Contact form with EmailJS integration
Fix: Mobile menu not closing on route change
Update: Improve error handling in feedback modal
Refactor: Extract utility functions to separate files
Docs: Update README with installation instructions

# Bad commit messages
fix bug
update stuff
changes
WIP
```

### Commit Message Best Practices

- Use **imperative mood** ("Add" not "Added" or "Adds")
- **First line** should be 50 characters or less
- **Capitalize** the first letter
- **No period** at the end of the subject line
- **Reference issues** in the footer: `Closes #123`

## 🔍 Pull Request Process

### PR Checklist

- [ ] Code follows coding standards
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] Tested in multiple browsers (if applicable)
- [ ] PR description is clear and detailed

### PR Description Template

```markdown
## Description

Brief description of what this PR does.

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made

- Change 1
- Change 2
- Change 3

## Testing

How was this tested? What scenarios were covered?

## Screenshots (if applicable)

Add screenshots here.

## Related Issues

Closes #123
```

### Review Process

1. **Automated Checks**: GitHub Actions will run checks (if configured)
2. **Code Review**: Maintainers will review your code
3. **Feedback**: Address any feedback or requested changes
4. **Approval**: Once approved, your PR will be merged

### After Your PR is Merged

- Your branch can be safely deleted
- Sync your fork with upstream
- Celebrate your contribution! 🎉

## 🎯 Areas for Contribution

We welcome contributions in the following areas:

### 🐛 Bug Fixes

- Fix reported bugs
- Improve error handling
- Resolve edge cases

### ✨ New Features

- Add new functionality
- Enhance existing features
- Improve user experience

### 📝 Documentation

- Improve README clarity
- Add code comments
- Create tutorials or guides
- Translate documentation

### 🎨 UI/UX Improvements

- Enhance visual design
- Improve accessibility
- Optimize responsive layouts
- Add animations and transitions

### ⚡ Performance

- Optimize code performance
- Reduce bundle size
- Improve loading times
- Optimize images and assets

### 🧪 Testing

- Add unit tests
- Add integration tests
- Improve test coverage
- Add E2E tests

### 🌐 Localization

- Add support for other languages
- Translate UI elements
- Improve i18n implementation

### 🔧 Infrastructure

- Improve build process
- Add CI/CD pipelines
- Enhance development tools
- Update dependencies

## ❓ Questions?

### Getting Help

- **Documentation**: Check [README.md](./README.md) and [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
- **Issues**: Search existing issues for similar questions
- **Discussions**: Use GitHub Discussions for questions
- **Contact**: Reach out via [Contact Form](/contact) or social media

### Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and discussions
- **Discord**: [Join our Discord server](https://discord.gg/fEnEYWHz)
- **Email**: phalsovandy007@gmail.com

## 🙏 Thank You!

Thank you for taking the time to contribute to this project! Every contribution, no matter how small, helps make this project better for everyone.

---

**Remember**: This is an academic research project. Be patient, respectful, and constructive in all interactions. We're all here to learn and build something meaningful together.
