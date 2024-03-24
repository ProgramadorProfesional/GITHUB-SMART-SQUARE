function preload()
{

}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(776,100);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("MODEL LOADEDDEDED");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("Sheesh");
    }
}
function draw()
{
    background("white");
}