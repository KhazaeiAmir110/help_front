let images = document.querySelectorAll('.img-items')
let rand

for (let i = 0; i <= images.length-1; i++) {
    images[i].addEventListener("click", ()=>{
    hiddenselect(i);
    nothidden();
    gamelogic(i,rand);
    })
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


function gamelogic(user,cpu){
    const userpoint = document.querySelector('#user-point')
    const cpupoint = document.querySelector('#cpu-point')
    if (user !== cpu){
        if (user==0){
            if (cpu==1){
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
            }else{
                cpupoint.innerHTML = Number(cpupoint.innerHTML) + 1
            }
        }
        else if (user==1){
            if (cpu==0){
                cpupoint.innerHTML = Number(cpupoint.innerHTML) + 1
            }else{
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
            }
        }
        else{
            if (cpu==0){
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
            }else{
                cpupoint.innerHTML = Number(cpupoint.innerHTML) + 1
            }
        }
    }else{
        alert("not win")
    }
}