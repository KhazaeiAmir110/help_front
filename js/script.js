function displayText() {
    var selectElement = document.getElementById('mySelect');
    var selectedValue = selectElement.value;
    var textElement = document.getElementById('textToShow');
    var text = document.getElementById('text');

    if (selectedValue === "0") {
    textElement.innerHTML = "متن برای همه";
    document.querySelector('#textToShow').style.display = 'flex';
    } else if (selectedValue === "2") {
    textElement.innerHTML = "متن برای احسان امیری";
    document.querySelector('#textToShow').style.display = 'inline';

    document.querySelector('#text').style.display = 'list-item';
    
    } else {
    textElement.innerHTML = "متن اولیه";
    }
}
