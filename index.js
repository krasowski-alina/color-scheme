let colorsArr = []
const colorInput = document.getElementById('color-input')
const schemeInput = document.getElementById('choose-scheme')

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
  for(let i=0; i< colorsArr.length; i++ ){
    document.querySelectorAll('.color-block').forEach(block => {
      return block[i].textContent = colorsArr[i]
    })
    document.querySelectorAll('.color-block').forEach(block => {
      return block.style.backgroundColor = colorsArr[i]
  })
  }

}