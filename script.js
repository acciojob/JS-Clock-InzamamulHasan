//your code here
const secondHand=document.querySelecetor(".second-hand");
const minuteHand=document.querySelector(".min-hand");
const hourHand=document.querySelector(".hour-hand");
 function setdata(){
	 const now=new Date();
	 let second=now.getSeconds();
	 let minute=now.getMinutes();
	 let hour=now.getHours();
	 let secondDegre=6*second;
	 let minuteDegree=6*minute;
	 let hourDegree=(hour%12)*30+min/2;
	 secondHand.style.transform=`rotate(${secondDegre}deg)`;
	 minuteHand.style.transform=`rotate(${minuteDegree}deg)`;
	 minuteHand.style.transform=`rotate(${secondDegre}deg)`;
 }
setInterval(setdata,1000)
