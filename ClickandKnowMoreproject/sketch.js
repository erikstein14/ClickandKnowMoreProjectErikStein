/*
Title:
Imagined, Designed, and Programmed by:
Date:
Description:
Sources of ideas and inspiration (title, author, URL):
 *A BRIEF COMPUTER HISTORY, Beverley Steitz, http://people.bu.edu/baws/brief%20computer%20history.html
 *A Short History of the Computer, Jeremy Meyers,http://www.seattlecentral.edu/~ymoh/history_of_computer/history_of_computer.htm

Includes code from (title, author, URL):
 *https://p5js.org/
 *https://www.w3schools.com/css/

<Reminders, you can delete:>
<Use command + T to auto-indent your code for cleaner formatting>
<Check that variable and function names are easy to read and understand. eg. "squareButton" vs.
"shapeButton2">
<If you can't remember where you found some code, Google the text to find it.>
<Put your name in the name of this file!>
*/

var img;

//this is a variable for the image who's function will be introduced below
var person = {
  x:100,
  y:100,
  //dictates the objects starting position

    drawPerson: function() {
      fill(200,50,100,50);
      stroke(200);
      ellipse(this.x,this.y,50,50);
      },
// this sets the visual aspects of the object
    movePerson: function(){
      this.x=this.x+1
      }
      //this function allows it to move across the
};
//This creates the pink object that is moving across the screen below the title

function preload() {
    img = loadImage("Computer-clipart-free-images.jpg");
}
//this inserts the cartoon image of a boy on a computer
function setup() {
    createCanvas(1000, 600);
    var listOfColors = [color('#FF0000'), color('#008000	'), color('#0000FF'), color('#fe3fa2'), color('#a345cd')];
//this sets the order of colors that will be used on the timeline
      for(var i=0;i<listOfColors.length;i++) {
          strokeWeight (35,20)
          stroke(listOfColors[i]);
          line(25, 200, 800, 200);
          translate(250, 0);
          }
          //this sets how frequently the colors willl change on the timeline along with other visual aspects of it such as its width and position
//
fill(0, 39, 200, 0);
//this sets the o
    button = createButton(' ');
    button.position(250, 200);
    button.mousePressed(popup1);
    //reffering to the popup functions created below
    button.style("background-color", "black");
    button.style("padding", "18px 3px");
    button.style("cursor", "pointer");

    button2 = createButton('                   ');
    button2.position(525, 200);
    button2.mousePressed(popup2);
    button2.style("background-color", "black");
    button2.style("padding", "18px 3px");
    button2.style("cursor", "pointer");


    button3 = createButton('                   ');
    button3.position(675, 200);
    button3.mousePressed(popup3);
    button3.style("background-color", "black");
    button3.style("padding", "18px 3px");
    button3.style("cursor", "pointer");


    button4 = createButton('                   ');
    button4.position(50, 200);
    button4.mousePressed(popup4);
    button4.style("background-color", "black");
    button4.style("padding", "18px 3px");
    button4.style("cursor", "pointer");


    button5 = createButton('click here');
    button5.position(110,395);
    button5.mousePressed(popup5);
    button5.style("background-color", "red");
    button5.style("padding", "18px 18px");
    button5.style("border", "none");
    button5.style("color", "white");
    button5.style("padding", "18px 18px");
    button5.style("text-align", "center");
    button5.style("text decoration", "none");
    button5.style("display", "inline-block");
    button5.style("font-size", "16px");
    button5.style("margin", "4px 2px");
    button5.style("transition-duration", "0.4s");
    button5.style("cursor", "pointer");
    button5.style("hover", "blue");
    button5.style("border-radius", "50%");
    button5.style("box-shadow", "0 5px #999");

    button6 = createButton('click here');
    button6.position(110,445);
    button6.mousePressed(popup6);
    button6.style("background-color", "green");
    button6.style("border", "none");
    button6.style("color", "white");
    button6.style("padding", "18px 18px");
    button6.style("text-align", "center");
    button6.style("text decoration", "none");
    button6.style("display", "inline-block");
    button6.style("font-size", "16px");
    button6.style("margin", "4px 2px");
    button6.style("transition-duration", "0.4s");
    button6.style("cursor", "pointer");
    button6.style("hover", "blue");
    button6.style("border-radius", "50%");
    button6.style("box-shadow", "0 5px #999");

    button7 = createButton('click here');
    button7.position(110, 495);
    button7.mousePressed(popup7);
    button7.style("background-color", "blue");
    button7.style("border", "none");
    button7.style("color", "white");
    button7.style("padding", "18px 18px");
    button7.style("text-align", "center");
    button7.style("text decoration", "none");
    button7.style("display", "inline-block");
    button7.style("font-size", "16px");
    button7.style("margin", "4px 2px");
    button7.style("transition-duration", "0.4s");
    button7.style("cursor", "pointer");
    button7.style("hover", "blue");
    button7.style("border-radius", "50%");
    button7.style("box-shadow", "0 5px #999");

    button8 = createButton('click here');
    button8.position(110, 545);
    button8.mousePressed(popup8);
    button8.style("background-color", "#fe3fa2");
    button8.style("border", "none");
    button8.style("color", "white");
    button8.style("padding", "18px 18px");
    button8.style("text-align", "center");
    button8.style("text decoration", "none");
    button8.style("display", "inline-block");
    button8.style("font-size", "16px");
    button8.style("margin", "4px 2px");
    button8.style("transition-duration", "0.4s");
    button8.style("cursor", "pointer");
    button8.style("hover", "blue");
    button8.style("border-radius", "50%");
    button8.style("box-shadow", "0 5px #999");


    //buttons 5,6,7 and 8 are all the larger shadow buttons at the key, the style elements are all pretty self explanitory
    button9 = createButton(' ');
    button9.position(350, 200);
    button9.mousePressed(popup9);
    button9.style("background-color", "black");
    button9.style("padding", "18px 3px");
    button9.style("cursor", "pointer");
    button9.style("hover", "blue");

//buttons 1 ("button"),2,3,4,9,10,11,12,13,14,15 are the black ticks on the timeline
    button10 = createButton(' ');
    button10.position(400, 200);
    button10.mousePressed(popup10);
    button10.style("background-color", "black");
    button10.style("padding", "18px 3px");
    button10.style("cursor", "pointer");

    button11 = createButton(' ');
    button11.position(450, 200);
    button11.mousePressed(popup11);
    button11.style("background-color", "black");
    button11.style("padding", "18px 3px");
    button11.style("cursor", "pointer");


    button13 = createButton(' ');
    button13.position(800, 200);
    button13.mousePressed(popup13);
    button13.style("background-color", "black");
    button13.style("padding", "18px 3px");
    button13.style("cursor", "pointer");

    button14 = createButton(' ');
    button14.position(880, 200);
    button14.mousePressed(popup14);
    button14.style("background-color", "black");
    button14.style("padding", "18px 3px");
    button14.style("cursor", "pointer");

    button15 = createButton(' ');
    button15.position(900, 200);
    button15.mousePressed(popup15);
    button15.style("background-color", "black");
    button15.style("padding", "18px 3px");
    button15.style("cursor", "pointer");

  }

function draw () {

  image(img,650,300, 300, 300);
//retrieves the image from the image function and locates it to a specific location


      fill("black");
      strokeWeight(0)
      textFont("Courier New");
      //font of everything below
      textSize(50);
      text("History of the computer", 40, 40);
//title and size
      textSize(35);
      text("1642", 15,250)
      text("1900", 225,250)
      text("1950", 500,250)
      text("1980", 750,250)
//years associated with timeline
      fill("white")
      text("By Erik Stein", 300,115)
      //appearing after the object goes through it
      textSize(20);

      fill("red");
      text("Pre first generation (before 1937)", 225,415);

      fill("green");
      text("First generation (1937 – 1946)", 225,465);

      fill("blue");
      text("Second generation (1947 – 1962)", 225,515);

      fill("#fe3fa2")
      text("Third generation (1963 - present)", 225,565);
//The description part of the key along with the colors of each description

  person.drawPerson();
  person.movePerson();
//reffering to object above
}

// function changeBG() {
//     var val = random(250);
//     background(val);
// //
//     }



function popup1() {
  alert("1890 - Punch cards were created by Herman Hollerith and James Powers. They helped develop devices that could read the information that had been punched into the cards automatically, without human help making for less errors in reading errors, an increase in work flow, and, most importantly, stacks of punched cards could be used as easily accessible memory of almost unlimited size.");
}

function popup2() {
  alert("1951 - the first computer for commercial use was introduced to the public; the Universal Automatic Computer (UNIVAC 1). ");
}

function popup3() {
  alert("1953 - the International Business Machine (IBM) 650 and 700 series computers made their mark in the computer world. During this generation of computers over 100 computer programming languages were developed, computers had memory and operating systems. Storage media such as tape and disk were in use also were printers for output.");
}

function popup4() {
  alert("1642 - Blaise Pascal is usually credited for building the first digital computer. It added numbers entered with dials and was made to help his father, a tax collector. It was a substantial improvement over manual calculations");
}

function popup5() {
  alert("Before modern computers were created");
}

function popup6() {
  alert("The basics of the electronic computer were created in this generation");
}

function popup7() {
  alert("This generation of computers used transistors instead of vacuum tubes which were more reliable");
}

function popup8() {
  alert(" In this generation, computers became smaller, more powerful more reliable and they are able to run many different programs at the same time. ");
}

function popup9() {
  alert(" 1937 -  the first electronic digital computer was built by Dr. John V. Atanasoff and Clifford Berry. It was called the Atanasoff-Berry Computer (ABC).");
}

function popup10() {
  alert(" 1943 - an electronic computer name the Colossus was built for the military.  ");
}

function popup11() {
  alert(" 1946 - the first general– purpose digital computer, the Electronic Numerical Integrator and Computer (ENIAC) was built. It is said that this computer weighed 30 tons, and had 18,000 vacuum tubes which was used for processing. When this computer was turned on for the first time lights dim in sections of Philadelphia. Computers of this generation could only perform single task, and they had no operating system. ");
}

function popup13() {
  alert(" 1980 - Microsoft Disk Operating System (MS-Dos) was born  ");
}

function popup14() {
  alert(" 1981 - IBM introduced the personal computer (PC) for home and office use.  ");
}

function popup15() {
  alert(" 1984 - Apple gave us the Macintosh computer with its icon driven interface and the 90s gave us Windows operating system. ");
}

//creating each popup function which are used in the button functions above.
