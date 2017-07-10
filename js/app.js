var timeObj = new Object();
var hours;
var minutes;
var seconds;
var mils;
var h;

timeObj.timeFormat = ["12-Hour Format", "24-Hour Format"];
timeObj.amOrPm = "AM";
var timeFormatSelect = timeObj.timeFormat[0];

function changeTimeFormat() {
	$("#12hbtn").click(function() {
		timeFormatSelect = timeObj.timeFormat[0];
		$(".amOrPm").show();
	});

	$("#24hbtn").click(function() {
		timeFormatSelect = timeObj.timeFormat[1];
		$(".amOrPm").hide();
	});
}

function incrementClock() {
	userTZ = $("#selTZ").val();
	now = moment.utc();
	
	if(userTZ >= 0) {
		now.add(userTZ, 'hours');
	}
	else {
		now.subtract(-userTZ, 'hours');
	}
	hours = now.hours();
	minutes = now.minutes();
	seconds = now.seconds();
	mils = now.milliseconds();

	if(hours >= 24) {
		hours = (hours % 24);
	}

	if(hours >= 12) {
		timeObj.amOrPm = "PM";
		if(timeFormatSelect == timeObj.timeFormat[0]) {
			h = hours;
			hours = h - 12;
		}
	}
	else {
		timeObj.amOrPm = "AM";
	}
	if(hours == 0 && timeFormatSelect == timeObj.timeFormat[0]) {
		hours = 12;
	}
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	$(".hours").html(hours);
	$(".minutes").html(minutes);
	$(".seconds").html(seconds);
	$(".mils").html(mils);
	$(".amOrPm").html(timeObj.amOrPm);
}

var clockUpdate = setInterval(incrementClock, 1);
changeTimeFormat();

