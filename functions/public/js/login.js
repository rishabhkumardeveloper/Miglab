function login()
{
    // const v1=document.forms["Form1"]["pwd"].value;
    // const v2=document.forms["Form1"]["crn"].value;
    const v1 = document.getElementById("pwd").value;
    const v2 = document.getElementById("crn").value;

    const data = {
        "password":v1,
        "regno": v2
    }
    
    // $.ajax({
    // type: "POST",
    // url: "/companylogin",
    // dataType: "json",
    // contentType: "application/json; charset=utf-8",
    // data: JSON.stringify(data),        
    // success: function(data){
    //     console.log(data);
    // },
    // error: function(xhr,status,error){
    //     console.log(error);
    // }
    // });

    fetch("/companylogin", { 
        method: "POST", 
        body: JSON.stringify(data), 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }).then(function(response) {   
        return response.json();
      }).then(function(json) {
          console.log(json.exist)       //Data fetched in json object 
          if(json.exist == 1)
          {
            window.sessionStorage.setItem("regno", json.regno);
            window.location = "/dashboard";
          }
          else{
              alert("User does not exist!");
          }
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
      });
}
