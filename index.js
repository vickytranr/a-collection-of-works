var canvas, ctx, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false;

var x = "rgb(42, 90, 115)",
y = 10;

function init() {
canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = 650;

canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
}, false);
canvas.addEventListener("mousedown", function (e) {
    findxy('down', e)
}, false);
canvas.addEventListener("mouseup", function (e) {
    findxy('up', e)
}, false);
canvas.addEventListener("mouseout", function (e) {
    findxy('out', e)
}, false);
}

function color(obj) {
switch (obj.id) {
    case "pink":
        x = "#fe938cff";
        break;
    case "tumbleweed":
        x = "#e6b89cff";
        break;
    case "wheat":
        x = "#ead2acff";
        break;
    case "pewter":
        x = "#9cafb7ff";
        break;
    case "celadon":
        x = "#4281a4ff";
        break;
    case "dark-celadon":
        x = "rgb(42, 90, 115)";
        break;
    case "white":
        x = "rgb(42, 90, 115)";
        break;
}
if (x == "white") y = 10;
else y = 10;

}

function draw() {
ctx.beginPath();
ctx.arc(prevX,prevY,y,0,2*Math.PI);
ctx.fillStyle = x;
ctx.fill();
ctx.closePath();
}

function erase() {
var m = confirm("Want to clear");
if (m) {
    ctx.clearRect(0, 0, w, h);
    document.getElementById("canvasimg").style.display = "none";
}
}

function findxy(res, e) {
if (res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;

    flag = true;
    dot_flag = true;
    if (dot_flag) {
        ctx.beginPath();
        ctx.arc(currX,currY,y,0,2*Math.PI);
        ctx.fillStyle = x;
        ctx.fill();
        ctx.closePath();
        dot_flag = false;
    }
}
if (res == 'up' || res == "out") {
    flag = false;
}
if (res == 'move') {
    if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        draw();
    }
}
}