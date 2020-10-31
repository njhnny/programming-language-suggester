function blink_text() {
  $('.blink').fadeOut(150);
  $('.blink').fadeIn(300);
}
setInterval(blink_text, 1500);

$(document).ready(function() {
  $("form#suggester").submit(function(event) {
  
    event.preventDefault();
    $("#csharp").hide();
    $("#python").hide();
    $("#javascript").hide();
    let firstAnswer = $("input:radio[name=q1]:checked").val();
    let secondAnswer = $("input:radio[name=q2]:checked").val();
    let thirdAnswer = $("input:radio[name=q3]:checked").val();
    let fourthAnswer = $("input:radio[name=q4]:checked").val();
    let languageA = 1;
    let languageB = 1;
    let languageC = 1;
    
    if (firstAnswer === "a") {
      languageA += 1;
    } else if (firstAnswer === "b") {
      languageB += 1;
    } else if (firstAnswer === "c") {
      languageC += 1;
    };
    if (secondAnswer === "a") {
      languageA += 1;
    } else if (secondAnswer === "b") {
      languageB += 1;
    } else if (secondAnswer === "c") {
      languageC += 1;
    };
    if (thirdAnswer === "a") {
      languageA += 1;
    } else if (thirdAnswer === "b") {
      languageB += 1;
    } else if (thirdAnswer === "c") {
      languageC += 1;
    };
    if (fourthAnswer === "a") {
      languageA += 1;
    } else if (fourthAnswer === "b") {
      languageB += 1;
    } else if (fourthAnswer === "c") {
      languageC += 1;
    };
    if (languageA > languageB && languageA >languageC) {
      $('#csharp').show();
    } else if (languageB >= languageA && languageB > languageC) {
      $('#python').show();
    } else if (languageC >= languageA && languageC >= languageB) {
      $('#javascript').show();
    } 
    $(document).scrollTop($(document).height());
  });
});

