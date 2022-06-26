canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")

var mouseevent="empty"

canvas.addEventListener("mousedown",mouse_click)

function mouse_click (e) 
{
    color = document.getElementById("color").value;
    thickens = document.getElementById("thickness").value;
    radius = document.getElementById("radius").value;
    mouseevent="mouseDown"
}

canvas.addEventListener("mousemove",mouse_move)

function mouse_move (e) 
{
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if(mouseevent=="mouseDown")
    {
        
        ctx.beginPath();
        ctx.strokeStyle=color
        ctx.lineWidth=thickens;
        ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI)
        ctx.stroke()
    }
      
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
} 
canvas.addEventListener("mouseup",mouse_UP)

function mouse_UP (e) 
{
    mouseevent="mouseUP"
}
canvas.addEventListener("mouseleave",mouse_leave)

function mouse_leave (e) 
{
    mouseevent="mouseleave"
}