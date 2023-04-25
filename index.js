let colorsArr = []
const btn = document.getElementById('get-color-btn')
const colorInput = document.getElementById('color-input')
const schemeInput = document.getElementById('choose-scheme')

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
         
      }) 
}