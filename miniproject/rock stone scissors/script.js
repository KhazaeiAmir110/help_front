let images = document.querySelectorAll('.img-items')
let cpuimages = document.querySelectorAll('.img-cpu-choosed')


for (let i = 0; i <= images.length-1; i++) {
    images[i].addEventListener("click", ()=>{
    rand = Math.floor((Math.random()*10)/4)
    hiddenselect(i);
    nothidden();
    gamelogic(i,rand);
    })
}

function hiddenselect(i){
    images = document.querySelectorAll('.img-items')
    for (let j = 0; j <= images.length-1; j++) {
        if (j !== i){
            images[j].classList.add('hidden')
        }
    }
}

function nothidden(){
    cpuimages[rand].classList.remove('hidden')
}


function gamelogic(user,cpu){
    const userpoint = document.querySelector('#user-point')
    const cpupoint = document.querySelector('#cpu-point')
    if (user !== cpu){
        if (user===0){
            if (cpu===1){
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
                document.getElementById('result_box').style.backgroundColor = '#7df275'
            }else{
                cpupoint.innerHTML = Number(cpupoint.innerHTML) + 1
                document.getElementById('result_box').style.backgroundColor = '#f44747'
            }
        }
        else if (user===1){
            if (cpu===0){
                cpupoint.innerHTML = Number(cpupoint.innerHTML) + 1
            }else{
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
                document.getElementById('result_box').style.backgroundColor = '#7df275'
            }
        }
        else{
            if (cpu===0){
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
                document.getElementById('result_box').style.backgroundColor = '#7df275'
            }else{
                cpupoint.innerHTML = Number(cpupoint.innerHTML) + 1
            }
        }
    }else{
        alert("not win")
    }
}


function refresh(){
    for(let i=0; i<= images.length - 1 ; i++){
        images[i].classList.remove("hidden")
        cpuimages[i].classList.add("hidden")
    }
}