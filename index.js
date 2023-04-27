let colorsArr = []
const colorInput = document.getElementById('color-input')
const schemeInput = document.getElementById('choose-scheme')
const blocks = document.querySelectorAll('.color-block')

document.getElementById('inputs-form').addEventListener("submit", getColorScheme)

function getColorScheme(e){
    e.preventDefault()
    let color = colorInput.value.slice(1)
    let colorScheme = schemeInput.value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorScheme}&count=5`)
      .then(res => res.json())
      .then( data => {
            const hexArray = data.colors
            hexArray.map(color => {
                colorsArr.push(color.hex.value)
          })
          renderColors()
      }) 
}
function renderColors(){
  document.getElementById('one').textContent = colorsArr[0]
  document.getElementById('two').textContent = colorsArr[1]
  document.getElementById('three').textContent = colorsArr[2]
  document.getElementById('four').textContent = colorsArr[3]
  document.getElementById('five').textContent = colorsArr[4]
let i =0
blocks.forEach(block => {
    return block.style.backgroundColor = colorsArr[i++]
})
}