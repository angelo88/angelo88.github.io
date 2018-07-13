function getRTime(){
        var EndTime= new Date('2013/10/20 00:00:00'); 
        var NowTime = new Date();
        var t =NowTime.getTime() - EndTime.getTime();
        /*var d=Math.floor(t/1000/60/60/24);
        t-=d*(1000*60*60*24);
        var h=Math.floor(t/1000/60/60);
        t-=h*60*60*1000;
        var m=Math.floor(t/1000/60);
        t-=m*60*1000;
        var s=Math.floor(t/1000);*/

        var d=Math.floor(t/1000/60/60/24);
        var h=Math.floor(t/1000/60/60%24);
        var m=Math.floor(t/1000/60%60);
        var s=Math.floor(t/1000%60);
		var month=Math.ceil(d/30);
		var year=Math.ceil(d/365);

        document.getElementById("t_d").innerHTML = "<font size=5>"+ d + "<font size=2> 天 </font>";
        document.getElementById("t_h").innerHTML = "<font size=5>"+ h + "<font size=2> 时 </font>";
        document.getElementById("t_m").innerHTML = "<font size=5>"+ m + "<font size=2> 分 </font>";
        document.getElementById("t_s").innerHTML = "<font size=5>"+ s + "<font size=2> 秒 </font>";
		
		document.getElementById("t_month").innerHTML = "<font size=5>"+ month ;
		document.getElementById("t_year").innerHTML = "<font size=5>"+ year ;
    }
    setInterval(getRTime,1000);