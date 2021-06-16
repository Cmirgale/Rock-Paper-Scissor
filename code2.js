let input=["Rock","Paper","Scissor"];
let playerScore1=0;
let computerScore1=0;
let img=new Image();
let playerSelection;
let computerSelection;


playerSelection;


function playRound(playerSelection,computerSelection){
    
    console.log(playerSelection)

    if(playerSelection===computerSelection){
       document.querySelector("#computerSelection").setAttribute("src",`images\\${computerSelection}.png`)
       document.querySelector("#playerSelection").setAttribute("src",`images\\${playerSelection}.png`)
        document.querySelector("#result").textContent="Tie";
    }

    else if(playerSelection==="Rock" && computerSelection === "Scissor"){
        document.querySelector("#computerSelection").setAttribute("src",`images\\${computerSelection}.png`)
       document.querySelector("#playerSelection").setAttribute("src",`images\\${playerSelection}.png`)
        document.querySelector("#result").textContent="You Won";
        playerScore1++;
    }
    
    else if(playerSelection==="Scissor" && computerSelection === "Rock"){ 
        document.querySelector("#computerSelection").setAttribute("src",`images\\${computerSelection}.png`)
       document.querySelector("#playerSelection").setAttribute("src",`images\\${playerSelection}.png`)
        document.querySelector("#result").textContent="You lose!";
        computerScore1++;
    }

    else if(playerSelection==="Paper" && computerSelection === "Scissor"){
        document.querySelector("#computerSelection").setAttribute("src",`images\\${computerSelection}.png`)
       document.querySelector("#playerSelection").setAttribute("src",`images\\${playerSelection}.png`)
        document.querySelector("#result").textContent="You lose!";
        computerScore1++;
    }

    else if(playerSelection==="Scissor" && computerSelection === "Paper"){        
        document.querySelector("#computerSelection").setAttribute("src",`images\\${computerSelection}.png`)
       document.querySelector("#playerSelection").setAttribute("src",`images\\${playerSelection}.png`)
        document.querySelector("#result").textContent="You Won";
        playerScore1++;
    }

    else if(playerSelection==="Rock" && computerSelection === "Paper"){
        document.querySelector("#computerSelection").setAttribute("src",`images\\${computerSelection}.png`)
       document.querySelector("#playerSelection").setAttribute("src",`images\\${playerSelection}.png`)
        document.querySelector("#result").textContent="You lose!";
        computerScore1++;
    }

    else{        
        document.querySelector("#computerSelection").setAttribute("src",`images\\${computerSelection}.png`)
       document.querySelector("#playerSelection").setAttribute("src",`images\\${playerSelection}.png`)
        document.querySelector("#result").textContent="You Won";
        playerScore1++;
    }

}


// function eventHandler(e){
//     console.log(e.target.value);
// }
// window.onload =function(){
// const btn=document.querySelector(".game");
// btn.addEventListener('click',eventHandler);
// }

function getPlayerSelection(e){
    playerSelection=e.target.id;
    return playerSelection;
}

window.onload =function(){
const btn=document.querySelectorAll(".game");
for(let i = 0;i<btn.length;i++)
    btn[i].addEventListener('click',game);
}




function game(e){
    computerSelection=input[ Math.floor(Math.random()*3)];
    playRound(getPlayerSelection(e),computerSelection);       
    
    document.querySelector("#playerScore").innerHTML=playerScore1.toString();
    document.querySelector("#computerScore").innerHTML=computerScore1.toString();


    if(playerScore1===5||computerScore1===5){
        const btn=document.querySelectorAll(".game");
        for(let i = 0;i<btn.length;i++){
            btn[i].disabled=true;
        }
    
        if(playerScore1===computerScore1) {
            document.querySelector("#result").textContent="Tie";
        }
        
        else if(playerScore1>computerScore1){ 
            document.querySelector("#result").textContent="You Won";
        }
        else{     
            document.querySelector("#result").textContent="You lose!";
        }
        
        
    }
}

        
