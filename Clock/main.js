let wakeUpTime = 7;
let noon = 12;
let lunchTime = 12;
let napTime = lunchTime + 2;
let partyTime;
let evening = 18;

//Getting it to show the current time on the page
let showCurrentTime = function () {

    //display the string on the webpage
    let clock = document.getElementById("clock");

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    //Set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {

        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        seconds = "0" + seconds;
    }

    // Put together the string that displays the time
    let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTImel
};

// Getting the clock to increment on its own and change out messages and pictures

let updateClock = function () {

    let time = new Date().getHours();
    let messageText;
    let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    let timeEventJS = document.getElementById("timeEvent");
    let lolcatImageJs = document.getElementById("lolcatImage");

    if (time == partyTime) {

        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Wake up!";
    }

    else if (time == lunchTime) {

        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    }
    else if (time == noon) {

        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";

        messageText = "Good morning!";

    } else if (time >= evening) {

        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";

    } else {

        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};

updateClock();

// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval(updateClock, oneSecond);


//Getting the Party Time Button to Work
let partyButton = document.getElementById("partyTimeButton");

let partyEvent = function () {

    if (partyTime < 0) {

        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partTimeButton.style.backgroundColor = "#0A8DAB";
    }
}

