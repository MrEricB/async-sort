//sleep sort
var numbers = [99, 8, 7,11,6,2,1,12,9,45];
var sorted = []

var async_sort = new Promise((resolve, reject) => {
    numbers.forEach((num) => {
        setTimeout(() => {
            // console.log(num);
            sorted.push(num);
            if(numbers.length === sorted.length){
                resolve(sorted);
            }
        },num);
    });
});

async_sort.then((successMessage) => {
    console.log(successMessage);
});

