let result=["rock","paper","scissor"];
let playerScore=0;
let computerScore=0;

function computerPlay(){
    return Math.floor(Math.random()*3);
}


function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection)
        alert("Tie");
    else if(playerSelection==="rock" && computerSelection === "scissor"){
        // alert("player"); 
        playerScore++;
    }
    
    else if(playerSelection==="scissor" && computerSelection === "rock"){ 
        // alert("computer");
        computerScore++;
    }

    else if(playerSelection==="paper" && computerSelection === "scissor"){
        // alert("computer"); 
        computerScore++;
    }

    else if(playerSelection==="scissor" && computerSelection === "paper"){        
        // alert("player"); 
        playerScore++;
    }

    else if(playerSelection==="rock" && computerSelection === "paper"){
        // alert("computer");
        computerScore++;
    }

    else{        
        // alert("player"); 
        playerScore++;
    }

}



function game(){
    
    for(let round = 0;round<5;round++){
        let playerSelection=document.getElementById("game").value;
        // document.write(playerSelection);
        let computerSelection=result[computerPlay()];
        playRound(playerSelection,computerSelection);       
    }

    if(playerScore===computerScore) {
        document.write(playerScore);
        document.write(computerScore);
    
        alert("Tie")
    }
    else if(playerScore>computerScore){ 
        document.write(playerScore);
        document.write(computerScore);
    
        alert("You Won");
    }
    else{ 
        document.write(playerScore);
        document.write(computerScore);
    
        alert("You lose")
    }
}

        
game();