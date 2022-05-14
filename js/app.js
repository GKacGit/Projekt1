document.addEventListener("DOMContentLoaded", function() {


tabelka.addEventListener("click",gra);
  firstMove = '<img class="image" src="/img/czarne_x.png"/>';
  nameField = 'x';
numberMove = 0 ;
p=[];
wygrana=[];
function gra(e){
  numberMove++;
  //console.log (e.target.id);
  targetId = document.getElementById(e.target.id);
  if (targetId.innerHTML == "") {
    targetId.innerHTML = firstMove;
   targetId.setAttribute("name",nameField);
 
  if(firstMove == '<img class="image" src="/img/czarne_x.png"/>'){
    firstMove = '<img class="image" src="/img/czarne_o.png"/>';
    nameField = 'o';
  }
  else {
    firstMove = '<img class="image" src="/img/czarne_x.png"/>';
  nameField = 'x';
  }}
  reset = document.getElementById("reset");
  reset.addEventListener("click",resetGame)
function resetGame(e){
  for(x=1;x<10;x++){
    document.getElementById("p"+x).innerHTML = "";
  }
  tabelka.addEventListener("click",gra)
  document.getElementById("reset").disabled = true;
  numberMove=0;
}

  for (x = 1; x < 10; x++){
    //console.log(document.getElementById("p" + x).getAttribute("name"));
    if (document.getElementById("p" + x).getAttribute("name")) {
      p[x] = document.getElementById("p" + x).getAttribute("name");
    } 
    
  console.log(p[x]);
}
//p1=document.getElementById("p1").innerHTML;
//p2=document.getElementById("p2").innerHTML;
//p3=document.getElementById("p3").innerHTML;
//p4=document.getElementById("p4").innerHTML;
//p5=document.getElementById("p5").innerHTML;
//p6=document.getElementById("p6").innerHTML;
//p7=document.getElementById("p7").innerHTML;
//p8=document.getElementById("p8").innerHTML;
//p9=document.getElementById("p9").innerHTML;
// wygrana1=p[1]+p[2]+p[3];
// wygrana2=p[4]+p[5]+p[6];
// wygrana3=p[7]+p[8]+p[9];
// wygrana4=p[1]+p[4]+p[7];
// wygrana5=p[2]+p[5]+p[8];
// wygrana6=p[3]+p[6]+p[9];
// wygrana7=p[1]+p[5]+p[9];
// wygrana8=p[3]+p[5]+p[7];

function getElementP(elem,what) {
    document.getElementById("p"+elem).innerHTML = '<img class="image" src="/img/'+what+'"/>'
  
  }
  //funkcja pozwala na przypisanie koloru do pola o danej wartości i ustaleniu symbolu wygranego
  function getResult(info) {
    document.getElementById("result").innerHTML = info;
  }
  //funkcja na zwórcenie rezultatu gry
  function wygranaGry(x,kto,par1,par2,par3){
      //x - liczba pożądkowa, kto - podajemy trzy znaki symboli w postaci xxx lub ooo,
      //par1 - pierwsze pole z elementów które tworzą wygraną, par2 - drugie z elementów -||-, par3 trzecie z elementów -||-,
    wygrana[x]=p[par1] + p[par2] + p[par3];
    //wygrana x - definiuje konfigurację wygranej
    console.log("wygran:"+wygrana[x]);
      if (wygrana[x]== kto){
      //czy konfiguracja wygrana zgadza się z symbolem
        if (kto == "xxx") {
        //jeśli konfiguracja zgadza się z symbolem to kolorój
          getElementP(par1,"x");
          getElementP(par2,"x");
          getElementP(par3,"x");
          getResult("Po wielkich bojach wygrały krzyżki");
          reset.disabled = false ;
      }
      if (kto == "ooo") {
        //jeśli konfiguracja zgadza się z symbolem to kolorój
          getElementP(par1,"o");
          getElementP(par2,"o");
          getElementP(par3,"o");
          getResult("Po wielkich bojach wygrały kółka");
          reset.disabled = false ;
          
      }
      }
    
  }
    
wynik = [];
wynik[1] = 'xxx';
wynik[2] = 'ooo';

for(x=1;x<3;x++){
  wygranaGry(1,wynik[x],1,2,3);
    wygranaGry(2,wynik[x],4,5,6);
    wygranaGry(3,wynik[x],7,8,9);
    wygranaGry(4,wynik[x],1,4,7);
    wygranaGry(5,wynik[x],2,5,8);
    wygranaGry(6,wynik[x],3,6,9);
    wygranaGry(7,wynik[x],1,5,9);
    wygranaGry(8,wynik[x],3,5,7);
}

// if(wygrana1=="xxx"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=1;x<4;x++){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
//   }
// document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
// }

// if(wygrana2=="xxx"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=4;x<7;x++){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
// }


// if(wygrana3=="xxx"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=7;x<10;x++){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
// }

// if(wygrana4=="xxx"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=1;x<8;x+=3){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
// }

// if(wygrana5=="xxx"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=2;x<9;x+=3){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
// }

// if(wygrana6=="xxx"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=3;x<10;x+=3){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
// }

// if(wygrana7=="xxx"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=1;x<10;x+=4){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
// }

// if(wygrana8=="xxx"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=3;x<8;x+=2){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
// } 

// if(wygrana1=="ooo"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=1;x<4;x++){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
// }

// if(wygrana2=="ooo"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=4;x<7;x++){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
// }

// if(wygrana3=="ooo"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=7;x<10;x++){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
// }

// if(wygrana4=="ooo"){
//   console.log ("wygrałes");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=1;x<8;x+=3){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
// }

// if(wygrana5=="ooo"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=2;x<9;x+=3){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
// }

// if(wygrana6=="ooo"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=3;x<10;x+=3){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
// }

// if(wygrana7=="ooo"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=1;x<10;x+=4){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
// }

// if(wygrana8=="ooo"){
//   console.log ("wygrałeś");
//   reset.disabled = false ;
//   tabelka.removeEventListener("click",gra)
//   for(x=3;x<8;x+=2){
//     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
//   }
//   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
// } 

if(numberMove==9){
  reset.disabled = false;
  tabelka.removeEventListener("click",gra)
}

}




});