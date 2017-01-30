function getTempCallback(location, callback) {
    callback(undefined, 30);
    callback("city not found");
}
/*
getTempCallback("Tel Aviv", function (err, temp) {
    if (err) {
        console.log("error", err);
    } else {
        console.log("success", temp);
    }
});

function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        resolve(15);
        reject("city not found");
    });
}

getTempPromise("Tel Aviv")
    .then(function (temp) {
        console.log("promise success");
    }, function (err) {
        console.log("promiseerror", err);
    });

*/
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (!isNumber(a) || !isNumber(a)) {
            reject("not a number");
        } else {
            resolve(a + b);
        }
    });
}

addPromise("a", 2)
    .then(function (answer) {
        console.log("promise success: " + answer);
    }, function (errorMsg) {
        console.log(errorMsg);
    });