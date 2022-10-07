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
   mountNum = now.getMonth() + 1
} else (mountNum = now.getMonth() + 2)
let daysInYear = 0;
let year2022 = numberOfFriday13(2022, mountNum)
let result = 0;
for(let i = 2000; i < 2022 ; i++){
    daysInYear = numberOfFriday13(i);
    result = result + daysInYear;
}
console.log(result + year2022)