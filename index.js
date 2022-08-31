
let colorsArray = []
let colorsHtml = ''

document.getElementById('get-colors').addEventListener('click',async (e) =>{
    e.preventDefault()
    const colorSelectElement = document.getElementById('color-select').value.replace(/#/g, '')
    const colorSchemeElement = document.getElementById('color-tones').value.toLowerCase()

    await fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelectElement}&mode=${colorSchemeElement}&format=json&count=6`)
        .then(res => res.json())
        .then(data => {
            for(let color of data.colors){
                colorsArray.push(color.hex.value)
            }
        })
    renderColors()    
})


///////////////////////////////////////////////////
//Renders the Html of colors and resets the form//
/////////////////////////////////////////////////

function renderColors(){
    for (let color of colorsArray){
        colorsHtml += `<div class = "column">
                            <div style = "background-color: ${color}; color: white" class = "color"></div>
                            <div class = "color-text" id = ${color}>${color}</div>
                        </div>`
    }
    document.getElementById('colors').innerHTML = colorsHtml
    document.getElementById('form').reset()
    colorsArray = []
    colorsHtml = ''
}

