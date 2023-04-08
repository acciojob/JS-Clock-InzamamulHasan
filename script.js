//your code here
const secondHand=document.querySelector(".second-hand");
const minuteHand=document.querySelector(".min-hand");
const hourHand=document.querySelector(".hour-hand");
 function setdata(){
	 const now=new Date();
	 let second=now.getSeconds();
	 let minute=now.getMinutes();
	 let hour=now.getHours();
	 let secondDegre=6*second;
	 let minuteDegree=6*minute;
	 let hourDegree=hour*30+minute/2;
     console.log()
	 secondHand.style.transform=`rotate(${secondDegre}deg)`;
	 minuteHand.style.transform=`rotate(${minuteDegree+90}deg)`;
	 hourHand.style.transform=`rotate(${hourDegree+90}deg)`;
 }
setInterval(setdata,1000)