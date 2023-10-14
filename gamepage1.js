function addnames(){
    variables1=document.getElementById("nameone").value;
    variables2=document.getElementById("nametwo").value;
    localStorage.setItem("keypair", variables1);
    localStorage.setItem("keypair2", variables2);
    window.location="gamepage2.html";
}