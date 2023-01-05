$(document).ready(function () {
    const quoteSource = [
      {
        quote:
          "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        name: "Francis of Assisi"
      },
      {
        quote: 
        "When everyone else says you can’t, determination says, YES YOU CAN.",
        name: "Robert M. Hensel"
      },
      {
        quote: 
        "Your present circumstances don't determine where you can go; they merely determine where you start.",
        name: "Nido Qubein"
      },
      {
        quote:
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        name: "Thomas A. Edison"
      },
      {
        quote:
        "If you're going through hell, keep going.Because as they say, there's always light at the end of the tunnel!",
        name: "Winston Churchill"
      },
      {
        quote: 
        "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles..",
        name: "Christopher Reeve"
      },
      {
        quote:
        "A new challenge keeps the brain kicking and the heart ticking..",
        name: "E. A. Bucchianeri"
      },
      {
        quote:
        "Disability is a matter of perception. If you can do just one thing well, you’re needed by someone.",
        name: "Martina Navratilova"
      },
      {
        quote: 
        "EStart by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible.",
        name: "Francis of Assisi"
      },
      {
        quote: 
        "Start where you are. Use what you have. Do what you can.",
        name: "Arthur Ashe"
      },
      {
        quote:
        "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        name: "Samuel Beckett"
      },
      {
        quote: 
        "Be yourself; everyone else is already taken.",
        name: "Oscar Wilde"
      },
      {
        quote:
          "Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.",
        name: "Helen Keller"
      },
      {
        quote:
          "Always remember that you are absolutely unique. Just like everyone else.",
        name: "Margaret Mead"
      },
      {
        quote:
          "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.",
        name: "Jimmy Dean"
      },
      {
        quote:
          "Believe you can and you’re halfway there.",
        name: "Theodore Roosevelt"
      },
      {
        quote: 
        "Keep your face always toward the sunshine – and shadows will fall behind you.",
        name: "Walt Whitman"
      },
      {
        quote: 
        "Hard things are put in our way, not to stop us, but to call out our courage and strength.",
        name: "Mark Twain"
      },
      {
        quote: 
        "No disability or dictionary out there is capable of clearly defining who we are as a person.",
        name: "Robert M Hensel"
      },
      {
        quote:
          "My disability has opened my eyes to see my true abilities.",
        name: "Robert M. Hensel"
      },
      {
        quote: "There are a plan and a purpose, a value to every life, no matter what its location, age, gender or disability.",
        name: "Sharron Angle"
      },
      {
        quote: "Always do whatever's next.",
        name: "George Carlin"
      },
      {
        quote: "Once we accept our limits, we go beyond them.",
        name: "Albert Einstein"
      },
      {
        quote:
          "Hapiness is not something ready made. It comes from your own actions.",
        name: "Dalai Lama"
      }
    ];
  
    $("#quoteButton").click(function (evt) {
      //define the containers of the info we target
      var quote = $("#quoteContainer p").text();
      var quoteGenius = $("#quoteGenius").text();
      //prevent browser's default action
      evt.preventDefault();
      //getting a new random number to attach to a quote and setting a limit
      var sourceLength = quoteSource.length;
      var randomNumber = Math.floor(Math.random() * sourceLength);
      //set a new quote
      for (i = 0; i <= sourceLength; i += 1) {
        var newQuoteText = quoteSource[randomNumber].quote;
        var newQuoteGenius = quoteSource[randomNumber].name;
        //console.log(newQuoteText,newQuoteGenius);
        var timeAnimation = 500;
        var quoteContainer = $("#quoteContainer");
        //fade out animation with callback
        quoteContainer.fadeOut(timeAnimation, function () {
          quoteContainer.html("");
          quoteContainer.append(
            "<p>" +
              newQuoteText +
              "</p>" +
              '<p id="quoteGenius">' +
              "-								" +
              newQuoteGenius +
              "</p>"
          );
          //fadein animation.
          quoteContainer.fadeIn(timeAnimation);
        });
  
        break;
      } //end for loop
    }); //end quoteButton function
  }); //end document ready
  