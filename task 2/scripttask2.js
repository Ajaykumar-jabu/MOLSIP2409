
// 1. NAV BAR TOGGLE EVENT
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggle-button');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide all content elements
            contents.forEach(content => {
                content.style.display='none';
            });

            // Get the ID of the content to show
            const contentId = this.id.replace('button', 'content');
            const contentToShow = document.getElementById(contentId);

            // Show the corresponding content
            contentToShow.style.display='block';
            if (contentId === 'content2') {
                document.getElementById('content1').style.display='none';
              
            } else if (contentId === 'content1') {
               
            }
        });
    });
});


// 2. STOP WATCH

let [minutes, seconds, milliseconds] = [0, 0, 0];
let time = document.getElementById("time");
let timer = null;
let startTimestamp = null;

function stopwatch() {
    let now = Date.now();
    let elapsed = now - startTimestamp;
    milliseconds = elapsed % 1000;
    seconds = Math.floor(elapsed / 1000) % 60;
    minutes = Math.floor(elapsed / (1000 * 60));

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    time.innerHTML = m + ':' + s + '.' + ms;
}

function watchstart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    startTimestamp = Date.now() - (seconds * 1000) - milliseconds;
    timer = setInterval(stopwatch, 1); // Update every millisecond
}

function watchstop() {
    clearInterval(timer);
}

function watchreset() {
    clearInterval(timer);
    [minutes, seconds, milliseconds] = [0, 0, 0];
    time.innerHTML = "00:00.000";
}


// 3. SET TIMER

const countdownElement = document.getElementById('countdown');
const timerInput = document.getElementById('timerInput');
let timerInterval = null;
let timeLeft = 0;

function startCountdown() {
    timeLeft = timerInput.value * 60;

    // Clear existing timer interval before starting a new one
    clearInterval(timerInterval);

    function updateCountdown() {
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownElement.innerHTML = `${minutes}:${seconds}`;
  
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = 'Countdown over!';
        } else {
            timeLeft--;
        }
    }

    // Update countdown every second
    timerInterval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
    clearInterval(timerInterval);
}

function resetCountdown() {
    clearInterval(timerInterval);
    countdownElement.innerHTML = '00:00';
    timeLeft = 0;
}



// 4. INDIAN STANDARD TIME
function displayIST() {
    var now = new Date();
    var options = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    var istTime = now.toLocaleString('en-US', options);
    document.getElementById('ist').innerHTML = istTime;
  }
  setInterval(displayIST, 1000); // Update time every second
  