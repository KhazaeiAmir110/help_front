
// تولید عدد تصادفی
alert("عدد تصدفی 5 رقمی شما : " + Math.floor(Math.random()*100000))

// اعداد زوج بیم 0 تا 100
for (let i = 0; i < 100; i++) {
    if (i%2==0){
        console.log(i)
    }
}

// حلقه for
let add=0;
for (let i = 1; i < 6; i++) {
    add = add + Number(prompt('لطفا عدد شماره ' + i + ' را وارد کنید.'))
}
alert(' مجموع قیمت شما 😊😊😊😊😊😊😂😂😂😂' + add)

// میانگین
let average = 0;
for (let i = 1; i < 6; i++) {
    average += Number(prompt('لطفا عدد شماره '+ i + 'را وارد کیند!!'))
}
alert('میانگین شما : ' + average/5)

// مجموع ارقام
let add = prompt('لطفا عدد مورد نظر را وارد کنید : ')
let sum = 0;
for (let i = 0; i < add.length; i++) {
    sum = sum +  Number(add[i]);
}
alert(sum)

// تعداد ارقام عدد ورودی
let add = prompt('لطفا عدد مورد نظر خود را وارد کیند : ')
alert(add.length)

// اعداد زوج بین دوعدد
let add1 = Number(prompt('عدد اول : '))
let add2 = Number(prompt('عدد دوم : '))
while (add1 < add2+1) {
    if(add1 % 2 == 0){
        console.log(add1)
    }
    add1++;
}

// اعداد دلخواه و میانگین آنها
let add = Number(prompt('تعداد اعداد را وارد کنید : '))
let average=0
let i=0;
while (i<add) {
    average += Number(prompt('لطفا عدد را وارد کنید : '))
    i++;
}
alert('You average : ' + average/add)

// توان با حلقه
let add = Number(prompt('عدد اصلی : '))
let tavan = Number(prompt('توان مورد نظر : '))

let i=0;
let add2=1;
while (i < tavan) {
    add2 =   add2*add
    i++;

}
alert(add2)