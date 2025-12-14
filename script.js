function getComputerChoice(){
    //generate a random number
    const randomNumber = Math.random();
    // get a rock paper or scissors base on random number
    let result = "unknown"
    if (randomNumber <= 0.3 && randomNumber >= 0){
        result = "Rock"
    }else if (randomNumber >= 0.4 && randomNumber <= 0.6){
        result = "Scissors"
    }else{
        result = "Paper"
    }
    // return the result
    return result
}


console.log(getComputerChoice());
