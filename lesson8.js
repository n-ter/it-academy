function first (arr){
    arr.reverse();
    console.log( arr );
};
first([1, 2, 3, 4, 5, 6]);





function second (arr2){
console.log(Math.max(...arr2));
};
second([3,67,15]);




function fib(n, m) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    let arr3 = Array.from(String(b));
    console.log(arr3.splice(0, m));
};
fib(100, 5);




function compareNumbers(num1, num2){

};
compareNumbers(3487, 3794);




function sortArray(arr){
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    arr.sort(compareNumeric);
    return arr;
};
function sortArrayReverse(arr){
    arr2 = sortArray(arr).reverse();
   return arr2;
};
console.log(sortArray([1, 2, 19, 44, 5, 6]));
console.log(sortArrayReverse([1, 2, 19, 44, 5, 6]))





const makeUniq = (arr) => {
    const uniqSet = new Set(arr);
    console.log([...uniqSet]);
}
makeUniq([5, 2, 3, 1, 1, 3, 4]);