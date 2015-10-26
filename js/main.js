//global variables

//bubble constuction
function bubble(){
    //create x and y properties (variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r os fpr radius which is 1/2 the width of the circle
    this.bubbleSize = this.r*2;//width and height are twice the radius
    //draw the bubble
    this.col = fill("lightblue");
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
}//end bubble


function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("windows");

    var myArray = [];
    for (var i=0; i<1000; i++){
//        myArray [i] = "item" + i;
       // myArray [i] = i;

       // myArray[i] = ellipse(i,i,10,10);
        myArray[i] = new bubble();
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

