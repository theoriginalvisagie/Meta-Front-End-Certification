const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";

console.log(`The sportsCar object: ${sportsCar}`);

// For-in is unreliable
for(prop in sportsCar){
    console.log(prop);
}

// for-of is reliable
for(prop of Object.keys(sportsCar)){
    console.log(`${prop}: ${sportsCar[prop]}`);
}