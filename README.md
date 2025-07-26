# React Calculator

![React Calculator](https://img.shields.io/badge/React-v18.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

A simple, elegant, and responsive calculator built with React. This project demonstrates fundamental React concepts including hooks, state management, event handling, and modern UI design principles.

## ✨ Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Error Handling**: Prevents division by zero with user-friendly alerts
- **Operation History**: Shows the last performed operation
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Input Validation**: Handles invalid inputs gracefully

## 🚀 Demo

[Live Demo](https://your-demo-link.netlify.app) *(Add your deployed link here)*

## 📸 Screenshots

### Desktop View
```
┌─────────────────────────────────┐
│        React Calculator         │
│         Simple & Elegant        │
│                                 │
│  ┌─────────────────────────────┐ │
│  │             42              │ │
│  │      Last: + 7              │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌─────────────────────────────┐ │
│  │     Enter a number          │ │
│  └─────────────────────────────┘ │
│                                 │
│  [ + ] [ - ] [ × ] [ ÷ ]        │
│                                 │
│  [Clear Input] [Clear Result]   │
│        [Clear All]              │
│                                 │
│       Built with React ⚛️       │
└─────────────────────────────────┘
```

## 🛠️ Technologies Used

- **React 18.2.0** - UI library
- **CSS3** - Styling with modern features (Grid, Flexbox, Gradients)
- **HTML5** - Semantic markup
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

### Prerequisites

- Node.js (version 14.0 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-calculator.git
   cd react-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   
   The app will automatically open at [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

In the project directory, you can run:

- **`npm start`** - Runs the app in development mode
- **`npm test`** - Launches the test runner in interactive watch mode
- **`npm run build`** - Builds the app for production to the `build` folder
- **`npm run eject`** - **Note: this is a one-way operation. Once you eject, you can't go back!**
- **`npm run lint`** - Runs ESLint to check for code quality issues
- **`npm run lint:fix`** - Automatically fixes ESLint issues where possible
- **`npm run format`** - Formats code using Prettier

## 📁 Project Structure

```
react-calculator/
├── public/
│   ├── index.html          # HTML template
│   └── favicon.ico         # App icon
├── src/
│   ├── App.js              # Main calculator component
│   ├── App.css             # Component styles
│   ├── index.js            # App entry point
│   └── index.css           # Global styles
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## 🎯 How to Use

1. **Enter a number** in the input field
2. **Click an operation button** (+, -, ×, ÷) to perform calculations
3. **View the result** in the display area
4. **See your last operation** below the result
5. **Use clear buttons** to reset input, result, or both

### Keyboard Shortcuts

- **Enter**: Performs the last selected operation
- **Tab**: Navigate between buttons
- **Space/Enter**: Activate focused button

## 🔍 Code Highlights

### State Management
```javascript
const [result, setResult] = useState(0);
const [lastOperation, setLastOperation] = useState('');
```

### Error Handling
```javascript
if (operation === 'divide' && inputValue === 0) {
  alert('Cannot divide by zero!');
  return;
}
```

### Modern React Patterns
- Functional components with hooks
- Event handler optimization
- Controlled components
- Responsive design with CSS Grid/Flexbox

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)
3. Your app is live!

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Steps to Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow the existing code style
- Run `npm run lint` and `npm run format` before committing
- Write meaningful commit messages
- Add comments for complex logic

## 📝 Future Enhancements

- [ ] Add keyboard input support
- [ ] Implement calculation history
- [ ] Add scientific calculator mode
- [ ] Support for decimal operations
- [ ] Dark/light theme toggle
- [ ] Unit tests with Jest and React Testing Library
- [ ] Progressive Web App (PWA) features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Modern CSS features that make styling enjoyable
- The open-source community for inspiration

## 📞 Support

If you have any questions or need help with the project, please:

1. Check the [Issues](https://github.com/yourusername/react-calculator/issues) page
2. Create a new issue if your question isn't already addressed
3. Reach out via email

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
