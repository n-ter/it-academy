sumNumbers = function(string){
    let numbers = []
    for (let num of string) {
       numbers.push(num)
    }
    let sum = 0
    for (let i=0; i < numbers.length/2; i++){
         sum = sum + +numbers[i]
    };
    let sum2 = 0
    for (let i=3; i < numbers.length; i++){
        sum2 = sum2 + +numbers[i]
    };
    if (sum === sum2){
        console.log('да')
    }else {
        console.log('нет')
    }
};
sumNumbers("123123");


let n = 1000;
let iteration_num = 0;
while (n/2 > 50){
    n = n/2
    iteration_num++;
}
iteration_num = iteration_num + 1 ;
console.log (iteration_num)


let arr =[12, 15, 20, 25, 59, 79];
let result = arr.reduce(function(sum, elem) {
    return sum + elem;
}, 0);
console.log(result/arr.length);


let arr2 = [1, 2, 3, 4, 5];
arr2.splice(3, 0,  'a', 'b', 'c');
console.log(arr2)


let arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 0,  'a', 'b');
arr3.splice(6, 0,   'c');
arr3.splice(8, 0,   'e');
console.log(arr3)


let arr4 = [3, 4, 1, 2, 7];
arr4.sort()
console.log(arr4)