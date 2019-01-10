$(document).ready(function() {
    
    // need function that will reset game after user is alerted with result
    // this function will determine if the user won or lost the game, and then adjust the DOM with their scores
    // this function can be called in each click function, after the users button value is loaded to the DOM

    // do i need to mention "i" anywhere else?
    // (i = tries)
    // for (let i = 0; i < 5; i++){play game}
    // else {alert congrats, then location.reload}

    
    // // using "lives"
    // var lives = 3;
    // var livesText;
    // var lifeLostText = "You Lose!"

    // function lose(){
    //     lives--;
    //     losses++;
    //     if(lives){
    //         $("#losses").text(losses);
    //         lifeLostText.visible = true;
    //         if (newSum > randomNum){
    //             losses++;
    //             alert("You lose");
    //             $("#scoreNumber").empty();
                

    //     }
    // }




    var randomNum = Math.floor((Math.random() * 120) + 19);
    var crys1val = Math.floor((Math.random() * 12) + 1);
    var crys2val = Math.floor((Math.random() * 12) + 1);
    var crys3val = Math.floor((Math.random() * 12) + 1);
    var crys4val = Math.floor((Math.random() * 12) + 1);
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
            scoreArray.push(crys1val);
            sumFunc();
            var newSum = scoreArray.reduce(getSum)
            $("#scoreNumber").text(newSum)

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
    // }
    

});