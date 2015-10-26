//global variables


//bubble constuction
function Bubble(){
    //create x and y properties (variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r os fpr radius which is 1/2 the width of the circle
    this.bubbleSize = this.r*2;//width and height are twice the radius
    //draw the bubble

    //method: draw the bubble
    this.drawBubble = function(){
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
    }

    this.col = fill("lightblue");{
    //ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
    }
}//end bubble


function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("windows");

    var myArray = [];
    for (var i=0; i<100; i++){
//        myArray [i] = "item" + i;
       // myArray [i] = i;

       // myArray[i] = ellipse(i,i,10,10);
        myArray[i] = new Bubble();
        myArray[i].drawBubble();
    }
    console.log(myArray);


//        ["hello",3,"bye"];
//    console.log(myArray[0]);
//    console.log(myArray[1]);
//    console.log(myArray[2]);
//    console.log(myArray);
//    console.log("myArray", myArray);

    for (var i=0; i< myArray.lengh; i++) {
//        myArray[i] +=10
    }

    console.log(myArray);

}//end setup

//listen for mouse presses with the built-in p5 mousePressed method
function mousePressed(){
//check that this is working
    console.log("mouse Pressed");

    //loop through the bubbles and see if the mouse is inside of them
}
