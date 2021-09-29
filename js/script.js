// change text color function 
function changeColor(){
    let color = document.getElementById('text-color').value;
    document.body.style.color = color;
}

// countdown function 
function myLoop() {
      

   let now = new Date (document.getElementById("startDate").value)
   let end = new Date (document.getElementById ("endDate").value);
   let difference = end.getTime() - now.getTime();
   let a = document.getElementById("days");
   let b = document.getElementById("hours");
   let c = document.getElementById("minutes");
   let d = document.getElementById("seconds");
 
  
 
   function intervals (){
      var red = setInterval(function blue (){
        difference = difference-1000
        let seconds = Math.floor( (difference/1000) % 60 );
        let minutes = Math.floor( (difference/1000/60) % 60 );
        let hours = Math.floor( (difference/(1000*60*60)) % 24);
        let days = Math.floor( difference/(1000*60*60*24) ) ;
        a.innerHTML = 'DAYS ' + "<br>" +days ;
        b.innerHTML = 'HOURS '+ "<br>" + hours  ;
        c.innerHTML = 'MINUTES ' + "<br>" + minutes;   
        d.innerHTML = 'SECONDS ' + "<br>" + seconds;

        if (difference < 1){
         clearInterval(red);
           a.innerHTML = '' ;
           b.innerHTML = '';
           c.innerHTML = '';
           d.innerHTML = '';}
      }, 1000)}

  intervals()  
}







