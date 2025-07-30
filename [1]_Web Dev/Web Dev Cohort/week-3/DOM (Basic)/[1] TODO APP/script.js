
let cnt = 0;

// totol cnt 
function Totalcnt(){
   document.getElementById("Counter").innerHTML = cnt;
}


function Read(){
    const Inputel = document.querySelector("input");
    const c = Inputel.value;
    if(c === "") {
        alert("PLZ ENTER SOMETHING");
        return;
    }
    cnt++;
    const str = cnt +" "+ c;
    

    // Creating a Div 
    const taskDiv = document.createElement("div");
    
    const Dbtn = document.createElement("button");
    const Taskin = document.createElement("div");

    Taskin.id = cnt;
    Dbtn.id = cnt;

    taskDiv.textContent = str;
    Dbtn.textContent = "DELETE";
    Dbtn.ontimeupdate = 1;

    
    Taskin.appendChild(taskDiv);
    Taskin.appendChild(Dbtn);
    Taskin.className = "addedTask";
    
    document.body.appendChild(Taskin);
    console.log(taskDiv.id + str );
    
    Inputel.value = "";
    Totalcnt();

    // Delete Functionality

    Dbtn.onclick = function() {
        const deldiv = Dbtn.parentNode;
        deldiv.parentNode.removeChild(deldiv);
        cnt--;
        console.log(cnt);
        Totalcnt();
    
    };
    
}

