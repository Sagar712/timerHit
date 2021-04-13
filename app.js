window.setInterval(function(){
    let dateIS = new Date();
    console.log(dateIS.getHours() +" "+dateIS.getMinutes()+" "+dateIS.getSeconds());
    if(dateIS.getHours() == 23 && dateIS.getMinutes() == 4){
        console.log("Timer Hit!!");
    }
}, 60000);

