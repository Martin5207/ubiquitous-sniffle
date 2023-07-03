function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,500);
    canvas.position(700,120)
    posenet=ml5.poseNet(video,molo)
    posenet.on("pose",rezzult);
}
function molo(){
    console.log("this is ready");
}
function draw(){
background("red")

}
function rezzult(results){
    if(results.length>0){console.log(results)}
}