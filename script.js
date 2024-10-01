//it will be easier to change strings or numbers from here
const m1 = 3;
const m2 = 5;

const m1_str = 'Fizz';
const m2_str = 'Buzz';
const maxCont = 100;



for (let i = 1; i <= maxCont; i++){

    let str = '';
    

    //the first control is if I is a multiple of each numbers
    if (i%m1 == 0 && i%m2 == 0){
        str = m1_str+m2_str;
    }
    else if (i%m1 == 0){
        str = m1_str;
    }
    else if (i%m2 == 0){
        str = m2_str;
    }

    //in case I isn't a multiple, console will give I as output
    else{
        str = i;
    }
    console.log(str);
}