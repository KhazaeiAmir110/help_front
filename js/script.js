// let number_1 = Number(prompt("numbder one :"));
// let number_2 = Number(prompt("number two : "));
//
// // alert(number_1 + number_2)

// دریافت نام کاربری و رمزعبور به صورت همزمان با یک پنجره ورودی
const userInput = prompt("لطفاً نام کاربری و رمزعبور خود را با کاما (,) جدا کنید:");

// جدا سازی نام کاربری و رمزعبور با استفاده از کاما (,) به عنوان جداکننده
const [username, password] = userInput.split(",");

// نمایش اطلاعات وارد شده
alert(`نام کاربری: ${username.trim()}\nرمزعبور: ${password.trim()}`);
