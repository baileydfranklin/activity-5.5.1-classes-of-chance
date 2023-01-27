class Casino {
    constructor(name, timesPlayed){
        this.name = name;
        this.timesPlayed = 1;
    }
    playGame(betAmount){
        let flip = Math.random();
        if(flip <= .5){
            console.log("Sorry, you lost this round!")
            console.log(`You played ${this.timesPlayed++} times.`)
        }else if(flip > .5){
            console.log(`You won! Please take your bet amount. $${betAmount}`)
            console.log(`You played ${this.timesPlayed++} times.`)
        }
    }
    
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/



// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     brag() {
//         console.log(`My car is a ${this.year} ${this.brand} ${this.model}!`);
//     }
// }

// const myCoolCar = new Car("Ford", "Mustang", 2022);
// myCoolCar.brag();
// // My car is a 2022 Ford Mustang!
