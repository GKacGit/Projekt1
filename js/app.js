repeatElements = [];

function checkElement(event) {

    if (event.keyCode == 13) {
        // console.log(event.target.value);
        if (pierwiastki[losuj][1] == event.target.value) {
            //console.log("dobrze");
            pierwiastek[losuj].parentElement.classList.remove("checked");
            pierwiastek[losuj].parentElement.classList.add("goodAnswer");


        } else {
            // console.log("źle");
            pierwiastek[losuj].parentElement.classList.remove("checked");
            pierwiastek[losuj].parentElement.classList.add("badAnswer");


        }
        game();
    }


}


container = document.getElementsByClassName("symbol");
// console.log(container);
pierwiastek = [];
y = 0;
for (x = 0; x < container.length; x++) {
    // console.log(container[x].innerHTML);
    if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
        // console.log(container[x]);
        pierwiastek[y] = container[x];

        console.log(y + "-" + pierwiastek[y].textContent);
        y++;
    }
}

function game() {

    if (repeatElements.length >= pierwiastki.length) {

    } else {
        console.log(pierwiastki.length)
        console.log(repeatElements.length)
        losuj = Math.floor(Math.random() * pierwiastki.length);
        // console.log(pierwiastki[losuj]);

        if (repeatElements.includes(losuj)) {

            //  console.log("powtorzylem:"+pierwiastek[losuj].textContent);
            game();
        } else {

            for (x = 0; x < pierwiastek.length; x++) {
                //iteruje x dopóki nie jest zgodny z numerem pierwiastka
                // console.log(container[x].textContent)
                //wyświetla w konsoli symbol pierwiastka (np.Na) 
                // console.log(pierwiastek[losuj])
                // wyświetla wylosowany pieriwastek w konsoli

                // console.log("nazwa:"+pierwiastek[x].textContent);
                // console.log("wylosowany:"+pierwiastki[losuj][0]);

                if (pierwiastek[x].textContent == pierwiastki[losuj][0]) {
                    //sprawdza czy wylosowany x jest zgodny z numerem pierwiastka
                    // console.log(pierwiastek[losuj]);
                    pierwiastek[x].parentElement.classList.add("checked");
                    //podświetla wylosowany pieriwastek, dodaje go do listy klas 
                }

            }
            repeatElements.push(losuj)
        }

    }
}
game();