var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var roverW=100;
var roverH=90;
var roverX=10; 
var roverY=10;
var imgRover="rover.png";

var nasa_img=["mars.jpg", "nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
var randomNumber=Math.floor(Math.random()*5)
var imgMars=nasa_img[randomNumber];

function add(){
    backImgTag=new Image();
    backImgTag.onload=uploadBackground;
    backImgTag.src=imgMars;

    roverImgTag=new Image();
    roverImgTag.onload=uploadRover;
    roverImgTag.src=imgRover;

}
function uploadBackground(){
     ctx.drawImage(backImgTag, 0, 0, canvas.width, canvas.height)
}
function uploadRover(){
    ctx.drawImage(roverImgTag, roverX, roverY, roverW, roverH);
}

window.addEventListener("keydown", mykeydown)
function mykeydown(e){
    keyPressed=e.keyCode;

    if(keyPressed=="38"){
        up()
    }
    if(keyPressed=="37"){
        left()
    }
    if(keyPressed=="40"){
        down()
    }
    if(keyPressed=="39"){
        right()
    }

}
function up(){
    if(roverY>=0){
        roverY=roverY-8;
        uploadBackground()
        uploadRover()
    }
}

function left(){
    if(roverX>=0){
        roverX=roverX-8;
        uploadBackground()
        uploadRover()
    }
}

function right(){
    if(roverX<=800){
        roverX=roverX+8;
        uploadBackground()
        uploadRover()
    }
}

function down(){
    if(roverY<=500){
        roverY=roverY+8;
        uploadBackground()
        uploadRover()
    }
}