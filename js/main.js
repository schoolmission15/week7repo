//global variables

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    var myArray = [];
    for (var i=0; i<1000; i++){
//        myArray [i] = "item" + i;
        myArray [i] = i;

        myArray[i] = ellipse(i,i,10,10);
    }
    console.log(myArray);


//        ["hello",3,"bye"];
//    console.log(myArray[0]);
//    console.log(myArray[1]);
//    console.log(myArray[2]);
//    console.log(myArray);
//    console.log("myArray", myArray);

    for (var i=0; i< myArray.lengh; i++) {
        myArray[i] +=10
    }

    console.log(myArray);

}//end setup

