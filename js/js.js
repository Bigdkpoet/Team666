


$(".easteregg").toggle(
     function(){
        balls();
    },
     function(){
        balls();
});



      function balls(){
        
            // Some random colors
            const colors = ["#E2E2E2", "#c49e78"];

            const numBalls = 20;
            const balls = [];

            for (let i = 0; i < numBalls; i++) {
              let ball = document.createElement("div");
              ball.classList.add("ball");
              ball.style.background = colors[Math.floor(Math.random() * colors.length)];
              ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
              ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
              ball.style.transform = `scale(${Math.random()})`;
              ball.style.width = `${Math.random() * 5}em`;
              ball.style.height = ball.style.width;
              balls.push(ball);
              document.body.append(ball);
            }

            // Keyframes
            balls.forEach((el, i, ra) => {
              let to = {
                x: Math.random() * (i % 2 === 0 ? -11 : 11),
                y: Math.random() * 50
              };

              let anim = el.animate(
                [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}rem, ${to.y}rem)` }
                ],
                {
                  duration: (Math.random() + 2) * 2000, // random duration
                  direction: "alternate",
                  fill: "both",
                  iterations: Infinity,
                  easing: "ease-out"
                }
                );
            });



          }


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



          $("#card3").hover(function(){

               // $("#product1").attr("src","img/human.jpg");
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


          $("#basket-preview1").hover(
            function(){
              $("#basket-preview1").css({ fill: "#000" });
            },
            function(){
              $("#basket-preview1").css({ fill: "#A09F9F" });
            });


            //toggle between main menu

            function TextEle(){
             var element = document.getElementById("text_elements");
             var element2 = document.getElementById("combined_elements");
             var element3 = document.getElementById("citations");
             var element4 = document.getElementById("idea2");
             var element5 = document.getElementById("interactive_elements");
             element.style.display="inline-block";
             element5.style.display="none";
             element2.style.display="none";
             element3.style.display="none";
             element4.style.display="none";
           }


           function IntEle(){
             var element = document.getElementById("text_elements");
             var element2 = document.getElementById("combined_elements");
             var element3 = document.getElementById("citations");
             var element4 = document.getElementById("idea2");
             var element5 = document.getElementById("interactive_elements");
             element5.style.display="inline-block";
             element.style.display="none";
             element2.style.display="none";
             element3.style.display="none";
             element4.style.display="none";
           }

           function ComEle(){
             var element = document.getElementById("text_elements");
             var element2 = document.getElementById("combined_elements");
             var element3 = document.getElementById("citations");
             var element4 = document.getElementById("idea2");
             var element5 = document.getElementById("interactive_elements");
             element2.style.display="inline-block";
             element.style.display="none";
             element5.style.display="none";
             element3.style.display="none";
             element4.style.display="none";
           }


           function ArtDir(){
             var element = document.getElementById("text_elements");
             var element2 = document.getElementById("combined_elements");
             var element3 = document.getElementById("citations");
             var element4 = document.getElementById("idea2");
             var element5 = document.getElementById("interactive_elements");
             element4.style.display="inline-block";
             element.style.display="none";
             element5.style.display="none";
             element3.style.display="none";
             element2.style.display="none";
           }
