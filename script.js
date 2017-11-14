function generateRandomNumber(){
    let color = {};
    color.r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    color.g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    color.b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    return color;
}

// First function test
console.log(generateRandomNumber());