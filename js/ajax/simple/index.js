

function loadDoc() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        document.getElementById('demo').innerHTML = this.responseText;
    }

    xhr.open("GET", 'info.txt', true)

    xhr.send()
}