let timesh = document.getElementById("timeShow");
window.setInterval(function(){
    let dateIS = new Date();
    console.log(dateIS.getHours() +" "+dateIS.getMinutes()+" "+dateIS.getSeconds());
    timesh.innerHTML = `${dateIS.getHours()} : ${dateIS.getMinutes()} : ${dateIS.getSeconds()}`;
    if(dateIS.getHours() == 22 && dateIS.getMinutes() == 57){
        console.log("Timer Hit!!");
    }
}, 1000);

