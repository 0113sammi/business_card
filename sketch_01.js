// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.5); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + bleedPadW;
var bleedYmin = 0;
var bleedYmax = cardH + bleedPadH;

// dims for centered card area
var cardXmin = 0 + bleedPadW * 0.5;
var cardXmax = cardW;
var cardYmin = 0 + (bleedPadH * 0.5);
var cardYmax = cardH;

// dims for centered padding area
var padXmin = 0 + bleedPadW;
var padXmax = cardW - bleedPadW;
var padYmin = 0 + bleedPadH;
var padYmax = cardH - bleedPadH;



//function setup() {
	//createCanvas(cardW+bleedPadW, cardH+bleedPadH); // width and height of my canvas
	//stroke("#0431B4");

var cols = 10;
var rows = 80;
var counter = 0;

function setup() {
 createCanvas(cardW+bleedPadW, cardH+bleedPadH);
 background("#F5DA81");
 stroke(0);

 var horiz = width/cols;
 var vert = horiz/2;

 for (var i = 0; i < rows; i++) {
 for (var j = 0; j < cols; j++) {
 var rand = random(0, 2); 
 if (rand > 1) {
 //draw vertical lines
 for (var k = 0; k < horiz; k+=horiz/8) {
 line(j*horiz+k, i*vert, j*horiz+k, i*vert+vert);
 }
 } 
 else {
 //draw horizontal lines
 for(var k = 0; k < vert; k+=vert/8) {
 line(j*horiz, i*vert+k, j*horiz+horiz, i*vert + k);
 }
 }
 }
 }
	fill("#FF8000");
	rect(bleedXmin, bleedYmin+20, bleedXmax, bleedYmax, bleedYmin+20); // minus one to make it visible inside canvas
	stroke("#0431B4");
	fill("#F7BE81");
	rect(cardXmin-2, cardYmin+50, cardXmax, cardXmax, cardYmin+50); // centered
	stroke("#0431B4");
	fill("#F6E3CE")
	rect(padXmin-2, padYmin+100,  padXmax,  padXmax, padYmin+100); // centered
	noStroke();





	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill("#0404B4");
	textSize(fontSizeA);
	text("ETP", padXmin+bleedPadW, padYmax*0.27)

	var fontSizeA = Math.round(cardH/10);
	fill("#86B404");
	textSize(fontSizeA);
	text("in", padXmin+bleedPadW+100, padYmax*0.27)

	var fontSizeA = Math.round(cardH/10);
	fill("#8000FF");
	textSize(fontSizeA);
	text("USC", padXmin+bleedPadW+155, padYmax*0.27)

	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill("#819FF7");
	textSize(fontSizeNorm);
	text("Sammi Liao", padXmin+bleedPadW, padYmax*0.55);
	fill(0, 102, 153); // note color values - try to improve with cymk-style colors
	text("Student of ETP", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill("#DF0174"); // note 4th value is alpha (transparency)
	text("Phone: 0963229068", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill("#04B45F");
	text("Email: 0113sammi@gmail.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill("#4B088A");
	text("LINE ID: sammi113", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));


	// create graphic for CEO figure
	//fill(185);
	//ellipse(padXmax - (bleedPadW*3), padYmin + (bleedPadH*2), bleedPadH, bleedPadW);
	//fill(55);
	//rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
	//rect(padXmax - (bleedPadW*3), padYmin + (bleedPadH*4), bleedPadW, bleedPadH*2);
	//rect(padXmax - (bleedPadW*4), padYmin + (bleedPadH*3), bleedPadW, bleedPadH);
	//rect(padXmax - (bleedPadW*2), padYmin + (bleedPadH*3), bleedPadW, bleedPadH);
	//fill(255, 0, 0, 15);
	//quad(padXmax - (bleedPadW*3), padYmin + (bleedPadH*2.3), bleedPadW, bleedPadH, padXmin+bleedPadW, padYmax*0.6, padXmin+bleedPadW, padYmax+bleedPadH);

	// create graphic not CEO figures
	//for (var i=0; i<6; i++) {
		//push();
		//translate(padXmax - (bleedPadW*5.5), padYmax - (bleedPadH*11));
		//rotate(TWO_PI*i);
		//fill(75);
		//ellipse(0+bleedPadW*i, 0, bleedPadH, bleedPadW);
		//fill(0, 102, 153); // note color values - try to improve with cymk-style colors
		//rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		//rect(0+bleedPadW*i, 0 + (bleedPadH*2), bleedPadW, bleedPadH*2);
		//rect(padXmax - (bleedPadW*4), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		//rect(padXmax - (bleedPadW*2), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		//pop();
	//}

	// more not-CEO figures - Only need to change 3 parameters
	//for (var i=0; i<5; i++) {
		//push();
		//translate(padXmax - (bleedPadW*4.5), padYmax - (bleedPadH*7));
		//rotate(TWO_PI*i);
		//fill(75);
		//ellipse(0+bleedPadW*i, 0, bleedPadH, bleedPadW);
		//fill(0, 102, 153, 51); // note 4th value is alpha (transparency)
		//rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		//rect(0+bleedPadW*i, 0 + (bleedPadH*2), bleedPadW, bleedPadH*2);
		//rect(padXmax - (bleedPadW*4), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		//rect(padXmax - (bleedPadW*2), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		//pop();
	//}

	// more not-CEO figures - Only need to change 3 parameters
	//for (var i=0; i<4; i++) {
		//push();
		//translate(padXmax - (bleedPadW*3.5), padYmax - (bleedPadH*3));
		//rotate(TWO_PI*i);
		//fill(75);
		//ellipse(0+bleedPadW*i, 0, bleedPadH, bleedPadW);
		//fill(102, 0, 153, 51);
		//rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		//rect(0+bleedPadW*i, 0 + (bleedPadH*2), bleedPadW, bleedPadH*2);
		//rect(padXmax - (bleedPadW*4), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		//rect(padXmax - (bleedPadW*2), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		//pop();
	//}

	
}

function draw() {


}