$(document).ready(() => {

    let hrs = $("#hours");
    let seconds = $("#seconds");
    let mins = $("#minutes");

    let start = $("#start");
    let stop = $("#stop");
    let reset = $("#reset");

    let timer = null; 
    let totalSecond = 0; 


    function formatTime(value) {
        return value < 10 ? `0${value}` : value;
    }


    function updateTime() {
        let hours = Math.floor(totalSecond / 3600);
        let minutes = Math.floor(totalSecond % 3600 / 60);
        let sec = totalSecond % 60;

        hrs.text(`${formatTime(hours)} : `);
        mins.text(`${formatTime(minutes)} : `);
        seconds.text(`${formatTime(sec)}`);

    }


    start.click(() => {
        if (!timer) {
            timer = setInterval(() => {
                totalSecond++;
                updateTime();
            }, 1000)
        }
    });


    stop.click(() => {
        clearInterval(timer);

        timer = null;
    });

    reset.click(() => {
        clearInterval(timer);
        timer = null;

        totalSecond = 0;
        updateTime();
    })

    updateTime();
})