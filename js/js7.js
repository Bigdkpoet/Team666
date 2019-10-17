



function over(){     

 var brand1 = document.getElementById("brand1");
 var cursor = document.getElementById("cursor");
 // $("#brand1").attr('src', 'img/cv.jpg');
 if (cursor.style.display = "none"){ cursor.style.display = "inline-block";}
 else{
       // document.getElementById("brand1").src = "img/cv.jpg";
     }




                // obj.style.background = "pink";

              }

              function out(){
               var cav = document.getElementById("cav");
               var cursor = document.getElementById("cursor");
               if (cursor.style.display = "inline-block"){ cursor.style.display = "none";}

             }


             $(document).bind('mousemove', function(e){
              $('#cursor').css({
                left: e.pageX + 5,
                top: e.pageY - 200
              });
            });



             $("#cav").hover(function(){
               $("#brand_1").attr("src","img/pro1.jpg");
             },function(){
              $("#brand_1").attr("src","img/pro1.jpg");
            });




             $("#con").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/src.png");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/src.png");

            });

             $("#hm").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/pro3.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/pro3jpg");

            });
             $("#tnf").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/pro4.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/pro4.jpg");

            });

             $("#ud").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/pro6.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/pro6.jpg");

            });
             $("#wp").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/pro7.png");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/pro7.png");

            });
              $("#vv").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/pro7.png");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/pro7.png");

            });




              
