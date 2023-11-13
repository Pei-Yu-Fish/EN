var soundl
function preload() {
  soundl=loadSound("Noctyx - Stuck In The Abyss (Official Music Video)  _ NIJISANJI EN (128 kbps).mp3")
} //載入音樂


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#48304D");
  analyzer=new p5.Amplitude();
  analyzer.setInput(soundl)
}

var x=100; 
var y=100;
var r_b=100;
var w=70; 
var r_s=20;

function draw() {

 
  rectMode(CENTER)
  strokeWeight(2)
  background("#48304D");

if(soundl.isPlaying()){ //有播放時
  var fc=map(analyzer.getLevel(),0,1,100,800)
  var fs=map(analyzer.getLevel(),0,1,200,-20)
  var fe=map(analyzer.getLevel(),0,1,10,60)
}else{ //沒播放時
  var fc =map(mouseX,0,width,50,300)
  var fs =map(mouseX,0,width,50,100)
  var fe =map(mouseX,0,width,10,25)
}
    noStroke()
    fill("#960018")
    ellipse(width/2,height/2,fs) 
    noFill()
    stroke("#Fff321")
    strokeWeight(8)
    ellipse(width/2,height/2,fc)

}



function mousePressed(){
  if(soundl.isPlaying()){
    soundl.stop();
   }else{
   soundl.play();
 }
}
