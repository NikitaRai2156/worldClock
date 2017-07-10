var hours = $("#hoursTimer").val();
var minutes = $("#minutesTimer").val();
var seconds = $("#secondsTimer").val();


// var timeLimit = 2*24*60*60*1000;
var endDate = Date.parse(Date()) + timeLimit + 1000;

function getRemainingTime(endDate, timeLimit) {
	var timeObj = new Object();
	var t = endDate - Date.parse(new Date());
	// var mil = (t%1000)/100;
	// timeObj.ms = (t%1000)/100;
	timeObj.seconds = Math.floor((t/1000) % 60);
	timeObj.minutes = Math.floor((t/1000/60) % 60);
	timeObj.hours = Math.floor((t/(1000*60*60)) % 24);
	timeObj.days = Math.floor(t/(1000*60*60*24));
	timeObj.total = t;
	// var mil  = t - (((timeObj.days)*24*3600*1000) + ((timeObj.hours)*3600*1000) + ((timeObj.minutes)*60*1000) + ((timeObj.seconds)*1000));
	return timeObj;
}

function incrementClock() {
	var clock = getRemainingTime(endDate, timeLimit);
	$("#clockdiv").html(clock.days + ":" + clock.hours + ":" + clock.minutes + ":" + clock.seconds);// + ":" + clock.ms);

	if(clock.total <= 0) {
		clearInterval(clockUpdate);
	}
}

incrementClock();
var clockUpdate = setInterval(incrementClock, 1000);


// console.log