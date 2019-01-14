$(document).ready(function() {
    
    //  variables 
    var randomNum;
    var crys1val;
    var crys2val;
    var crys3val;
    var crys4val;
    var scoreArray;
    var newSum;
    var wins;
    var losses;


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


    game();

    $("#random").text(randomNum);

        $("#crystal1").click(function() {
            scoreArray.push(crys1val);
            sumFunc();
            newSum = scoreArray.reduce(getSum)
            $("#scoreNumber").text(newSum)
            console.log("newSum", newSum)
            console.log("randomNum", randomNum)
            checkWins();
        });

        $("#crystal2").click(function() {
                scoreArray.push(crys2val);
                sumFunc();
                var newSum = scoreArray.reduce(getSum)
                $("#scoreNumber").text(newSum)
                if (newSum > randomNum){
                    alert("You lose");
                    location.relooad();
                }

            })
            $("#crystal3").click(function() {
                scoreArray.push(crys3val);
                sumFunc();
                var newSum = scoreArray.reduce(getSum)
                $("#scoreNumber").text(newSum)
                if (newSum > randomNum){
                    alert("You lose");
                    location.reload();
                }

            })
            $("#crystal4").click(function() {
                scoreArray.push(crys4val);
                sumFunc();
                var newSum = scoreArray.reduce(getSum)
                $("#scoreNumber").text(newSum)
                if (newSum > randomNum){
                    alert("You lose");
                    location.reload()
                    // $("#scoreNumber").empty();
                    // $("#losses").text(losses)
                }

            });

});