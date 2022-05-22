var repeatElements = [];
container = document.getElementsByClassName("symbol");
emelentsSymbols = [];
y = 0;
for (x = 0; x < container.length; x++) {
    if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
        emelentsSymbols[y] = container[x];

        console.log(y + "-" + emelentsSymbols[y].textContent);
        y++;
    }
}
game();

function game() {
    console.log(repeatElements);
    if (repeatElements.length >= elements.length) {
        console.log("koniec gry");
    } else {
        losuj = Math.floor(Math.random() * elements.length);
        if (repeatElements.includes(losuj)) {
            game();
        } else {
            emelentsSymbols[losuj].parentElement.classList.add("checked");
            repeatElements.push(losuj)
        }
    }
}

function checkElement(event) {
    if (event.keyCode == 13) {
        if (event.target.value == elements[losuj][1]) {
            emelentsSymbols[losuj].parentElement.classList.remove("checked");
            emelentsSymbols[losuj].parentElement.classList.add("goodAnswer");
        } else {
            emelentsSymbols[losuj].parentElement.classList.remove("checked");
            emelentsSymbols[losuj].parentElement.classList.add("badAnswer");
        }
        game();
    }
}