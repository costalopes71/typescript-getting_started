let squareIt = (x: number) => x * x;
let result = squareIt(4);

console.log(result);

let printName = () => console.log('Joao');
printName();

let sum = (x: number, y: number) => x + y;
console.log(sum);

let scores: number[] = [2, 102, 98, 124, 177, 33];
let highscores: number[];

highscores = scores.filter((element, index, array) => {

    if (element > 100) {
        return true;
    }

});