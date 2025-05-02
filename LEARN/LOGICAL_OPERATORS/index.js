const temp = 200;
const isSunny = true;

//AND = &&
if(temp > 0 && temp <= 30 ){
    console.log("The weather is good");
}
else{
    console.log("The weather is bad");  
}

//OR = ||
if(temp <= 0 || temp > 30 ){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");  
}


//NOT = !
if(!isSunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
    
}