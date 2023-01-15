console.log("Another one");

fetch('https://randomuser.me/api/?results=1')
    .then(response => response.jason())
    .then(data => console.log(data));