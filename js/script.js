function Login(username) {
    let u = username.toLowerCase();
    if(u === "ali"){
        alert("TRUE :)")
    }else {
        alert("شما نیمتوانید وارد شوید!!! :(")
    }
}
let user = prompt('Please Enter Username : ')

Login(user)