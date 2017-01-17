$(document).ready(function(){
  $("form#stress-quiz").submit(function(event){
    event.preventDefault();
    $(".result").show();
    var warningArray = [];
    $("input:checkbox[name=warningsign]:checked").each(function(){
      var warning = $(this).val();
      warningArray.push(warning);
    })
    var symptomsArray =[];
    $("input:checkbox[name=symptoms]:checked").each(function(){
     var symptoms= $(this).val();
     symptomsArray.push(symptoms);
    });
     var copingArray =[];
     $("input:checkbox[name=coping]:checked").each(function(){
      var coping= $(this).val();
      copingArray.push(coping);
    });
    if (symptomsArray.length || warningArray.length || copingArray.length){
      if (symptomsArray.length >= 4 && warningArray.length >= 6){
        $("span").append(" You are under too much stress.<br> Keep a positive attitude; rather than defaulting to negatives.<br>Get more sleep ");
      }else if(copingArray.length >=5 && warningArray.length >= 4){
        $("span").text("You're doing a pretty good job !! Keep it up");
      }else if(symptomsArray.length >=4||warningArray.length >=4){
        $("span").append("You are under light stress.<br>Get more sleep ");
      }else{
        $("span").text("Congrats!! You've a healthy lifestyle. Keep it up");
      }
    }else{
      alert("Please enter the information!");
    }
  });
});
