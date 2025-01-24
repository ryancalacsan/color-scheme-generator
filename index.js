// Cached DOM elements
const pickerEl = document.getElementById("picked-color")
const schemeSelectEl = document.getElementById("scheme-select")
const schemeEl = document.getElementById("scheme")
const generateBtn = document.getElementById("generate-btn")
const randomBtn = document.getElementById("random-btn")

// Event listeners
generateBtn.addEventListener("click", generateScheme)
randomBtn.addEventListener("click", generateRandomScheme)

// Initial random scheme generation
generateRandomScheme()

// Generate a random color scheme and apply it
function generateRandomScheme() {
  pickRandomColor()
  pickRandomScheme()
  generateScheme()
}

// Pick a random color and set it in the picker input
function pickRandomColor() {
  const randomColor = generateRandomHexColor()
  pickerEl.value = randomColor
}

// Generate a random hex color
function generateRandomHexColor() {
  const hexColor = Math.random().toString(16).slice(2, 8)
  return `#${hexColor}`
}

// Pick a random color scheme from the options
function pickRandomScheme() {
  const options = schemeSelectEl.options
  const randomIndex = Math.floor(Math.random() * options.length)
  schemeSelectEl.selectedIndex = randomIndex
}

// Generate color scheme based on the selected color and scheme
function generateScheme() {
  const pickedColor = pickerEl.value.slice(1) // Remove '#' for hex
  const pickedScheme = schemeSelectEl.value

  fetchColorScheme(pickedColor, pickedScheme)
    .then(displayColorScheme)
    .catch(handleError)
}

// Fetch color scheme from the Color API
function fetchColorScheme(color, scheme) {
  const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`
  return fetch(url).then((res) => res.json())
}

// Display the fetched color scheme
function displayColorScheme(data) {
  const schemeHtml = data.colors.map(createColorBlock).join(" ")
  schemeEl.innerHTML = schemeHtml
}

// Create an individual color block for display
function createColorBlock(color) {
  const textColor = getContrastYIQ(color.hex.clean)
  return `
    <div class="color" style="background-color: ${color.hex.value}">
      <div class="color-info">
        <p class="color-hex" style="color: ${textColor}">${color.hex.value}</p>
        <p class="color-name" style="color: ${textColor}">${color.name.value}</p>
      </div>
    </div>
  `
}

// Calculate the contrast color (black or white) based on YIQ value
function getContrastYIQ(hexcolor) {
  const r = parseInt(hexcolor.slice(0, 2), 16)
  const g = parseInt(hexcolor.slice(2, 4), 16)
  const b = parseInt(hexcolor.slice(4, 6), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? "black" : "white"
}

// Error handling for fetch requests
function handleError(error) {
  console.error("Error fetching color scheme:", error)
  alert("There was an issue generating the color scheme. Please try again.")
}
