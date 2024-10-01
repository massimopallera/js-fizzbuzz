/* Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

const m1 = 3;
const m2 = 5;

const m1_str = 'Fizz';
const m2_str = 'Buzz';


const maxCont = 100;

for (let i = 1; i <= maxCont; i++){
    let str = '';
    
    if (i%m1 == 0 && i%m2 == 0){
        str = m1_str+m2_str;
    }
    else if (i%m1 == 0){
        str = m1_str;
    }
    else if (i%m2 == 0){
        str = m2_str;
    }
    else{
        str = i;
    }
    console.log(str);
}