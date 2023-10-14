variables3 = localStorage.getItem("variables3");
variables4 = localStorage.getItem("variables4");


player1_score= 500;
player2_score= 500;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("tom_turn").innerHTML = "Tommy Turn:" + variables3 ;
document.getElementById("jerry_turn").innerHTML = "Jerry Turn :" + variables4;




function rolldice(){
    if(true){
        let Winner = "Tom";
        document.getElementById("alpa").textContent=Winner;
    }
    rolldice();
    
}
