let inpuT = document.querySelector('.input1')
let buttoN = document.querySelector('.button1')
let hr = document.querySelector('.h2')
let textArray = []

buttoN.addEventListener('click',()=>{
    let textinput = inpuT.value
    textArray.push(textinput)
    hr.innerHTML = ''
    
textArray.forEach(text =>{
    let textreverse = textinput.split('').reverse().join('')
    hr.innerHTML += textreverse + '<br>'
})
    

})