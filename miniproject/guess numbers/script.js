let code = Math.floor(Math.random() * 101)

function checkGuess(){
    let number = document.querySelector('#userGuess').value
    if (number == code){
        document.querySelector('#userGuess').disable = true
        document.querySelector('#game').style.backgroundColor = '#07f366'
        alert('شما عدد را به درستی وارد کردید')
    }else {
        if (number > code){
            document.querySelector('#historyArea').innerHTML = 'عددی که وارد کردید بزرگتر از عدد مد نظر است'
            document.querySelector('#game').style.backgroundColor = '#5290d2'
        }else if(number < code) {
            document.querySelector('#historyArea').innerHTML = 'عددی که وارد کردید کوچکتر از عدد مد نظر است'
            document.querySelector('#game').style.backgroundColor = '#d2525a'
        }
    }
}
