var date = new Date();
var timeObj = new Object();
var timeZoneUTC = "UTC ";
var country = "";
var timeZone = ["- 12:00", "- 11:00", "- 10:00", "- 09:30", "- 09:00", "- 08:00", "- 07:00", "- 06:00", "- 05:00", "- 04:00",
				"- 03:30", "- 03:00", "- 02:00", "- 01:00", "+ 00:00", "- 00:00", "+ 01:00", "+ 02:00", "+ 03:00", "+ 03:30",
				"+ 04:00", "+ 04:30", "+ 05:00", "+ 05:30", "+ 05:45", "+ 06:00", "+ 06:30", "+ 07:00", "+ 08:00", "+ 08:30",
				"+ 08:45", "+ 09:00", "+ 09:30", "+ 10:00", "+ 10:30", "+ 11:00", "+ 12:00", "+ 12:45", "+ 13:00", "+ 14:00"
				]

dateStr = date.toDateString();	// converted to "Day Date"
// $(".date").prepend("<p>" + dateStr "</p>")
/*timeObj.hours = date.getHours(); // hours in 24hr Format
timeObj.minutes = date.getMinutes();
timeObj.seconds = date.getSeconds();
timeObj.mils = date.getMilliseconds();*/
timeObj.timeFormat = ["12-Hour Format", "24-Hour Format"];
timeObj.amOrPm = "AM";
var timeFormatSelect = timeObj.timeFormat[0];

console.log(dateStr);
$(".date").html(dateStr);
function incrementClock() {
	now = new Date();
	var hours = now.getHours();
		minutes = now.getMinutes();
		seconds = now.getSeconds();
		mils = now.getMilliseconds();

	$("#12hbtn").click(function() {
		timeFormatSelect = timeObj.timeFormat[0];
		$(".amOrPm").show();
	});

	$("#24hbtn").click(function() {
		timeFormatSelect = timeObj.timeFormat[1];
		$(".amOrPm").hide();
	});

	if(hours >= 12) {
		timeObj.amOrPm = "PM";
		if(timeFormatSelect == timeObj.timeFormat[0]) {
			var h = hours;
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

incrementClock();
var clockUpdate = setInterval(incrementClock, 1);
var selectedTZ = $("#selTZ").options($("#selTZ").selectedIndex).text;
console.log(selectedTZ);
$('select').timezones();







