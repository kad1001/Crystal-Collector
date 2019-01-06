$(document).ready(function() {


    var randomNum = document.getElementById("random");
    var crys1 = Math.floor((Math.random() * 12) + 1);
    var crys2 = Math.floor((Math.random() * 12) + 1);
    var crys3 = Math.floor((Math.random() * 12) + 1);
    var crys4 = Math.floor((Math.random() * 12) + 1);
    var scoreArray = [];
   
    // random number between 19 and 120
    randomNum = Math.floor((Math.random() * 120) + 19);
    $("#random").text(randomNum);

    // each crystal has value of random number between 1 and 12
    $("#crystal1").click(function() {
        scoreArray.push(crys1);
        function getSum(total, num) {
            return total + Math.round(num);
        }
        document.getElementById("scoreNumber").innerHTML = scoreArray.reduce(getSum, 0); 
    })
    $("#crystal2").click(function() {
        scoreArray.push(crys2);
        function getSum(total, num) {
            return total + Math.round(num);
        }
        document.getElementById("scoreNumber").innerHTML = scoreArray.reduce(getSum, 0); 
    
    })
    $("#crystal3").click(function() {
        scoreArray.push(crys3);
        function getSum(total, num) {
            return total + Math.round(num);
        }
        document.getElementById("scoreNumber").innerHTML = scoreArray.reduce(getSum, 0); 
    
    })
    $("#crystal4").click(function() {
        scoreArray.push(crys4);
        function getSum(total, num) {
            return total + Math.round(num);
        }
        document.getElementById("scoreNumber").innerHTML = scoreArray.reduce(getSum, 0); 
    
    })
   
});
