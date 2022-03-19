// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
const array1 = ["biryani", "burger", "butter-chicken", "dessert", "dosa", "idly", "pasta", "pizza", "rice", "samosa"];
const array2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"];
random1 = getRandomItem(array1);
const call1 = getRandomItem(array2);

random2 = getRandomItem(array1);
const call2 = getRandomItem(array2);

random3 = getRandomItem(array1);
const call3 = getRandomItem(array2);
fall1 = "https://foodish-api.herokuapp.com/images/" + random1 + "/" + random1 + call1 + ".jpg"

fall2 = "https://foodish-api.herokuapp.com/images/" + random2 + "/" + random2 + call2 + ".jpg"

fall3 = "https://foodish-api.herokuapp.com/images/" + random3 + "/" + random3 + call3 + ".jpg"
var arr11 = [];
arr11.push(random1);

var arr22 = [];
arr22.push(random2);

var arr33 = [];
arr33.push(random3);

flute1 = arr11.map(x => x.replace(/[bcdfghjklmnpqrstcwxyz]/g, ' _ '));

flute2 = arr22.map(x => x.replace(/[bcdfghjklmnpqrstcwxyz]/g, ' _ '));

flute3 = arr33.map(x => x.replace(/[bcdfghjklmnpqrstcwxyz]/g, ' _ '));
var g;
var f;
var j;
function submit001() {
    b = input001.value;
    if (b == random1) {
        g = 1;
        input001.value = random1;
        check001.innerHTML = "<text class = button002>✅</text>";
    }
    else {
        input001.value = "Correct Answer: " + random1;
        check001.innerHTML = "<text class=button002>" + "❌" + "</text>";
    }

    c = input002.value;
    if (c == random2) {
        f = 1;
        input002.value = random2;
        check002.innerHTML = "<text class = button002>✅</text>";
    }
    else {
        input002.value = "Correct Answer: " + random2;
        check002.innerHTML = "<text class=button002>" + "❌" + "</text>";
    }

    d = input003.value;
    if (d == random3) {
        j = 1;
        input003.value = random3;
        check003.innerHTML = "<text class = button002>✅</text>";
    }
    else {
        input003.value = "Correct Answer: " + random3;
        check003.innerHTML = "<text class=button002>" + "❌" + "</text>";
    }
    if (g === 1 && f == 1 && j == 1) {
        document.getElementById("box").style.display = "block";
    }
}
function pop() {
    document.getElementById("box").style.display = "none";
}
function startgame() {
    document.getElementById('welcomeDiv').style.display = "block";

}

function EndGame001() {
    document.getElementById("welcomeDiv").style.display = "none";
    document.write('<h1 style="text-align: center;">Thank You For Playing!!!')
}

function PlayAgain001() {
    document.location.reload(true)

}

var form = document.getElementById('form')
addEventListener('submit', function (event) {


    event.preventDefault()
    var url1 = fall1
    var image1 = document.getElementById('img1')
    img1.src = url1

    var url2 = fall2
    var image2 = document.getElementById('img2')
    img2.src = url2

    var url3 = fall3
    var image3 = document.getElementById('img3')
    img3.src = url3
})




