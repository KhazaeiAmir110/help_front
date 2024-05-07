// onclick = JavaScript

// change text
function changeText(id) {
    id.innerHTML = 'Oops !!'
}

// change background
function changeBackground(id) {
    id.style.backgroundColor = 'rgba(220,176,234,0.37)';
}

// Data
// onclick = date()
document.getElementById('btn-dat').onclick = date;
function date() {
    document.getElementById('date').innerHTML = Date();
}

// oninput
function input(id) {
    const name = id.value;
    document.getElementById('p-input').innerHTML = 'Hello  '+name+'!!!'
}

// Upper
function upper() {
    const input = document.getElementById('name-upper');
    input.value = input.value.toUpperCase();
}


function upperclick() {
  const x = document.getElementById("name-click");
  x.value = x.value.toUpperCase();
}