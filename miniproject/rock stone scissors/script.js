let images = document.querySelectorAll('.img-items')

for (let i = 0; i <= images.length-1; i++) {
    images[i].addEventListener("click", ()=>{hiddenselect(i),nothidden()})
}

function hiddenselect(i){
    for (let j = 0; j <= images.length-1; j++) {
        if (j !== i){
            images[j].classList.add('hidden')
        }
    }
}

function nothidden(){
    rand = Math.floor((Math.random()*10)/4)
    cpuimages = document.querySelectorAll('.img-cpu-choosed')
    cpuimages[rand].classList.remove('hidden')
}