

var pages = {
    'home' : 'This is a home !!!!',
    'about': 'This is a about !!!!!',
    'count' : 'This is a count !!!!',
    'me': 'This is a me !!!!!'
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

        case 'count':
            getReturn = pages.count;
            break;

        case 'me' :
            getReturn = pages.me;
            break;

        default :
            getReturn = pages.home;

    }
    document.getElementById('p-class').innerHTML = getReturn
}