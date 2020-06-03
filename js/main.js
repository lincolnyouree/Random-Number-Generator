var numArray = [];
var numArray2 = [];
var numArray3 = [];
var sum = 0;

function handleClick() {
    let randNum = Math.floor((Math.random() * 1000000)) + 1;
    document.getElementById('numberBox').value = randNum; 
    numArray.push(randNum);
    randomNum();
    sum += randColor;
    document.getElementById('sum').textContent = sum;
}

document.getElementById('btn').addEventListener('click', handleClick);