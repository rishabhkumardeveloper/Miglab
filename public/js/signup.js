function getFile() {
    document.getElementById("upfile").click();
}

function sub(obj) {
    var file = obj.value;
    var fileName = file.split("\\");
    document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
    document.myForm.submit();
    event.preventDefault();

}

function signup()
{
    var letters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var inputtxt = document.forms["Form1"]["pwd"].value;
    var inputtxt2 = document.forms["Form1"]["cpwd"].value;
    var flag=0;

    if (!(inputtxt.match(letters))) {
        alert('Password should be between 8 to 15 characters and must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
        e.preventDefault();
        array1.push("false");
        flag = 1;
        return false;
    }
    else if (inputtxt != inputtxt2) {
        alert("\nPassword did not match: Please try again...")
        e.preventDefault();
        array1.push("false");
        flag = 1;
        return false;
    }
    else {
   
    const v1=document.forms["Form1"]["cemail"].value;
    const v2=document.forms["Form1"]["pwd"].value;
    const v3=document.forms["Form1"]["cname"].value;
    const v4=document.forms["Form1"]["cloc"].value;
    const v5=document.forms["Form1"]["pin"].value;
    const v6=document.forms["Form1"]["crn"].value;
    const v7=document.forms["Form1"]["ename"].value;
    const v8=document.forms["Form1"]["enum"].value;
    const v9=document.forms["Form1"]["designation"].value;
    const v10=document.forms["Form1"]["eemail"].value;

    const data = {
        "email": v1,
        "password": v2,
        "companyname": v3,
        "location": v4,
        "pincode": v5,
        "regno": v6,
        "employee": {
            "name": v7,
            "phno": v8,
            "designation": v9,
            "id":v10
        }
    }
    
    $.ajax({
    type: "POST",
    url: "/company",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),        
    success: function(data){
        console.log(data);
        window.location = "/login";
    },
    error: function(xhr,status,error){
        console.log(error);
    }
    });
}
}
