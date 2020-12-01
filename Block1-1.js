//------------------------------------------------------------------------------------------------
// Det här är vår första grundläggande javascript-del som fokuserar på språket javascript
// utan att blanda in DOM eller HTML på något vis.
// 
// Block 1-1 går igenom följande 
//
// 1) Datatyper
// 2) Deklaration
// 3) Operatorer
// 4) Villkorssatser
// 5) Iterationer (loopar)
// 6) Funktioner
//
//
// Läs gärna mer om JS på ex https://www.w3schools.com/Js/default.asp eller
// Eloquent Javascript
// men framförallt, programmera mycket :)



// -----------------------------------------------------------------------------------------------
// 1 - Datatyper i Javascript
// -----------------------------------------------------------------------------------------------

// Number
    // 5
    console.log(1);
    // 3.43
    console.log(3.43);
    console.log(0.1+0.2);
    // 3.45 + 5.21
    // 2.34e6
    console.log(1.25e3);

// String
    // enkel sträng
    console.log("Hello");
    console.log('there');
    console.log(`Hello `);
    // concatenerad sträng
    console.log("Hello "+"där");
// Bool
    // aritmetiskt uttryck
    console.log(4 < 3);
    // "a" < "b"
    console.log("a" < "b");
    // "a" > "H"
    console.log("a" > "H");
    // icke då

    // eller
    console.log(3 < 4 || 6 > 8);
    // och
    console.log(3 < 4 && 6 > 8);
// Undefined
let b = null;
console.log( typeof a);
    // oinitierat värde  (typeof)
// null


// -----------------------------------------------------------------------------------------------
// 2 - Deklarationer (binding)
// -----------------------------------------------------------------------------------------------

// enkel deklaration  ( var let global )
// ändrad typ

let i = 2;
for(i = 0; i < 10; i++)
{
    console.log(i + " ");
}
console.log(i);

// -----------------------------------------------------------------------------------------------
// 3 - Operatorer
// -----------------------------------------------------------------------------------------------

// Tilldelningsoperatorn
    // =

    let c = 10;

// Aritmetiska operatorer
    //  + - 
    c = c + 10;
    c = c - 8;
    //  * / %
    c = c *2;
    c = c/8;
    // ** (ny för ES6)
    c = 10**2;
    console.log(c);

// Aritmetiska tilldeningar
    // +=
    // -=
    // *=
    // /=
    // ++ a ++ (post, pre)
    // -- a -- (post, pre)
    let d = 10;
    console.log(d++ + ++d);

// Jämförelseoreatorer
    // ==  
    console.log( 4 == 3+1);
    console.log("4" == 3+1);
    // ===
    console.log("4" === 3+1);
    // !=
    // !==
    // >
    // <
    // >=
    // <=
    // ? (kul rackare)
    (4>3) ? ("gör nåt") : ("nåt annat");

// Logiska operatorer
    // &&
    // ||
    // !

// special
    // typeof


// beräkningsordning (prio, LtoR)

// Ex (2 + 3 ) * ( 4 - 2)
// Ex "Volvo " + 7 + 40
let bil = "Volvo" + 7 + 40;
console.log(bil);
// Ex 4+4+"Ball"
bil = 4+4+"Ball";
console.log(bil);


// -----------------------------------------------------------------------------------------------
// 4 - Villkorssatser
// -----------------------------------------------------------------------------------------------

let temp = 18;

// if(expr)
if(temp > 17){
    console.log("Badbart");
}
else{
    console.log("Bäst att avstå")
}

// if(expr) ... else

// if(expr) ... else if(expr) ... else
if(temp < 17){
    console.log("Nej, det är för kallt!");
}
else if(temp > 16 && temp <40){
    console.log("Nej tack, vill inte bli kokt");
}

// switch (expr) { case x: .... break;  default: }
switch (temp) {
    case 18:
        console.log("Okej att bada");
        break;
    case 19:
        console.log("Bättre än okej");
        break;
    default:
        console.log("Meh");
        break;
}

// new Date().getDay())


// -----------------------------------------------------------------------------------------------
// 5 - Iterationer
// -----------------------------------------------------------------------------------------------

// while(expr) { ... }
while (temp > 10) {
    console.log(temp--);
}

for(temp = 0; temp < 10; temp++){
    console.log(temp);
}

for(var nummer = 10; nummer >= 0; nummer--){
    console.log(nummer)
}
for(nummer = 1; nummer <= 100; nummer++){
    if(nummer % 3 == 0){
        console.log(nummer);
    }
}

// for( stat1; stat2; stat3) { ... }
// for ( init; condition; modifier )

// for( x in something )   (objekt-loop)
let namn = ["Dan", "Simon", "Sixten"]

for(let i = 0; i < namn.length; i++){
    console.log(namn[i]);
}
// for ( x of something )  (array-loop)

for(n of namn){
    console.log(n);
}
// -----------------------------------------------------------------------------------------------
// 6 - Funktioner
// -----------------------------------------------------------------------------------------------
// 
// Funktioner är en av de mest viktiga områdena att förstå inom programmering för det 
// låter oss bryta ner större program i mindre hanterbara delar som vi kan återanvända
// från gång till gång. 
// 



// function myFunction(p1, ... , pn) {   }

function add(e, f){
    let summa = e + f;
    e++;
    f++;
    return(summa);
}

let e = 10;
let f = 20;
let g = add(e,f);
console.log(g);
console.log(e,f);
// invoking functions 
// rekursion


