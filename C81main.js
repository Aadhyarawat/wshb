canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =3;
ctx.arc(600, 210, 40, 0 ,2*Math.PI);
ctx.stroke();
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =3;
ctx.arc(500, 210, 40, 0 ,2*Math.PI);
ctx.stroke();
color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =3;
ctx.arc(400, 210, 40, 0 ,2*Math.PI);
ctx.stroke();
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =3;
ctx.arc(450, 260, 40, 0 ,2*Math.PI);
ctx.stroke();
color = "pink";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =3;
ctx.arc(550, 260, 40, 0 ,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color =document.getElementById("color").value;
    
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y=e.clientY - canvas.offsetTop;
    
    circle(mouse_x , mouse_y);
    
}
function circle(mouse_x , mouse_y)
{
  ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();  
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}