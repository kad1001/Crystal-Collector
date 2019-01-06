$(document).ready(function() {

    
    var randomNum = document.getElementById("random");
    randomNum = Math.floor((Math.random() * 120) + 19);
    var crys1 = Math.floor((Math.random() * 12) + 1);
    var crys2 = Math.floor((Math.random() * 12) + 1);
    var crys3 = Math.floor((Math.random() * 12) + 1);
    var crys4 = Math.floor((Math.random() * 12) + 1);
    var scoreArray = [];
    function getSum(total, num) {
        return total + Math.round(num);
    }
    var sum = scoreArray.reduce(getSum, 0);
    var wins = [];
    var lose = [];

    // function to restart game
    // random number between 19 and 120


    // clicking on an image restarts the game
    $("img").click(function() {
        $("#random").text(randomNum);

            // each crystal has value of random number between 1 and 12
            $("#crystal1").click(function() {
            
                scoreArray.push(crys1);
                function getSum(total, num) {
                    return total + Math.round(num);
                }
                document.getElementById("scoreNumber").innerHTML = scoreArray.reduce(getSum, 0); 
                // win if numbers are equal
                if (randomNum == scoreArray.reduce(getSum, 0)) {
                    wins.push("1");
                    $("#counter").text("Wins: " + wins.reduce(getSum, 0));
                    }
                // lose if random < crystals
                if (randomNum < scoreArray.reduce(getSum, 0)) {
                    lose.push("1");
                    $("#counter").text("Lose: " + lose.reduce(getSum, 0));
                    }
                    
                
            })
            $("#crystal2").click(function() {
                scoreArray.push(crys2);
                function getSum(total, num) {
                    return total + Math.round(num);
                }
                document.getElementById("scoreNumber").innerHTML = scoreArray.reduce(getSum, 0); 
                // win
                if (randomNum == scoreArray.reduce(getSum, 0)) {
                    wins.push("1");
                    $("#counter").text("Wins: " + wins.reduce(getSum, 0));
                }
                //    lose
                if (randomNum < scoreArray.reduce(getSum, 0)) {
                    lose.push("1");
                    $("#counter").text("Lose: " + lose.reduce(getSum, 0));
                    }
            })
            $("#crystal3").click(function() {
                scoreArray.push(crys3);
                function getSum(total, num) {
                    return total + Math.round(num);
                }
                document.getElementById("scoreNumber").innerHTML = scoreArray.reduce(getSum, 0); 
                // win
                if (randomNum == scoreArray.reduce(getSum, 0)) {
                    wins.push("1");
                    $("#counter").text("Wins: " + wins.reduce(getSum, 0));
                }
                //    lose
                if (randomNum < scoreArray.reduce(getSum, 0)) {

                    lose.push("1");
                    $("#counter").text("Lose: " + lose.reduce(getSum, 0));
                    }
            })

            $("#crystal4").click(function() {
                scoreArray.push(crys4);
                function getSum(total, num) {
                    return total + Math.round(num);
                }
                document.getElementById("scoreNumber").innerHTML = scoreArray.reduce(getSum, 0); 
            
                // win
                if (randomNum == scoreArray.reduce(getSum, 0)) {
                   
                    wins.push("1");
                    $("#counter").text("Wins: " + wins.reduce(getSum, 0));
                    return

                }
                //    lose
                if (randomNum < scoreArray.reduce(getSum, 0)) {
                    lose.push("1");
                    $("#counter").text("Lose: " + lose.reduce(getSum, 0));
                    return

                }
                
        });

            
    });
    
});


    
