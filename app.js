const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button.
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('./cj-whoopty.mp3');

// Function to play the alarm ringtone.
function ringBell() {
    audio.play();
}

// This function will run whenever alarm is set from the UI.
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    let now = new Date();

    let timeToAlarm = (alarmDate - now);
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
}