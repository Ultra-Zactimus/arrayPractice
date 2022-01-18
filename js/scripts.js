$(document).ready(function(){

  $("form").submit(function(event){

    const totalResults = [];

    const result1 = $("input.firstResult").val();
    const result2 = $("input.secondResult").val();
    const result3 = $("input.thirdResult").val();

    totalResults.push(result1, result2, result3);
    
    $(".list1").text(totalResults[0]);
    $(".list2").text(totalResults[1]);
    $(".list3").text(totalResults[2]);

    event.preventDefault();

  });

});