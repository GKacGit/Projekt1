var countDownDate = new Date().getTime()+10*1200;

// Update the count down every 1 second
var timerX = setInterval(function() {

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
    game();
    countDownDate = new Date().getTime()+10*1100;
  }
}, 1000);