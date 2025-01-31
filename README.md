# 🎨 Color Scheme Generator

## Overview

This web application enables users to design personalized color schemes by either selecting a base color and a generation method or opting for a completely random scheme. Each generated scheme visually showcases colors alongside their corresponding hex codes and names. The application is conveniently accessible via its Netlify deployment.

This project utilizes the **Color API** to generate color schemes dynamically.

## 🚀 Features

- 🎨 **Choose a Base Color** – Select a base color using a color picker.
- 🔀 **Random Scheme Generation** – Generate a completely random color scheme at the click of a button.
- ⚙️ **Multiple Generation Methods** – Choose from different methods to generate a scheme.
- 🖍 **Detailed Color Display** – View generated colors along with their hex codes and names.
- 📋 **Copy Hex Codes** – Easily copy color hex codes to the clipboard with a single click.
- 🌗 **Automatic Contrast Detection** – Ensures text is readable by adjusting text color based on contrast.

## 🏗 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **API**: [Color API](https://www.thecolorapi.com/)
- **Deployment**: Netlify

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/color-scheme-generator.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd color-scheme-generator
   ```
3. **Open `index.html` in your web browser** to use the application locally.

## 🌍 Usage

1. Visit the deployed application at [https://color-scheme-generator-dev.netlify.app/].
2. Select a base color using the color picker, or simply choose the "Randomize" method to generate a random color scheme.
3. Choose a generation method from the dropdown menu.
4. Click the "Generate Scheme" button to create a custom color scheme.
5. View the scheme with color swatches, hex codes, and names displayed.
6. Click the copy button to copy a hex code to your clipboard.

## 🔧 Technical Details

- **Fetching Data:** The app fetches color schemes dynamically from the Color API.
- **Randomization:** A random color and scheme type can be selected to generate unique results.
- **Contrast Detection:** Ensures color hex codes and names are readable by calculating contrast with YIQ values.
- **Clipboard Integration:** Users can copy hex codes by clicking the copy button, triggering an event listener.

## 🚀 Deployment

This application is deployed on Netlify. You can access it at [https://color-scheme-generator-dev.netlify.app/].

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add feature-name"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature-name
   ```
5. **Submit a pull request.**

## 📜 License

This project is licensed under the **GNU General Public License 3.0**. See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) file for details.

---

Happy designing! 🎨
