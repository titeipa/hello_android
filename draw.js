var clickPressed = false;
var lastPoint = null;
var canvas = $("#drawing-board");

function mouseDown(e) {
	clickPressed = true;
}

function mouseUp(e) {
	clickPressed = false;
}

function mouseMove(e) {
	if (clickPressed) {
		canvas = e.currentTarget;
		context = canvas.getContext("2d");
		if (context) {		
			x = e.pageX - canvas.offsetLeft;
			y = e.pageY - canvas.offsetTop;
			//context.fillStyle = "rgb(200,0,0)";
			context.fillRect(x, y, 3, 3);
			console.log(String(x) + " " + String(y));
		}	
	}
}

$("#drawing-board").mousedown(mouseDown);
$("#drawing-board").mousemove(mouseMove);
$("#drawing-board").mouseup(mouseUp);