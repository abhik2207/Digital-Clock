const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        let am_or_pm = hour>=12 ? "PM" : "AM";

        hour = (hour % 12) || 12;

        hour = formatZeros(hour);
        minute = formatZeros(minute);
        second = formatZeros(second);
        
        return `${hour}:${minute}:${second} ${am_or_pm}`;
    }

    function formatZeros(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time
    }
}