var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// Task 1
function logDairy(){
    for(var prop of dairy){
        console.log(prop);
    }
}

logDairy(dairy);

// Task 2
const animal = {
    canJump: true   
};
    
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(){
    for(prop of Object.keys(bird)){
        console.log(prop +": "+ bird[prop]);
    }
}
birdCan();

// Task 3
function animalCan(){
    for(prop in bird){
        console.log(prop +": "+ bird[prop]);
    }
}
animalCan();
