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


                
                // playing w possible functions to use instead of reiterating and being confused...
                // playing with inheritence
                var crystal = function() {};
                crystal.prototype.initialize = function(ranval) {
                    var ranval = Math.floor((Math.random() * 12) + 1);
                    this.ranval = ranval;
                }
                crystal.prototype.describe = function(){
                    return this.ranval;
                }
                
                crystal.prototype.summed = function getSum(total, num) {
                    return total + Math.round(num);
                }

                crystal.initialize();
                crystal.describe();
                crystal.summed();
                
                var score = function (randomNum, scoreArray) {
                    this.randomNum = randomNum;
                    this.scoreArray = scoreArray;
                    this.total = function(){
                        return this.randomNum + this.scoreArray;
                    }
                }
                var crystal = new score(randomNum, scoreArray);
                console.log(crystal.total());
                // should output:
                // random num and scorearray


                

          

        });

            
    });
    
});


    
