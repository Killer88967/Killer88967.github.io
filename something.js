console.log("This is just a message.");
setTimeout(() => {
    console.warn("This is a warn message.");
}, 3000);

setTimeout(() => {
    console.error("This is a error message");
}, 6000);

setTimeout(() => {
    console.clear();
}, 9000);