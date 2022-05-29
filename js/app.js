var repeatElements = [];
container = document.getElementsByClassName("symbol");
emelentsSymbols = [];
y = 0;
for (x = 0; x < container.length; x++) {
    if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
        emelentsSymbols[y] = container[x];
        // wykluczanie niewidzialnych divów i niepotrzebnych kafelków

        //console.log(y + "-" + emelentsSymbols[y].textContent);
        // wyświetlanie numeru pierwiastka i jego skrót w konsoli
        y++;
    }
}
game();

function game() {
    if (repeatElements.length >= elements.length) {
        console.log("koniec gry");
        
        clearInterval(timerX);
        document.getElementById("timer").innerHTML = "Koniec Gry!";
        // wyświetlanie "koniec gry" w konsoli
    } else {
        randomElement = Math.floor(Math.random() * elements.length);
        // losowanie liczy z tablicy pierwiastków
        if (repeatElements.includes(randomElement)) {
            // sprawdza czy wylosowana liczba zawiera sie w tablicy powtórzonych pierwiastków
          //console.log(repeatElements);
          //console.log(randomElement);
            game();
        } else {
            emelentsSymbols[randomElement].parentElement.classList.add("checked");
            
            // zaznaczanie wylosowanego pierwiastka na różowo
            repeatElements.push(randomElement)
        }
    }
}

function checkElement(event) {
    if (event.keyCode == 13) {
        // jeżeli enter zostanie kliknięty wokonaj
        if (event.target.value == elements[randomElement][1]) {
            // jeżeli pierwiastek został wylosowany
            emelentsSymbols[randomElement].parentElement.classList.remove("checked");
            // zaznaczanie wylosowanego pierwiastka na różowo
            emelentsSymbols[randomElement].parentElement.classList.add("goodAnswer");
            countDownDate = countDownDate+5*1000;
            // zaznaczanie poprawnie nazwanego pierwiastka na zielono
        } else {
            emelentsSymbols[randomElement].parentElement.classList.remove("checked");
            // zaznaczanie wylosowanego pierwiastka na różowo
            emelentsSymbols[randomElement].parentElement.classList.add("badAnswer");
            // zaznaczanie źle nazwanego pierwiastka na czerwono
            countDownDate = countDownDate-5*1000;
        }
        event.target.value = ""
        game();
    }
}

resetBtn.addEventListener("click",resetFunction);

function resetFunction(){
    //console.log("dziala");
    for (x =0 ; x < emelentsSymbols.length ; x++){
        repeatElements = [];
        emelentsSymbols[x].parentElement.classList.remove("checked");
        emelentsSymbols[x].parentElement.classList.remove("goodAnswer");
        emelentsSymbols[x].parentElement.classList.remove("badAnswer");
    }
    countDownDate = new Date().getTime()+120*1000;
    game();
    timerX = setInterval(timerFunction, 1000);
    resetBtn.style.display = "none" ;
    myInput.style.display = "block";
}
reset = document.getElementById("reset");
resetBtn.addEventListener("click", resetFunction)
resetBtn.style.display="none";






let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log("dziala");
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}