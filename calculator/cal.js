
let inp=document.getElementById('input')
let iop=document.getElementById('output')
function displaynumber(number){
   inp.innerHTML=inp.innerText+number
}
function calculator(){
    let number=inp.innerText
    number=number.replaceAll('x','*')
    iop.innerText=eval(number)
}
function spaces(){
    inp.innerHTML=inp.innerText+'&nbsp'
}
function allclear(){
    inp.innerText=''
    iop.innerText=''

}
function backspace(){
    inp.innerText=inp.innerText.slice(0,-1)
}


