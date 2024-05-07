
// get Id
document.getElementById('clock').innerHTML = 'innerHTML';


// change body
// document.body.innerHTML = 'fdd'
// document.documentElement.innerHTML = 'dfsd'

// get tag name
let h1 = document.getElementsByTagName('h1');
h1[1].innerHTML = 'title one';
console.log(h1[0].innerHTML);

//getId => getTag
const body = document.getElementById("div-id");
const div = body.getElementsByTagName('p');
console.log('p : ' + div[0].innerHTML)


// image : change image
document.getElementById('image').src = 'miniproject/rock%20stone%20scissors/images/rock.png'

// add date
document.getElementById('date').innerHTML = 'Date : ' + Date()