$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    

    let firstAnswer = $("input:radio[name=q1]:checked").val();
    let secondAnswer = $("input:radio[name=q2]:checked").val();
    let thirdAnswer = $("input:radio[name=q3]:checked").val();
    let fourthAnswer = $("input:radio[name=q4]:checked").val();

    let languageA = 0;

    if (firstAnswer = "a") {
      languageA += 1;
    };
    alert(concat(firstAnswer, secondAnswer, thirdAnswer, fourthAnswer));
    
    /*if (secondAnswer = "a") languageA += 1;
    if (secondAnswer = "b") languageB += 1;
    if (secondAnswer = "c") languageC += 1;

    if (thirdAnswer = "a") languageA += 1;
    if (thirdAnswer = "b") languageB += 1;
    if (thirdAnswer = "c") languageC += 1;

    if (fourthAnswer = "a") languageA += 1;
    if (fourthAnswer = "b") languageB += 1;
    if (fourthAnswer = "c") languageC += 1;
    let languageA = parseInt(x, base);
    const parsed = parseInt(x, base);
    */
    
    

    event.preventDefault();
  });
});

/*if (gender === 'male' &&  age < 26) {
  quote += 50;
}

$("#rate").text(quote);
$("#quote").show();
let score = parseInt($("input#age").val());*/
