var repeatElements = [];
container = document.getElementsByClassName("symbol");
emelentsSymbols = [];
y = 0;
for (x = 0; x < container.length; x++) {
    if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
        emelentsSymbols[y] = container[x];
        // wykluczanie niewidzialnych divów i niepotrzebnych kafelków

        console.log(y + "-" + emelentsSymbols[y].textContent);
        // wyświetlanie numeru pierwiastka i jego skrót w konsoli
        y++;
    }
}
game();

function game() {
    if (repeatElements.length >= elements.length) {
        console.log("koniec gry");
        // wyświetlanie "koniec gry" w konsoli
    } else {
        randomElement = Math.floor(Math.random() * elements.length);
        // losowanie liczy z tablicy pierwiastków
        if (repeatElements.includes(randomElement)) {
            // sprawdza czy wylosowana liczba zawiera sie w tablicy powtórzonych pierwiastków
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
            // zaznaczanie poprawnie nazwanego pierwiastka na zielono
        } else {
            emelentsSymbols[randomElement].parentElement.classList.remove("checked");
            // zaznaczanie wylosowanego pierwiastka na różowo
            emelentsSymbols[randomElement].parentElement.classList.add("badAnswer");
            // zaznaczanie źle nazwanego pierwiastka na czerwono

        }
        game();
    }
}