

var pages = {
    'home' : 'This is a home !!!!',
    'about': 'This is a about !!!!!'
};

function getPage(page) {
    var getReturn;

    switch (page) {

        case 'home':
            getReturn = pages.home;
            break;

        case 'about' :
            getReturn = pages.about;
            break;

        default :
            getReturn = pages.home;

    }
    document.getElementById('p-class').innerHTML = getReturn
}