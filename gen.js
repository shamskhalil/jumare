let x = 0;
function* g(usaernam, pass) {
    while (true) {
        yield ++x;
    }
}

let p = g();

let stop = 0;
while (stop < 1000) {
    stop++;
    console.log(p.next().value);
}
console.log(p.next().value);
console.log(p.next().value);
console.log(p.next().value);
console.log(p.next().value);
