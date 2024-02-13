function show(a) {

    console.log("I am function" + a);
}

function geeky(a, callback) {
    callback(a);
}

geeky(101, show);