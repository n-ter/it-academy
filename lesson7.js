function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let player1 = 0;
let player2 = 0;
for (let i = 0; i < 4; i++){
    player1 = player1 + getRandomInt(1,7)
    player2 = player2 + getRandomInt(1,7)
}
if (player1 === player2){
    console.log('Ничья!')
} else if (player1 > player2){
    console.log('Выиграл первый игрок')
} else {
    console.log('Выиграл второй игрок')
}




function numberOfFriday13(year, mountNumber = 12 ) {
    let count = 0;
    for (let month=0; month<mountNumber; month++) {
        let d = new Date(year,month,13);
        if(d.getDay() == 5){
            count++;
        }
    }
    return count;
}
let now = new Date();
let mountNum = 0;
if (now.getDate()< 13){
   mountNum = now.getMonth()
} else (mountNum = now.getMonth() + 1)
let daysInYear = 0;
let year2022 = numberOfFriday13(2022, mountNum)
let result = 0;
for(let i = 2000; i < 2022 ; i++){
    daysInYear = numberOfFriday13(i);
    result = result + daysInYear;
}
console.log(result + year2022)






function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}
function smashNumber(func, appointedNumber, count){
    number = appointedNumber;
    let numbers = [];
    for(let int = 0; int < (count-1); int++){
        minusNumber = func(0, number)
        numbers.push(+minusNumber)
        number = number - minusNumber
    }
    if (func == getRandomInt){
        numbers.push(number)
        console.log(numbers)
    }else{
        numbers.push(+number.toFixed(2))
        console.log(numbers)
    }
}
smashNumber(getRandomInt, 15, 3)

smashNumber(getRandomArbitrary, 15, 3)