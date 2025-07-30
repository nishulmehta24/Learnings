let cnt = 0;

function Read(){
    const InputEl = document.querySelector("input");
    const InputValue = InputEl.value;

    if(InputValue === "") {
        alert("Please Type Todo");
        return;
    }
    // console.log(InputValue);

    const str = cnt+1 + ". " + InputValue;
    const TaskDiv = document.createElement("div");
    const TaskStr = document.createElement("div");
    const Dbtn = document.createElement("button");

    TaskStr.innerText = str;
    Dbtn.innerText = "DELETE"

    TaskDiv.appendChild(TaskStr);
    TaskDiv.appendChild(Dbtn);

    TaskDiv.className = "TaskDiv"

    document.querySelector("#TaskList").appendChild(TaskDiv);

    //counter value Print
    document.querySelector("#cnt").innerText = cnt+1

    cnt++;

    Dbtn.onclick = function () {
        const deldiv = Dbtn.parentNode;         // ✅ No parentheses
        deldiv.parentNode.removeChild(deldiv);  // ✅ Proper way to remove an element
        cnt--;
        //counter value Print
        document.querySelector("#cnt").innerText = cnt

    }
    

    InputEl.value = "";
}