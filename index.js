setInterval(() => {
    function showTime(){
        date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
    
        session = (hours > 12) ? "PM" : "AM";
    
        hours = (hours==0) ? (hours = 12) : hours;
        hours = (hours>12) ? (hours - 12) : hours;
    
        hours = (hours < 10) ? ("0" + hours) : hours;
        minutes = (minutes < 10) ? ("0" + minutes) : minutes;
        seconds = (seconds < 10) ? ("0" + seconds) : seconds;
    
        let time = `${hours} : ${minutes} : ${seconds} ${session}`;
        document.getElementById("myClock").innerText = time;
    }
    
    showTime();
    
}, 1000);


