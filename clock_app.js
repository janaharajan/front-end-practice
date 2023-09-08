setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  // document.getElementById("date").innerHTML = d.toLocaleDateString();
  let my_day=d.getDate()
  let my_month=d.getFullYear()
  const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let my_week=week[d.getDay()]
  let final=`${my_day}th-${my_week}-${my_month}`
  document.getElementById("date").innerHTML = final;

}

