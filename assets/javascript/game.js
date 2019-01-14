$(document).ready(function() {
    
    //  variables 
    var randomNum;
    var crys1val;
    var crys2val;
    var crys3val;
    var crys4val;
    var scoreArray;
    var newSum;
    var wins = 0;
    var losses = 0;


    // resets game vars
    function game(){
        randomNum = Math.floor((Math.random() * 120) + 19);
        crys1val = Math.floor((Math.random() * 12) + 1);
        crys2val = Math.floor((Math.random() * 12) + 1);
        crys3val = Math.floor((Math.random() * 12) + 1);
        crys4val = Math.floor((Math.random() * 12) + 1);
        scoreArray = [];
        newSum = 0;
        $("#scoreNumber").empty();
        $("#random").text(randomNum)
    };


    function checkWins(){
        if (newSum == randomNum){
            alert("You win!");
            wins++;
            $("#wins").text(wins)
            game();
        }
        else if (newSum > randomNum){
            alert("you lose!");
            losses++;
            $("#losses").text(losses)
            game();
        }
    };

    const getSum = function getSum(total, num) {
        return total + Math.round(num);
    }

    var sumFunc = function getSum(total, num) {
        return total + num;
    };

    // call game function to set vars
    game();

    $("#crystal1").click(function() {
        scoreArray.push(crys1val);
        sumFunc();
        newSum = scoreArray.reduce(getSum)
        $("#scoreNumber").text(newSum)
        checkWins();
    });

    $("#crystal2").click(function() {
            scoreArray.push(crys2val);
            sumFunc();
            newSum = scoreArray.reduce(getSum)
            $("#scoreNumber").text(newSum)
            checkWins();

        });
        $("#crystal3").click(function() {
            scoreArray.push(crys3val);
            sumFunc();
            newSum = scoreArray.reduce(getSum)
            $("#scoreNumber").text(newSum)
            checkWins();
        });
        $("#crystal4").click(function() {
            scoreArray.push(crys4val);
            sumFunc();
            newSum = scoreArray.reduce(getSum)
            $("#scoreNumber").text(newSum)
            checkWins();
        });

});