const pickerEl = document.getElementById("picked-color")
const schemeSelectEl = document.getElementById("scheme-select")
const GenerateBtn = document.getElementById("generate-btn")
const schemeEl = document.getElementById("scheme")

// set random color on load
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16)
  return "#" + n.slice(0, 6)
}

pickerEl.value = randomHexColorCode()
generateScheme()

GenerateBtn.addEventListener("click", generateScheme)

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
            <p>#123456</p>
            <p>color name</p>
          </div>
          `
      })
      schemeEl.innerHTML = schemeHtml.join(" ")
    })
}

// TODO
// Set font color based on backgruond color
