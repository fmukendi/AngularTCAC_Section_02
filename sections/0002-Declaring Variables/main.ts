


function doSomething() {
    for (var i = 0; i < 5; i++) {
       console.log(i);
    }

    console.log('var ---Finally: ' + i); // i is availble here
}

doSomething();

function doSomething2() {
    for (let i = 0; i < 5; i++) {
       console.log(i);
    }

    // console.log('let ---Finally: ' + i);// i not available here
}

doSomething2();