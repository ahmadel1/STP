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

 
  function waitforme(milisec) {
     return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
     })
  }

  
  async function printy() {
     for(var i = difference; i > 0 ; i= i-1000) {
        await waitforme(1000);
        difference = difference-1000
        let seconds = Math.floor( (difference/1000) % 60 );
        let minutes = Math.floor( (difference/1000/60) % 60 );
        let hours = Math.floor( (difference/(1000*60*60)) % 24);
        let days = Math.floor( difference/(1000*60*60*24) ) ;
        a.innerHTML = 'DAYS ' + "<br>" +days ;
        b.innerHTML = 'HOURS '+ "<br>" + hours  ;
        c.innerHTML = 'MINUTES ' + "<br>" + minutes;   
        d.innerHTML = 'SECONDS ' + "<br>" + seconds;
        
     }
     a.innerHTML = "";
     b.innerHTML = "";
     c.innerHTML = "";
     d.innerHTML = "";
     
  }
  printy()
}









