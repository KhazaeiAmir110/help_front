
function LoadPage() {
    let xhr = new XMLHttpRequest();
    let xhr2 = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('demo').innerHTML = this.responseText;
        }
    }

    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            document.getElementById('first').innerHTML = this.responseText;
        }
    }

    let name = document.getElementById('name').value;
    xhr.open("GET", 'info.txt', true);
    xhr2.open("GET", 'info.html?name=' + encodeURIComponent(name), true);

    xhr.send();
    xhr2.send();
}
