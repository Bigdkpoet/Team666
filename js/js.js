




function myFunction(x) {
  x.classList.toggle("change");

}



//allowing global nav to scroll from the left to right

function myFunction1(){
 var element = document.getElementById("gnav");
 element.classList.toggle("js_open");
 var list = document.getElementById("list-body");
}




//allowing the navigation bar scroll up


//current page Y axises
var prevScrollpos = window.pageYOffset;

//when scroll
window.onscroll = function() {

  //let current y axis = to pagy Y axis
  var currentScrollPos = window.pageYOffset;

  //if larger than y axis
  if (prevScrollpos > currentScrollPos) {

    //fix
    document.getElementById("nav-container").style.top = "0";
  } else {

    //scroll to -100px (removing it from the top with animation)
    document.getElementById("nav-container").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}




//category button scrolling

function myFunction10(){

 var element = document.getElementById("featured");
 element.classList.toggle("js");
 console.log("");


}




//first product hovering function in order to toggle bewteen images when hovering

$("#card1").hover(function(){



               $("#card1 .product-card-image").css("opacity","0");
               $("#card1 .product-card-image2").css("opacity","1");
               $("#card1 .product-card-brand").css("opacity","0");
               $("#card1 .product-card-name").css("opacity","0");
               $("#card1 .product-price").css("opacity","1");

             },function(){

 
              $("#card1 .product-card-image").css("opacity","1");
              $("#card1 .product-card-image2").css("opacity","0");
              $("#card1 .product-card-brand").css("opacity","1");
              $("#card1 .product-card-name").css("opacity","1");
              $("#card1 .product-price").css("opacity","0");

              

            });


//second product hovering function in order to toggle bewteen images when hovering
$("#card2").hover(function(){

            
               $("#card2 .product-card-image").css("opacity","0");
               $("#card2 .product-card-image2").css("opacity","1");
               $("#card2 .product-card-brand").css("opacity","0");
               $("#card2 .product-card-name").css("opacity","0");
               $("#card2 .product-price").css("opacity","1");

             },function(){


              $(".product-card-image").css("opacity","1");
              $(".product-card-image2").css("opacity","0");
              $(".product-card-brand").css("opacity","1");
              $(".product-card-name").css("opacity","1");
              $(".product-price").css("opacity","0");

              

            });


//third product hovering function in order to toggle bewteen images when hovering
$("#card3").hover(function(){

               $("#card3 .product-card-image").css("opacity","0");
               $("#card3 .product-card-image2").css("opacity","1");
               $("#card3 .product-card-brand").css("opacity","0");
               $("#card3 .product-card-name").css("opacity","0");
               $("#card3 .product-price").css("opacity","1");

             },function(){


              $(".product-card-image").css("opacity","1");
              $(".product-card-image2").css("opacity","0");
              $(".product-card-brand").css("opacity","1");
              $(".product-card-name").css("opacity","1");
              $(".product-price").css("opacity","0");

              

            });

//fourth product hovering function in order to toggle bewteen images when hovering
$("#card4").hover(function(){

               $("#card4 .product-card-image").css("opacity","0");
               $("#card4 .product-card-image2").css("opacity","1");
               $("#card4 .product-card-brand").css("opacity","0");
               $("#card4 .product-card-name").css("opacity","0");
               $("#card4 .product-price").css("opacity","1");

             },function(){

              $(".product-card-image").css("opacity","1");
              $(".product-card-image2").css("opacity","0");
              $(".product-card-brand").css("opacity","1");
              $(".product-card-name").css("opacity","1");
              $(".product-price").css("opacity","0");

              

            });


//fifith product hovering function in order to toggle bewteen images when hovering
$("#card5").hover(function(){


               $("#card5 .product-card-image").css("opacity","0");
               $("#card5 .product-card-image2").css("opacity","1");
               $("#card5 .product-card-brand").css("opacity","0");
               $("#card5 .product-card-name").css("opacity","0");
               $("#card5 .product-price").css("opacity","1");

             },function(){

              $(".product-card-image").css("opacity","1");
              $(".product-card-image2").css("opacity","0");
              $(".product-card-brand").css("opacity","1");
              $(".product-card-name").css("opacity","1");
              $(".product-price").css("opacity","0");

              

            });


//sixth product hovering function in order to toggle bewteen images when hovering
$("#card6").hover(function(){

               $("#card6 .product-card-image").css("opacity","0");
               $("#card6 .product-card-image2").css("opacity","1");
               $("#card6 .product-card-brand").css("opacity","0");
               $("#card6 .product-card-name").css("opacity","0");
               $("#card6 .product-price").css("opacity","1");

 
             },function(){

             
              $(".product-card-image").css("opacity","1");
              $(".product-card-image2").css("opacity","0");
              $(".product-card-brand").css("opacity","1");
              $(".product-card-name").css("opacity","1");
              $(".product-price").css("opacity","0");

              

            });


//seventh product hovering function in order to toggle bewteen images when hovering
$("#card7").hover(function(){

               $("#card7 .product-card-image").css("opacity","0");
               $("#card7 .product-card-image2").css("opacity","1");
               $("#card7 .product-card-brand").css("opacity","0");
               $("#card7 .product-card-name").css("opacity","0");
               $("#card7 .product-price").css("opacity","1");

             },function(){

              $(".product-card-image").css("opacity","1");
              $(".product-card-image2").css("opacity","0");
              $(".product-card-brand").css("opacity","1");
              $(".product-card-name").css("opacity","1");
              $(".product-price").css("opacity","0");

              

            });



//eighth product hovering function in order to toggle bewteen images when hovering
$("#card8").hover(function(){

               $("#card8 .product-card-image").css("opacity","0");
               $("#card8 .product-card-image2").css("opacity","1");
               $("#card8 .product-card-brand").css("opacity","0");
               $("#card8 .product-card-name").css("opacity","0");
               $("#card8 .product-price").css("opacity","1");

             },function(){

              $(".product-card-image").css("opacity","1");
              $(".product-card-image2").css("opacity","0");
              $(".product-card-brand").css("opacity","1");
              $(".product-card-name").css("opacity","1");
              $(".product-price").css("opacity","0");

              

            });


//ninth product hovering function in order to toggle bewteen images when hovering
$("#card9").hover(function(){

               $("#card9 .product-card-image").css("opacity","0");
               $("#card9 .product-card-image2").css("opacity","1");
               $("#card9 .product-card-brand").css("opacity","0");
               $("#card9 .product-card-name").css("opacity","0");
               $("#card9 .product-price").css("opacity","1");

             },function(){

              $(".product-card-image").css("opacity","1");
              $(".product-card-image2").css("opacity","0");
              $(".product-card-brand").css("opacity","1");
              $(".product-card-name").css("opacity","1");
              $(".product-price").css("opacity","0");

              

            });








