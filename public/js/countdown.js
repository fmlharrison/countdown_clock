document.getElementById('countdown').addEventListener('click', function (e) {
  e.preventDefault();
  var date_value = document.getElementById('date').value;
  var time_value = document.getElementById('time').value;
  var countdowTime = new Date(setDateTimeData(date_value, time_value));
  countdownClock(countdowTime);
});

function setDateTimeData(date_value, time_value) {
  return date_value + "T" + time_value;
}

function countdownClock(inputTime) {
  var time = new Date();
  var difference = (inputTime.getTime() - time.getTime()) / 1000;
  var clock = $('.your-clock').FlipClock(difference, {
    clockFace: 'DailyCounter',
    countdown: true
  });
}
