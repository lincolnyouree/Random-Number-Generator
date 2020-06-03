var numArray = [];
var numArray2 = [];
var numArray3 = [];
var colorList = ['red', 'orange', 'yellow', 'green', 'blue'];
var sum = 0;

// to make numbers random 

function handleClick() {
    let randNum = Math.floor((Math.random() * 100)) + 1;
    document.getElementById('numberBox').value = randNum; 
    numArray.push(randNum);
    randomNum();
    sum += randColor;
    document.getElementById('sum').textContent = sum;
}

// to make colors random - very similar to numbers

function randomColor() {
    let randIdx = Math.floor((Math.random() * 5)) + 1;
    let randColor = colorList[randIdx];
    document.getElementById('numberBox').style.color = randColor;
    return randColor;
}

document.getElementById('btn').addEventListener('click', handleClick);

// challenge: everytime you hit random number add a div to the page 



///////////////////////////////////////////////////////////////////////////



function handleClick2() {
    let randNum = Math.floor((Math.random() * 100)) + 1;
    document.getElementById('numberBox2').value = randNum; 
    numArray2.push(randNum);
    randomNum();
    sum += randColor;
    document.getElementById('sum').textContent = sum;
}



function randomColor() {
    let randIdx = Math.floor((Math.random() * 5)) + 1;
    let randColor = colorList[randIdx];
    document.getElementById('numberBox2').style.color = randColor;
    return randColor;
}

document.getElementById('btn').addEventListener('click', handleClick2);

//////////////////////////////////////////////////////////////////////

function handleClick3() {
    let randNum = Math.floor((Math.random() * 100)) + 1;
    document.getElementById('numberBox3').value = randNum; 
    numArray3.push(randNum);
    randomNum();
    sum += randColor;
    document.getElementById('sum').textContent = sum;
}



function randomColor() {
    let randIdx = Math.floor((Math.random() * 5)) + 1;
    let randColor = colorList[randIdx];
    document.getElementById('numberBox3').style.color = randColor;
    return randColor;
}

document.getElementById('btn').addEventListener('click', handleClick3);

