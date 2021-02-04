
function add1() {
    console.log(this);
}

let add2 = function () {
    console.log(this);
}

let add3 = () => {
    console.log(this);
}

add1();
add2();
add3();