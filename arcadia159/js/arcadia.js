
$(document).ready(function(){


    $("h1").delay("1000").fadeIn();


    // hide #back-top first
    $("#back-top").hide();


    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
      
            }
        });


        // scroll body to 0px on click
        $('a#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 100);
            return false;
        });
    });


});


// Creditos fotos
/*$(".btn").click(function() {
  $(".myText").toggle();  
});*/

// OR

$(".credits_photo").click(function() {
  $(".myText").toggle();  
});

$(".credits_photo").click(function() {
  
   var lable = $(".credits_photo").text().trim();

   if(lable == "Hide") {
     $(".credits_photo span").text("Show");
     $(".credits_photo img").attr("src","img/btn_pop_more.svg");
     $(".myText").hide();
   }
   else {
     $(".credits_photo span").text("Hide");
     $(".credits_photo img").attr("src","img/btn_pop_less.svg");
     $(".myText").show();
   }
    
  });



  var x = document.getElementById("myAudio"); 
/*
function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 
*/

function toggle(el){
    if(el.className!="pause")
    {
        el.src='img/audio.svg';
        el.className="pause";
        x.pause(); 
    }
    else if(el.className=="pause")
    {
        el.src='img/sin-audio.svg';
        el.className="play";
        x.play(); 
    }
    
    return false;
};

