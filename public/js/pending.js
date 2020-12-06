var sewing=0;
var welding=0;
var carpentry=0;
var painter=0;
var mason=0;

var regnum = window.sessionStorage.getItem("regno");
const data = {
    "regno": regnum
}

fetch("/pendingrequest", { 
    method: "POST", 
    body: JSON.stringify(data), 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}).then(function(response) {   
    return response.json();
  }).then(function(json) {
    
    if(json.sewing){
        sewingS='<input type="text" id="type1" placeholder="'+json.sewing+'">'
        document.getElementById("sewing").innerHTML=json.sewing;
    }
    if(json.welding){ 
        weldingS='<input type="text" id="type1" placeholder="'+json.welding+'">'
        document.getElementById("welding").innerHTML=json.welding;
    }
    if(json.carpentry){
        carpentryS='<input type="text" id="type1" placeholder="'+json.carpentry+'">'
        document.getElementById("carpentry").innerHTML=json.carpentry;
    }
    if(json.painter){
        painterS='<input type="text" id="type1" placeholder="'+json.painter+'">'
        document.getElementById("painter").innerHTML=json.painter
    }
    if(json.mason){
        document.getElementById("mason").innerHTML=json.mason;
    }

     
}).catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  });


