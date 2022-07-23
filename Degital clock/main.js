function myTime() {
    var myDate = new Date();
    var hr = myDate.getHours(),
        min = (myDate.getMinutes() < 10 ) ? '0' + myDate.getMinutes() : myDate.getMinutes(),
        sec = (myDate.getSeconds() <10) ? '0' + myDate.getSeconds() : myDate.getSeconds(),
        M = (myDate.getHours() >= 12) ? 'PM' : 'AM';
        
        if (myDate.getHours() == 0){
            hr = 12;
        } else if(myDate.getHours() > 12){
            hr = myDate.getHours() - 12;
        }
        else {
           hr = myDate.getHours();
        }
        document.querySelector('.hour').innerHTML = hr;
        document.querySelector('.minute').innerHTML = min;
        document.querySelector('.secound').innerHTML = sec;
        document.querySelector('.am-pm').innerHTML = M;

        var myDay = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var myMonth = ['January','February','March','April','May','June','July','August','September','October','November','december'];
        var day = myDate.getFullYear();

        var currentDate = myDay[myDate.getDay()] + ', ' + myMonth[myDate.getMonth()] + ' ' + day;

        document.querySelector('.date').innerHTML = currentDate;
}
myTime();
setInterval(() => {
   myTime(); 
},1000);