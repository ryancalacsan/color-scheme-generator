const pickerEl = document.getElementById("picked-color")
const schemeSelectEl = document.getElementById("scheme-select")
const GenerateBtn = document.getElementById("generate-btn")
const schemeEl = document.getElementById("scheme")

GenerateBtn.addEventListener("click", () => {
  let pickedColor = pickerEl.value.slice(1)
  let pickedScheme = schemeSelectEl.value
  let schemeHtml = []

  console.log(pickedColor)
  console.log(pickedScheme)
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${pickedScheme}`
  )
    .then((res) => res.json())
    .then((data) => {
      schemeHtml = data.colors.map((color) => {
        return `
        <div class="color" style="background-color: ${color.hex.value}"></div>
        `
      })
      schemeEl.innerHTML = schemeHtml.join(" ")
    })
})
