function showName(name) {
    setTimeout(function () {
        console.log(name);
    }, 5000);
}

function showNameCB(name, cb) {
    setTimeout(function () {
        cb(name);
    }, 5000);
}

//showName("Salisu");

//showNameCB("Salisu", callMeBack);

function callMeBack(result) {
    console.log('Got ', result, ' from callback function');
}

function add(x, y) {
    let myx = new Number(x);
    let myy = new Number(y);
    if (myx && myy) {
        console.log(myx + myy);
    }
}

add("", "4");


let me = {};





