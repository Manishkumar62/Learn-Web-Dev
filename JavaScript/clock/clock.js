
function updateClock(){
    //Get the current date
    let currentTime = new Date();
    //Exrtact hour,minutes,seconds from the date
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    //pad 0 if minutes or seconds is less than 10(single digits)
    currentMinutes = (currentMinutes < 10 ? "0":"")+currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0":"")+currentSeconds;
    //convert railway clock to am pm clock
    currentHours = (currentHours > 12) ? currentHours-12:currentHours;
    currentHours = (currentHours == 0) ? 12:currentHours;
    currentHours = (currentHours < 10 ? "0":"")+currentHours;
    //choose am pm as per the time of the day
    let timeOfDay = (currentHours < 12) ? "AM":"PM";
    //Prepare the time string from hour,minute,second
    let currentTimeStr = currentHours+":"       +currentMinutes+":"+currentSeconds+" "+timeOfDay;
    //insert the time string inside dom
    document.getElementById('clock').innerHTML = currentTimeStr;
}