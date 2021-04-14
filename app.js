
const AppUrl = 'https://secret-script.herokuapp.com/script/';
let dateIS = new Date();
let hours = dateIS.getHours();
let mins = dateIS.getMinutes();
let poster = "am"
if(hours){
    poster = "pm"
    if(hours>12){
        hours = hours-12;
    }
} 


window.setInterval(function(){
    let dateIS = new Date();
    console.log(dateIS.getHours() +" "+dateIS.getMinutes()+" "+dateIS.getSeconds());
    
    let hours = dateIS.getHours();
    let mins = dateIS.getMinutes();
    let secs = dateIS.getSeconds();
    let poster = "am"
    if(hours){
        poster = "pm"
        if(hours>12){
            hours = hours-12;
        }
    } 
    


    let spin = document.getElementById("spineerTrial");
    let spinHour = document.getElementById("spineerTrialHours");
    let extra = parseInt((mins*6)/72);

    console.log("extra degress of hour:" +((hours*30)+extra));
    
    
    spinHour.style.transform = `rotate(${((hours*30)+extra)}deg)`;
    spin.style.transform = `translateX(100%) rotate(${mins*6}deg)`;

    
    
    
    if(dateIS.getHours() == 21 && dateIS.getMinutes() == 0 && dateIS.getSeconds() == 2){

        console.log("Calling DB");
        postdb()
        
    }
    

}, 1000);

function postdb() {


    let data = {
        username: "Testing Timer app",
        email: "BackgroundupportCheck",
        password: "Success!!"
    };

    fetch(AppUrl,{method:'post', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
        .then(res => {
            return res.json();
        })
        .then(response => {
            console.log(response);
            alert(`${response.msg}`);
        });
}
