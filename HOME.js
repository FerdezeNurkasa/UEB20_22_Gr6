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
        "Your success and happiness lies in you. Resolve to keep happy, and you shall form an invincible host against difficulties.",
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
  

  

  $(document).ready(function () {  // toggles the game
    $(".game-content").hide();
    var playCount = 0;
    $("#play-btn").click(function () {
        playCount++;
        if (playCount % 2 != 0) {
            $("#play-btn").html("Collapse");
            $(".home-game h2").html("Find the word");
        }
        else {
            $("#play-btn").html("Let's play a game");
            $(".home-game h2").html("Did you get tired scrolling?");
        }
        $(".game-content").slideToggle(1000);
    })
  })
  
  const boxElements = document.querySelectorAll(".box");
  
  // add event listeners
  boxElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    elem.addEventListener("dragend", dragEnd);
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
  
    // Drag and Drop Functions
  
    function dragStart(event) {
        event.target.classList.add("drag-start");
        event.dataTransfer.setData("text", event.target.id);
    }
  
    function dragEnd(event) {
        event.target.classList.remove("drag-start");
    }
  
    function dragEnter(event) {
          event.preventDefault();
          event.target.classList.add("drag-over");
    }
  
    function dragOver(event) {
        event.preventDefault();
    }
  
    function dragLeave(event) {
        event.target.classList.remove("drag-enter");
    }
  
    var word = "";
  
    function drop(event) {
        event.preventDefault();
        event.target.classList.remove("drag-enter");
        const draggableElementId = event.dataTransfer.getData("text");
        const droppableElementId = event.target.id;
        if (draggableElementId !== droppableElementId) {
            const draggableElement = document.getElementById(draggableElementId);
            const droppableElementBgColor = event.target.style.backgroundColor;
            const droppableElementTextContent = event.target.querySelector("span").textContent;
  
            event.target.style.backgroundColor = draggableElement.style.backgroundColor;
            event.target.querySelector("span").textContent = draggableElement.querySelector("span").textContent;
            event.target.id = draggableElementId;
            draggableElement.style.backgroundColor = droppableElementBgColor;
            draggableElement.querySelector("span").textContent = droppableElementTextContent;
            draggableElement.id = droppableElementId;
  
            // get the word created by the user
            $(".box > .letter").each(function () {
                word += $(this).text();
            })
            console.log(word);
  
            // check if the word is correct
            if (word === "HOPE") {
                $(".box").addClass("correct");
                word = "";
            }
            else {
                $(".box").removeClass("correct");
                word = "";
            }
        }
    }
  });
  