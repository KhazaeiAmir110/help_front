var pages = {
    'home' : 'This is a home !!!!',
    'about': 'about.html',
    'count' : 'This is a count !!!!',
    'me': 'This is a me !!!!!',
    'another-page': 'path/to/another-page.html',
};

function getPage(page) {
  var getReturn = pages[page];

  if (typeof getReturn === 'string') {
    document.getElementById('p-class').innerHTML = getReturn;
  } else if (typeof getReturn === 'undefined') {
    document.getElementById('p-class').innerHTML = pages.home;
  } else {
    fetch(getReturn)
      .then(response => response.text())
      .then(data => {
        var element = document.getElementById('p-class');
        element.innerHTML = data;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
}