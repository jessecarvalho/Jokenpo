function play(move) {
    canPlay = analyze();
    if (canPlay){
        move = move + 1;
        var shot = Math.floor(Math.random() * (4 - 1))+1;
        computerMove(shot);
        playerMove(move);
        compare(move, shot);
    } else{
        alert("Já jogado! Clique em jogar novamente");
    }
}



function analyze(newTurn = false) {
    if (typeof alreadyPlayed === 'undefined' || alreadyPlayed === false) {
        alreadyPlayed = true;
        return true;
    } else{
        return false;
    }
}

function computerMove(move) {
    if (move === 1) {
        document.getElementById("pcShot-0").style.opacity="1";
    } else if(move === 2) {
        document.getElementById("pcShot-1").style.opacity = "1";
    }
    else if(move === 3) {
        document.getElementById("pcShot-2").style.opacity = "1";
    }
}

function playerMove(move) {
    if (move === 1) {
        document.getElementById("playerShot-0").style.opacity="1";
    } else if(move === 2) {
        document.getElementById("playerShot-1").style.opacity = "1";
    }
    else if(move === 3) {
        document.getElementById("playerShot-2").style.opacity = "1";
    }
}

function compare(playerMove, pcMove) {
    if (playerMove===1){
        if (pcMove===1){
            document.getElementById("message").innerHTML = "EMPATE";
        }
        if (pcMove===2){
            document.getElementById("message").innerHTML = "VITÓRIA DO COMPUTADOR!";
            pontuation(false);
        }
        if (pcMove===3){
            document.getElementById("message").innerHTML = "VOCÊ VENCEU!";
            pontuation(true);
        }
    }
    if (playerMove===2){
        if (pcMove===1){
            document.getElementById("message").innerHTML = "VOCÊ VENCEU!";
            pontuation(true);
        }
        if (pcMove===2){
            document.getElementById("message").innerHTML = "EMPATE";
        }
        if (pcMove===3){
            document.getElementById("message").innerHTML = "VITÓRIA DO COMPUTADOR!";
            pontuation(false);
        }
    }
    if (playerMove===3){
        if (pcMove===1){
            document.getElementById("message").innerHTML = "VITÓRIA DO COMPUTADOR!";
            pontuation(false);
        }
        if (pcMove===2){
            document.getElementById("message").innerHTML = "VOCÊ VENCEU!";
            pontuation(true);
        }
        if (pcMove===3){
            document.getElementById("message").innerHTML = "EMPATE";
        }
    }
}

function pontuation(winner) {
    if (winner === true){
        if (typeof qtdPlayerPoints === 'undefined'){
            qtdPlayerPoints = 1;
        } else{
            qtdPlayerPoints++;
        }
        document.getElementById("playerPoints").innerHTML = qtdPlayerPoints;

    } else{
        if (typeof qtdBotPoints === 'undefined'){
            qtdBotPoints = 1;
        } else{
            qtdBotPoints++;
        }
        document.getElementById("computerPoints").innerHTML = qtdBotPoints;
    }
}

function restore() {
    document.getElementById("pcShot-0").style.opacity=".5";
    document.getElementById("pcShot-1").style.opacity=".5";
    document.getElementById("pcShot-2").style.opacity=".5";
    document.getElementById("playerShot-0").style.opacity=".5";
    document.getElementById("playerShot-1").style.opacity=".5";
    document.getElementById("playerShot-2").style.opacity=".5";
    document.getElementById("message").innerHTML = "";
    alreadyPlayed = false;

}

function restart() {
    restore();
    qtdPlayerPoints = 0;
    qtdBotPoints = 0;
    document.getElementById("playerPoints").innerHTML = qtdPlayerPoints;
    document.getElementById("computerPoints").innerHTML = qtdBotPoints;
}


function mouseOver(element) {
    if (typeof alreadyPlayed === 'undefined' || alreadyPlayed === false) {
        document.getElementById(element).style.opacity = "1";
    }
}

function mouseOut(element) {
    if (typeof alreadyPlayed === 'undefined' || alreadyPlayed === false) {
        document.getElementById(element).style.opacity = ".5";
    }
}