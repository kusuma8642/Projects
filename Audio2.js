let nextButton=document.getElementById("next")
let prevButton=document.getElementById("prev")
let img=document.getElementById("img");
let VDown=document.getElementById("VDown");
let VUp=document.getElementById("VUp");
let Play=document.getElementById("play");
let Pause=document.getElementById("pause");
let Restart = document.getElementById("restart");

let AudioPlayer= new Audio("/Audios/Doraemon.mp3");

console.log(AudioPlayer.paused)

let images=["doremon1","cake","dora","motu"];

let Audios=["Doraemon","radhe","Raja Rani Telugu Bgm","Doraemon"];

let i=0;

AudioPlayer.volume=0.1;

Restart.addEventListener('click',()=>{
    AudioPlayer.currentTime=0;
    AudioPlayer.play(); 
  
});

VUp.addEventListener('click',()=>{

    if(AudioPlayer.volume<=1){
    AudioPlayer.volume=AudioPlayer.volume+0.1;
    }
});

VDown.addEventListener('click',()=>{

    if(AudioPlayer.volume>0.1){
    AudioPlayer.volume=AudioPlayer.volume-0.1;
    }
});

nextButton.addEventListener('click',()=>{

    if (i<Audios.length-1){
        i++;
        console.log("from next if "+i)
    }else{
        i=0;
         console.log("from next else "+i)
    }

    img.src="/Image/"+images[i]+".jpg";
    AudioPlayer.src="/Audios/"+Audios[i]+".mp3";
    AudioPlayer.play();

});

prevButton.addEventListener('click',()=>{
    if(i<=0){
       
        i=images.length-1;
        console.log("from if "+i)

    }else{

       i--;
        console.log("from prev else "+i)
    }

    img.src="/Image/"+images[i]+".jpg";
    AudioPlayer.src="/Audios/"+Audios[i]+".mp3";
    AudioPlayer.play();

});

Play.addEventListener('click',()=>{

      console.log(AudioPlayer.paused)
      if(AudioPlayer.paused){
        AudioPlayer.play();
    }else{
        AudioPlayer.pause()
    }

});

Pause.addEventListener('click',()=>{
    console.log(AudioPlayer.paused)

    if(AudioPlayer.paused!=true){
        AudioPlayer.pause();
    }else{
        AudioPlayer.play()
    }
        
});