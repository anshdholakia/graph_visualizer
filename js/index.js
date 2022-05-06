var boxes = {};
var graph = {};

class Square{   
    constructor(){
        this.make_square();
    }

    make_square() {
        var square = document.createElement("div");
        square.classList+="square";
        // square.style.position = "absolute";
        // square.style.left = `${this.y}px`;
        // square.style.top = `${this.x}px`;
        document.getElementById("graph").appendChild(square);
        
    }

}



// main function
function main(){
    var no_of_squares = Math.floor($("#graph").width()/34) * Math.floor($("#graph").height()/34);
    for(let i = 0; i < no_of_squares; i++){
        new Square();
    }
    // for (let i = document.getElementById("graph").offsetLeft; i < document.getElementById("graph").offsetWidth; i += width) {
    //     for (let j = document.getElementById("graph").offsetTop; j < document.getElementById("graph").offsetHeight+ document.getElementById("graph").offsetTop; j+=width) {
    //         console.log(i, j);
    //         new Square(i, j);
    //     }
        
    // }
    

}
main();

