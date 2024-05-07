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

