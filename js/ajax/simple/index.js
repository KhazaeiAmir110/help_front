

function loadDoc() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        document.getElementById('demo').innerHTML = this.responseText;
    }

    xhr.open("GET", 'help.html', true)

    xhr.send()
}

function send() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        var val = document.getElementById('input_id').value;
        if (val === 'amir'){
            document.getElementById('titr').innerHTML = "Hellow Amir"
        }
    }
    xhr.open("POST")
    xhr.send()
}