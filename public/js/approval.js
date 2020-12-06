var sideabarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");
var random = []
var arr=[]
// function requests(){
    var regnum = window.sessionStorage.getItem("regno");
    const data = {
        "regno": regnum
    }
    fetch("/workerrequest", { 
        method: "POST", 
        body: JSON.stringify(data), 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }).then(function(response) {   
        return response.json();
      }).then(function(json) {
        var s='<table id="customers"><tr><th>Worker Name</th><th>Primary Skill</th><th>Contact Number</th><th>Approve</th></tr>';
        var i=0;
        console.log(json) 
        const se = json.sewing
        const w = json.welding
        const c = json.carpentry
        const m = json.mason
        const p = json.painter
        if(se.length != 0){
            for(const worker of json.sewing)
            {
              s+="<tr>" 
              s+="<td>" 
              s+=worker.name;
              s+="</td>" 
              s+="<td>" 
              s+=worker.skill;
              s+="</td>" 
              s+="<td>" 
              s+=worker.phno;
              s+="</td>"
              s+="<td>"
              s+='<input class="check" type="checkbox" id="'+i+'"/> <label for="'+i+'" class="toggle"><div class="slider"></div></label>';
              s+="</td>"
              s+="</tr>" 
              i++;
              random.push(worker)
            }
        }
        if(m.length != 0){
            for(const worker of json.mason)
            {
            s+="<tr>" 
            s+="<td>" 
            s+=worker.name;
            s+="</td>" 
            s+="<td>" 
            s+=worker.skill;
            s+="</td>" 
            s+="<td>" 
            s+=worker.phno;
            s+="</td>"
            s+="<td>" 
            s+='<input class="check" type="checkbox" id="'+i+'"/> <label for="'+i+'" class="toggle"><div class="slider"></div></label>';
            s+="</td>"
            s+="</tr>"
            i++;
            random.push(worker)
            }
        }
        if(p.length != 0){
            for(const worker of json.painter)
            {
            s+="<tr>" 
            s+="<td>" 
            s+=worker.name;
            s+="</td>" 
            s+="<td>" 
            s+=worker.skill;
            s+="</td>" 
            s+="<td>" 
            s+=worker.phno;
            s+="</td>"
            s+="<td>" 
            s+='<input class="check" type="checkbox" id="'+i+'"/> <label for="'+i+'" class="toggle"><div class="slider"></div></label>';
            s+="</td>"
            s+="</tr>"
            i++;
            random.push(worker)
            }
        }
        if(w.length != 0){
            for(const worker of json.welding)
            {
            s+="<tr>" 
            s+="<td>" 
            s+=worker.name;
            s+="</td>" 
            s+="<td>" 
            s+=worker.skill;
            s+="</td>" 
            s+="<td>" 
            s+=worker.phno;
            s+="</td>"
            s+="<td>" 
            s+='<input class="check" type="checkbox" id="'+i+'"/> <label for="'+i+'" class="toggle"><div class="slider"></div></label>';
            s+="</td>"
            s+="</tr>"
            i++;
            random.push(worker)
            }
        }
        if(c.length != 0){
            for(const worker of json.carpentry)
            {
            s+="<tr>" 
            s+="<td>" 
            s+=worker.name;
            s+="</td>" 
            s+="<td>" 
            s+=worker.skill;
            s+="</td>" 
            s+="<td>" 
            s+=worker.phno;
            s+="</td>"
            s+="<td>" 
            s+='<input class="check" type="checkbox" id="'+i+'"/> <label for="'+i+'" class="toggle"><div class="slider"></div></label>';
            s+="</td>"
            s+="</tr>"
            i++;
            random.push(worker)
            }
        }
        s+='</table>'
        document.getElementById("show").innerHTML=s;
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
      });
// }

function onClick(){

        n=random.length;
        for(i=0;i<n;i++)
        {
            if(document.getElementById(''+i).checked==true)
            {
                arr.push({no: random[i].phno})
            }
        }
       console.log(arr)

    const datarequest = {
        "regno": regnum,
        "phno": arr
    }
    fetch("/workeraccept", { 
            method: "POST", 
            body: JSON.stringify(datarequest), 
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        }).then(function(response) {   
            return response.json();
        }).then(function(json) {
            alert("Successfully accepted!")
            window.location = "/pending"
        }).catch(function(err) {
            console.log('Fetch problem: ' + err.message);
      });
}

function toggleSidebar(){
    if(!sidebarOpen)
    {
        sidebar.classList.add("sidebar_responsive");
        sidebarOpen = true;
    }
}

function closeSidebar(){
    if(sidebarOpen)
    {
        sidebar.classList.remove("sidebar_responsive");
        sidebarOpen=false;
    }
}