var MouseEvent = "empty";
var last_position_of_x,last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
widthofline = 1;

canvas.addEventListener('mouseDown',mymouseDown);
function mymouseDown(e) {
    color = document.getElementById('color').value;
    widthofline = document.getElementById('widthofline').value;
    MouseEvent = 'mouseDown'; 
}

canvas.addEventListener('mouseMove',mymouseMove);
function mymouseMove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (MouseEvent == 'mouseDown') {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        console.log('last coordinates of x and y = ');
        console.log('x = ' + last_position_of_x + 'y = ' + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log('current coordinates of x and y = ');
        console.log('x = ' + current_position_of_mouse_x + 'y = ' + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke(); 
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}   

canvas.addEventListener('mouseUp',mymouseUp);
function mymouseUp(e) {
    MouseEvent = 'mouseUp';
}

canvas.addEventListener('mouseLeave',mymouseLeave);
function mymouseLeave(e) {
    MouseEvent = 'mouseLeave';
}

function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}