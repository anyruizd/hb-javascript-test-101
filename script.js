function generateRandomNumber(){
    const color = {};
    color.r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    color.g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    color.b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    return color;
}


function filterNegativeNumbers(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] >= 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}


function functionalfilterNegativeNumbers(array){
    return newArray = array.filter(function(x){ return x >= 0 });
}

// First function test
console.log(generateRandomNumber());

// Second function test 
console.log(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));

// Secon function (functional) test
console.log(functionalfilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));