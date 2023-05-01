const colorInput = document.getElementById('color-input')
const schemeInput = document.getElementById('choose-scheme')

document.getElementById('inputs-form').addEventListener("submit", (e)=> {
  e.preventDefault()
  let colorValue = colorInput.value.slice(1)
  let colorScheme = schemeInput.value
  getColorScheme(colorValue, colorScheme)
})

function getColorScheme(color, scheme){
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`)
      .then(res => res.json())
      .then( data => {
            let colorsArr = []
            data.colors.map(color => {
                colorsArr.push(color.hex.value)
                return colorsArr
          })
          renderColors(colorsArr)
      }) 
}
function renderColors(colorsArr){

  document.getElementById('one').textContent = colorsArr[0]
  document.getElementById('two').textContent = colorsArr[1]
  document.getElementById('three').textContent = colorsArr[2]
  document.getElementById('four').textContent = colorsArr[3]
  document.getElementById('five').textContent = colorsArr[4]
  let i =0
    document.querySelectorAll('.color-block').forEach(block => {
      return block.style.backgroundColor = colorsArr[i++]
    })
  }

