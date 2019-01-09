$(document).ready(function() {
    
    // function to restart game


    var randomNum = Math.floor((Math.random() * 120) + 19);
    var crys1 = Math.floor((Math.random() * 12) + 1);
    var crys2 = Math.floor((Math.random() * 12) + 1);
    var crys3 = Math.floor((Math.random() * 12) + 1);
    var crys4 = Math.floor((Math.random() * 12) + 1);
    var scoreArray = [];
    const getSum = function getSum(total, num) {
        return total + Math.round(num);
    }
    var wins = 0;
    var losses = 0;
    var sumFunc = function getSum(total, num) {
        return total + num;
    };



    

// for (wins = 0; wins < 4; wins++){

    $("#random").text(randomNum);

        $("#crystal1").click(function() {
            scoreArray.push(crys1);
            sumFunc();
            var newSum = scoreArray.reduce(getSum)
            $("#scoreNumber").text(newSum)
            if (newSum > randomNum){
                losses++;
                alert("You lose");
                $("#scoreNumber").empty();
                $("#losses").text(losses)

            }

        })

            $("#crystal2").click(function() {
                scoreArray.push(crys2);
                sumFunc();
                var newSum = scoreArray.reduce(getSum)
                $("#scoreNumber").text(newSum)
                if (newSum > randomNum){
                    losses++;
                    alert("You lose");
                    $("#scoreNumber").empty();
                    $("#losses").text(losses);
                }

            })
            $("#crystal3").click(function() {
                scoreArray.push(crys3);
                sumFunc();
                var newSum = scoreArray.reduce(getSum)
                $("#scoreNumber").text(newSum)
                if (newSum > randomNum){
                    losses++;
                    alert("You lose");
                    $("#scoreNumber").empty();
                    $("#losses").text(losses)
                }

            })
            $("#crystal4").click(function() {
                scoreArray.push(crys4);
                sumFunc();
                var newSum = scoreArray.reduce(getSum)
                $("#scoreNumber").text(newSum)
                if (newSum > randomNum){
                    losses++;
                    alert("You lose");
                    $("#scoreNumber").empty();
                    $("#losses").text(losses)
                }

            });
    // }
    

});

