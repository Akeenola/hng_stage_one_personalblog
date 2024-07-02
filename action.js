
    let d = new Date();
  
    days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    document.getElementById("date").innerHTML="<p> &copy; Olabisi Akinola. Today, "+days[d.getDay()]+d.getUTCDate()+"</p>";
