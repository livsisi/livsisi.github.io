// Referanser til HTML-elementer
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Bubble {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    tegn(){
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x,this.y,50,0,Math.PI*2);
        ctx.stroke();
    }
    beveg (){
        this.x = this.x + Math.random()*10 - 5;
        this.y = this.y + Math.random()*10 - 5;

    }
}
class Square extends Figur{
    constructor(x,y,b,h){
        super(x,y);
        this.b = b;
        this.h = h;
    }

    tegn(){
        ctx.fillStyle="white";
        ctx.fillRect(this.x,this.y,this.b,this.h)

    }
}

// Globale variabler
let boble1 = new Bubble(200,100);
let bubble2 = new Bubble(200,100);
let firkant1 = new Square(200,100,40,50);

let bobler = [];

for (let i=0; i<100;i++){
    bobler.push(new Bubble(100,100,40));
}



// Oppstart
gameloop();

//Funksjonsdefinisjoner
function gameloop(){
    tegnBakgrunn();
    boble1.beveg();
    boble1.tegn();
    firkant1.beveg();
    firkant1.tegn();

    for(let boble of bobler){
        boble.beveg();
        boble.tegn();
    }

    requestAnimationFrame(gameloop);
}

function tegnBakgrunn(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height); // Tegner bakgrunnsfarge på canvaset
}

function tegnBubble(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, 50, 0, 2 * Math.PI);
    ctx.stroke()
}

function bevegBubble(){
    bubble.x = bubble.x + Math.random()*10 - 5;
    bubble.y = bubble.y + Math.random()*10 - 5;
}