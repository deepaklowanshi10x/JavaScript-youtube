let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

box1.addEventListener('click', function(){
    box2.style.backgroundColor = 'green';
});

box2.addEventListener('click', function(){
    box1.style.backgroundColor = 'yellow';
});