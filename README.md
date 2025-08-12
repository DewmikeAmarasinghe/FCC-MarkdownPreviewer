# Markdown Previewer

A real-time markdown editor and previewer built with React, TypeScript, and Vite. This project was created as part of the FreeCodeCamp Front End Development Libraries certification.

## 🌟 Live Demo

**[View Live Demo](https://fcc-markdown-previewer-1.netlify.app/)**

## ✨ Features

### Core Functionality
- **Real-time Preview**: See your markdown rendered instantly as you type
- **Dual-Panel Layout**: Side-by-side editor and previewer for optimal workflow
- **Expandable Panels**: Click the arrow icons to expand either panel to full screen
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Markdown Support
- **Headers** (H1-H6) with proper styling
- **Text Formatting**: Bold, italic, and combined formatting
- **Code Blocks**: Syntax-highlighted code with proper indentation
- **Inline Code**: Highlighted code snippets within text
- **Lists**: Both ordered and unordered lists with nested indentation
- **Links**: Clickable URLs with hover effects
- **Images**: Responsive image display
- **Blockquotes**: Styled quote blocks
- **Tables**: Full table support with proper borders and styling

### User Experience
- **Professional UI**: Clean, modern design with gradient text effects
- **FontAwesome Icons**: Beautiful icons for expand/collapse functionality
- **Smooth Animations**: Responsive interactions and transitions
- **Default Content**: Pre-loaded with comprehensive markdown examples
- **FreeCodeCamp Integration**: Ready for certification testing

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.0.0
- **Styling**: SCSS/Sass 1.89.2
- **Markdown Rendering**: react-markdown 10.1.0
- **Icons**: FontAwesome 6.7.2
- **Testing**: FreeCodeCamp test suite integration

## 📁 Project Structure

```
Markdown Previewer/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── header.tsx          # Reusable header component
│   │   │   └── header.scss         # Header styling
│   │   └── Markdown/
│   │       └── defaultMarkdown.ts  # Default markdown content
│   ├── App.tsx                     # Main application component
│   ├── App.scss                    # Main application styles
│   ├── main.tsx                    # Application entry point
│   └── index.scss                  # Global styles
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.ts                  # Vite configuration
└── tsconfig.json                   # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Markdown Previewer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎯 Usage

### Basic Usage
1. **Edit Markdown**: Type or paste markdown content in the left panel
2. **View Preview**: See the rendered output in real-time on the right panel
3. **Expand Panels**: Click the arrow icons to expand either panel to full screen
4. **Responsive Design**: The layout automatically adapts to your screen size

### Markdown Examples
The editor comes pre-loaded with examples demonstrating:
- Headers and subheaders
- Text formatting (bold, italic)
- Code blocks and inline code
- Lists and nested lists
- Links and images
- Blockquotes
- Tables

## 🧪 Testing

This project includes FreeCodeCamp's test suite for certification. The tests verify:
- Editor functionality with proper element ID (`#editor`)
- Preview functionality with proper element ID (`#preview`)
- Expandable panel functionality
- Markdown rendering capabilities

## 🎨 Customization

### Styling
The project uses SCSS for styling with:
- CSS variables for consistent theming
- Responsive design with mobile-first approach
- Modern CSS features like flexbox and grid
- Custom styling for markdown elements

### Adding Features
The modular component structure makes it easy to add new features:
- New markdown syntax support via react-markdown plugins
- Additional UI components in the `components/` directory
- Custom styling in the respective `.scss` files

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Other Platforms
The project can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **FreeCodeCamp** for the project requirements and test suite
- **React** team for the amazing framework
- **Vite** team for the fast build tool
- **react-markdown** for excellent markdown rendering
- **FontAwesome** for beautiful icons

## 📞 Support

If you have any questions or need help with the project:
- Open an issue on GitHub
- Check the [FreeCodeCamp forum](https://forum.freecodecamp.org/)
- Review the documentation above

---

**Built with ❤️ for the FreeCodeCamp community**
