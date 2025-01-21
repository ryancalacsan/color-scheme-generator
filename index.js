const pickerEl = document.getElementById("picked-color")
const schemeSelectEl = document.getElementById("scheme-select")
const schemeEl = document.getElementById("scheme")
const GenerateBtn = document.getElementById("generate-btn")
const RandomBtn = document.getElementById("random-btn")

function generateRandomScheme() {
  pickRandomColor()
  pickRandomScheme()
  generateScheme()
}

function pickRandomColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16)
  pickerEl.value = "#" + n.slice(0, 6)
}

function pickRandomScheme() {
  const options = schemeSelectEl.options
  const randomIndex = Math.floor(Math.random() * options.length)

  schemeSelectEl.selectedIndex = randomIndex
}

function generateScheme() {
  let pickedColor = pickerEl.value.slice(1)
  let pickedScheme = schemeSelectEl.value
  let schemeHtml = []

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${pickedScheme}`
  )
    .then((res) => res.json())
    .then((data) => {
      schemeHtml = data.colors.map((color) => {
        return `
      <div class="color" style="background-color: ${color.hex.value}">
      <div class='color-info'>
      <p class='color-hex' style="color:${getContrastYIQ(color.hex.clean)}">${
          color.hex.value
        }</p>
      <p class='color-name' style="color:${getContrastYIQ(color.hex.clean)}">${
          color.name.value
        }</p>
      </div>
      </div>
      `
      })
      schemeEl.innerHTML = schemeHtml.join(" ")
    })
}

// get contrast of bg color to set text to black or white
function getContrastYIQ(hexcolor) {
  const r = parseInt(hexcolor.slice(0, 2), 16)
  const g = parseInt(hexcolor.slice(2, 4), 16)
  const b = parseInt(hexcolor.slice(4, 6), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? "black" : "white"
}

GenerateBtn.addEventListener("click", generateScheme)
RandomBtn.addEventListener("click", generateRandomScheme)

// generate random scheme on load
generateRandomScheme()
