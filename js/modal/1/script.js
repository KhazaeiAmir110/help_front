const modal_base = document.querySelector('.base-modal')
const btn_base = document.querySelector('.open')
const closeBtn = document.querySelector('.closeBtn')


btn_base.addEventListener('click', ()=>{
    modal_base.style.display = 'block'
})

closeBtn.addEventListener('click', ()=>{
    modal_base.style.display = 'none'
})

window.addEventListener('click', (event)=>{
    if (event.target === modal_base){
        modal_base.style.display = 'none'
    }
})