function random(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function returnNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number)
        }, random(1, 5) * 1000)
    })
    .then(data => {
    return data
})
}
let promise1 = returnNumber(1);
let promise2 = returnNumber(2);
let promise3 = returnNumber(3);

Promise.race([promise1, promise2, promise3])
    .then(data => {
        console.log ('Promice race ', data)
    })






function getNum(num1, num2, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(random(num1, num2))
        }, time)
    })
        .then(data => {
            console.log(data)
            return data
        })
}
async function returnGetNum (){
    const result = await getNum(1, 5 , 3000);
    console.log (result * result)
}
returnGetNum ()







let getNum1 = getNum(1, 5, 3000);
let getNum2 = getNum(6, 10, 5000);
async function returnGetNumbers (){
    const result1 = await getNum1;
    const result2 = await getNum2;
    console.log (result1 + result2)
}
returnGetNumbers ()