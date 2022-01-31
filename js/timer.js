var x = setInterval(function() {
    var countDate = new Date("April 23, 2022 12:00:00").getTime();
    var now = new Date().getTime();
    var gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) /  hour);
    const textMinute = Math.floor((gap % hour) /  minute);
    const textSecond= Math.floor((gap % minute) /  second);

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond
}, 1000);
// Event is at 12pm Central, so the "hour", "min", & "sec" values will read as "0" at 12pm every day, and one "day" will be subtracted