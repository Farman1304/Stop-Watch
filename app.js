var timeStatus = document.getElementById('time');
var startButton = document.getElementById('start');
var resetButton =  document.getElementById('reset');
var lapButton = document.getElementById ('lap');
var lapList = document.getElementById('ulForli')


var hours = 0;
var minutes = 0;
var seconds = 0;

var isStart = false;
var timer = null;

function displayTime () {
    

    var h = hours;
    var m = minutes;
    var s = seconds;

    if( h < 10) {
        h = '0' + h;
    }

    if(  m < 10) {
        m = '0' + m;
    }

    if( s < 10) {
        s = '0' + s;
    }

timeStatus.textContent = h + ':' + m + ':' + s ;

}


startButton.addEventListener('click' , function () {
    startButton.textContent= 'Stop'
    

    if(isStart === false) {

        timer = setInterval( function()  {
            isStart = true
            
            seconds++

            if(seconds===60) {
                minutes++
                seconds = 0;
            }


            if(minutes === 60) {
                hours++
                minutes=0;
            }


            displayTime ()
        }, 100);


    } else {

        isStart = false;
        startButton.textContent = 'Resume';
        clearInterval (timer) 
            timer = null;
    }})


resetButton.addEventListener ('click', function () {
    
    clearInterval (timer)
    isStart = false
    seconds= 0;
    minutes= 0;
    hours = 0;

    displayTime ();

    startButton.textContent = 'Start'
    lapList.innerHTML ='';

    


})



lapButton.addEventListener ('click' ,  function () {
    var li = document.createElement ('li');

    li.textContent = timeStatus.textContent;
    lapList.appendChild(li);
    li.className = 'list-group-item'
})