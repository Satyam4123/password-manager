# Password Manager

A simple, responsive password manager built with React and Tailwind CSS for learning purposes.

## 🚀 Live Demo

**[https://password-manager-sigma-inky.vercel.app/]**

*Note: This is a demo application - please do not enter real passwords.*

## ⚠️ Security Warning

**🔴 DEMO ONLY - DO NOT USE FOR REAL PASSWORDS 🔴**

- Passwords are stored in plain text in localStorage
- No encryption or authentication  
- Data is not secure and can be accessed by anyone
- Not suitable for production use
- **Use fake/test data only**

## Features

- ✅ Add new password entries
- ✅ Edit existing passwords
- ✅ Delete password entries
- ✅ Toggle password visibility (show/hide)
- ✅ Fully responsive design
- ✅ Clean, modern UI
- ✅ Cross-device compatibility

## Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Styling
- **React Icons** - Icons (Material Design, Ionicons)
- **localStorage** - Data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd password-manager
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Deployment

This project is deployed and can be accessed at: **[https://password-manager-sigma-inky.vercel.app/](YOUR_DEPLOYMENT_URL_HERE)**

### Deploy Your Own

```bash
npm run build
# Upload dist folder to your hosting platform
```

**Recommended platforms:**
- Vercel
- Netlify  
- GitHub Pages

## Usage

1. **Add Password**: Fill in website, username/email, and password fields, then click "Add"
2. **Edit Password**: Click the edit icon (✏️) next to any entry to modify it
3. **Delete Password**: Click the delete icon (🗑️) to remove an entry
4. **Toggle Visibility**: Click the eye icon (👁️) to show/hide passwords

## Project Structure

```
password-manager/
├── src/
│   ├── components/
│   │   ├── Input.jsx          # Main component with form and table
│   │   ├── Header.jsx         # Header component
│   │   └── SavedEntries.jsx   # Original table component
│   ├── App.jsx
│   └── main.jsx
├── public/
└── README.md
```

## Responsive Design

The app is fully responsive and works on:
- 📱 Mobile devices (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (> 1024px)

## Future Improvements

For a production-ready password manager, consider adding:

- 🔐 Encryption (AES-256)
- 🔑 Master password authentication
- 🗄️ Secure backend database
- 🔒 HTTPS enforcement
- 👤 User accounts and sessions
- 🔍 Search and filter functionality
- 📤 Export/import capabilities
- 🎨 Dark mode
- 📋 Copy to clipboard
- 🔔 Better notifications (replace alerts)

## Contributing

This is a learning project, but feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Acknowledgments

- Built as a learning exercise for React and responsive design
- Icons provided by React Icons library
- Styling with Tailwind CSS

---

**Remember: This is for educational purposes only. Never use this for real password storage!**