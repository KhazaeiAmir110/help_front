function displayText() {
      var selectElement = document.getElementById('mySelect');
      var selectedValue = selectElement.value;

      var value_1 = document.getElementById('value_1');
      var value_2 = document.getElementById('value_2');


      if (selectedValue === "0"){
        document.querySelector('#value_1').style.display = 'none';
        document.querySelector('#value_2').style.display = 'none';
      } else if (selectedValue === "1") {
        document.querySelector('#value_1').style.display = 'list-item';
        document.querySelector('#value_2').style.display = 'none';
      } else if (selectedValue === "2") {
          document.querySelector('#value_1').style.display = 'none';
          document.querySelector('#value_2').style.display = 'list-item';
      }
}
