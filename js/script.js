
let model3d;
let xPrec, yPrec, xRot, yRot, delta;
let input;

function setup() {
	//input = createFileInput(handleFile);
	let c = createCanvas(windowWidth, windowHeight, WEBGL);
	c.drop(handleFile);

	xRot = 0;
	yRot = 0;
	xPrec = 0;
	yPrec = 0;

	model3d = loadModel("assets/DropIt!.obj", true);

	noStroke();
	textSize(100);
	textAlign(CENTER);
}

function draw() {
	background(40);
	
		scale(2);

		if (mouseIsPressed) {
			if ((mouseX - xPrec) > 0) {
				delta = map((mouseX - xPrec), 0, width / 2, 0, 2 * PI)
				yRot += delta;
			} else if ((mouseX - xPrec) < 0) {
				delta = map((mouseX - xPrec), -width / 2, 0, 2 * PI, 0)
				yRot -= delta;
			}
			if ((mouseY - yPrec) > 0) {
				delta = map((mouseY - yPrec), 0, height / 2, 0, 2 * PI)
				xRot -= delta;
			} else if ((mouseY - yPrec) < 0) {
				delta = map((mouseY - yPrec), -height / 2, 0, 2 * PI, 0)
				xRot += delta;
			}
		}
		xPrec = mouseX;
		yPrec = mouseY;
		rotateX(xRot);
		rotateY(yRot);


		directionalLight(250, 250, 250, 0, 0, -1);
		model(model3d);
	
}

function handleFile(file) {
	model3d = loadModel(file.data, true);
}