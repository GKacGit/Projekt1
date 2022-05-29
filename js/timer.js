
var timeTimer = 120*1000;
var countDownDate = new Date().getTime()+timeTimer;

// Update the count down every 1 second
var timerX = setInterval(timerFunction, 1000);

function timerFunction() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance <= 0) {
      document.getElementById("timer").innerHTML = "Czas minął!";
      emelentsSymbols[randomElement].parentElement.classList.add("badAnswer");
      clearInterval(timerX);
      document.getElementById("timer").innerHTML = "Koniec Gry!";
      myInput.style.display="none";
      resetBtn.style.display="block";
    }
  }