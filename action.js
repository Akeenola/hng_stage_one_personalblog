
    let d = new Date();
  
    days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    document.getElementById("day").innerHTML="<p> Today is "+days[d.getDay()]+"</p>";
    document.getElementById("date").innerHTML="<p> &copy; Olabisi Akinola A., "+d.toUTCString()+"</p>";
