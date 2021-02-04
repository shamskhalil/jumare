/*
function add(x, y, phone) {
    phone(null, x + y);
}
*/

function add(x, y) {
    return new Promise(function (resolve, reject) {
        /*if (x < 10) {
            reject('Sorry x is less than 10');
        }*/
        resolve(x + y);
    });
}

(async function () {
    let r1 = await add(1, 2);
    let r2 = await add(r1, 3);
    let r3 = await add(r2, 4);
    console.log('SUM IS >>> ', r3);
})();

/*
add(1, 2)
    .then(function (result) {
        add(result, 3)
            .then(function (result) {
                add(result, 4)
                    .then(console.log(result));
            })
    })
    .catch(function (err) {
        console.log('ERROR >>> ', err);
    })
*/
/*
add(1, 2, function (err, res) {
    let sum = res;
    add(res, 3, function (err, res) {
        let sum = res;
        add(res, 4, function (err, res) {
            let sum = res;
            console.log('SUM >> ', sum);
        })
    })
})
*/
