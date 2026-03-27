let count = 0;
let displayCountHme = document.getElementById("hme_start");
displayCountHme.innerText = count;
let displayCountgst = document.getElementById("gst_start")
displayCountgst.innerText = count;
function hme_addone(){
    count += 1;
    displayCountHme.innerText = count;
} 
function hme_addtwo(){
    count += 2;
    displayCountHme.innerText = count;
} 
function hme_addthree(){
    count += 3;
    displayCountHme.innerText = count;
} 
function gst_addone(){
    count += 1;
    displayCountgst.innerText = count;
} 
function gst_addtwo(){
    count += 2;
    displayCountgst.innerText = count;
} 
function gst_addthree(){
    count += 3;
    displayCountgst.innerText = count;
} 
