function preload(){

}
function setup(){
    canvas=createCanvas(800,800);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,100,100,400,300);
    fill(250,0,0);
    stroke(250,0,0);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    fill(0, 128, 0); stroke(0, 128, 0); rect(90, 40, 460, 20); rect(90, 420, 460, 20); rect(40, 90, 20, 300); rect(580, 90, 20, 300);

}
function take_snapshot(){
   save('student_name.png');
}
