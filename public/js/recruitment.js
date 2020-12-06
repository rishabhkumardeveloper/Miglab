function sendrequest(){
    var skill1 = document.getElementById("type1").value;
    var skill2 = document.getElementById("type2").value;
    var skill3 = document.getElementById("type3").value;
    var skill4 = document.getElementById("type4").value;
    var skill5 = document.getElementById("type5").value;

    var regnum = window.sessionStorage.getItem("regno");
    const data = {
        "regno": regnum,
        "sewing": skill1,
        "welding": skill2,
        "carpentry": skill3,
        "painter": skill4,
        "mason": skill5
    }
    fetch("/recruitment", { 
        method: "POST", 
        body: JSON.stringify(data), 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }).then(function(response) {   
        return response.json();
      }).then(function(json) {
          console.log(json)       //Data fetched in json object 
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
      });
}