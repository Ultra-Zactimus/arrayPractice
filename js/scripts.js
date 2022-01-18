$(document).ready(function(){

  $("form").submit(function(event){

    const totalResults = [];

    const result1 = $("input.firstResult").val();
    const result2 = $("input.secondResult").val();
    const result3 = $("input.thirdResult").val();

    totalResults.push(result1, result2, result3);

    const result1Show = [];
    const result2Show = [];
    const results3Show = [];

    result1Show.push(totalResults[0]);
    result2Show.push(totalResults[1]);
    result3Show.push(totalResults[2]);

    event.preventDefault();
    
    console.log(result1Show);

    



});

});