// logical 
function Hellow(){
    const d = document.querySelector("input" ).value;
    
    const div = document.createElement("div");
    div.innerText = d + " How are You";

    document.body.appendChild(div);
}