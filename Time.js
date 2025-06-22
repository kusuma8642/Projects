let hours=document.getElementById("hrs");
let minutes=document.getElementById("mins");
let seconds=document.getElementById("secs");
let AmPm=document.getElementById("Am0rPm")
let changeTime=()=>{
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    
    if(date.getHours()>12)
    {
        hour=hour-12;
        if(hour<10){
        hours.innerHTML=0+""+hour;
        }
    }else{
        if(hour<10)
        {
            hours.innerHTML=0+""+hour;
        }
        else{
         hours.innerHTML=hour;   
        }
    }

     if(minute<10){
        minutes.innerHTML=0+""+minute;
        }else
        {
            minutes.innerHTML=minute;
        }
    

     if(second<10){
        seconds.innerHTML=0+""+second;
        }
    else
        {
            seconds.innerHTML=second;
        
    }
    if(date.getHours()>=12){
        AmPm.innerHTML="Pm";
    }else{
        AmPm.innerHTML="Am";
    }
}

setInterval(changeTime,500);