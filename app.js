let dateIS = new Date();
console.log(dateIS.getHours() +" "+dateIS.getMinutes()+" "+dateIS.getSeconds());
if(dateIS.getHours() == 22 && dateIS.getMinutes() == 43){
    console.log("Timer Hit!!");
}