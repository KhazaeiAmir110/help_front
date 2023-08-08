alert("سلام خوش اومدی به سایت ما" + '\n' + 'لطفا اطلاعات زیر را وارد کنید : ')

function Register(username,password ) {
    if (username.length < 3) {
        alert('username false!!!!!!:(')
    }else if ( password.length < 8){
        alert('password false!!!!:(')
    }
    else {
        alert('TRUE :)')
    }
}
let username = prompt('username: ','username')
let password = prompt('password L ','password')

Register(username,password)