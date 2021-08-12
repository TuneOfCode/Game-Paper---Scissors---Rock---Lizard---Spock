    //   welcome
      $('.btn-triangle').click(function(){
          $('.triangle-container').show();
          $('.btn-triangle-pentagon').hide();
          $('.welcome').hide();
          $('.again').show();
          $('.ft').hide();
      })
      $('.btn-back').click(function(){
        $('.triangle-container').hide();
        $('.pentagon-container').hide();
        $('.btn-triangle-pentagon').show();
        $('.again').hide();
        $('.welcome').show();
        $('.ft').show();
      })

      $('.btn-pentagon').click(function(){
          $('.pentagon-container').show();
          $('.btn-triangle-pentagon').hide();
          $('.welcome').hide();
          $('.again').show();
          $('.ft').hide();
      })

    //   paper - scissors - rock - lizard - spock
    $('.paper-pentagon').click(function(){
        $('.game-pentagon').show()
        $('.paper-picked-pentagon').show();
        $('.rock-picked-pentagon').hide();
        $('.scissors-picked-pentagon').hide();
        $('.lizard-picked-pentagon').hide();
        $('.spock-picked-pentagon').hide();
        $('.content-pentagon').hide();
        house_random_pentagon();
        check_paper_pentagon();
      });
      $('.scissors-pentagon').click(function(){
        $('.game-pentagon').show()
        $('.scissors-picked-pentagon').show();
        $('.paper-picked-pentagon').hide();
        $('.rock-picked-pentagon').hide();
        $('.lizard-picked-pentagon').hide();
        $('.spock-picked-pentagon').hide();
        $('.content-pentagon').hide();
        house_random_pentagon();
        check_scissors_pentagon();
      });
      $('.rock-pentagon').click(function(){
        $('.game-pentagon').show()
        $('.rock-picked-pentagon').show();
        $('.paper-picked-pentagon').hide();
        $('.scissors-picked-pentagon').hide();
        $('.lizard-picked-pentagon').hide();
        $('.spock-picked-pentagon').hide();
        $('.content-pentagon').hide();
        house_random_pentagon();
        check_rock_pentagon();
      });
      $('.lizard-pentagon').click(function(){
        $('.game-pentagon').show()
        $('.rock-picked-pentagon').hide();
        $('.paper-picked-pentagon').hide();
        $('.scissors-picked-pentagon').hide();
        $('.lizard-picked-pentagon').show();
        $('.spock-picked-pentagon').hide();
        $('.content-pentagon').hide();
        house_random_pentagon();
        check_lizard_pentagon();
      })
      $('.spock-pentagon').click(function(){
        $('.game-pentagon').show()
        $('.rock-picked-pentagon').hide();
        $('.paper-picked-pentagon').hide();
        $('.scissors-picked-pentagon').hide();
        $('.lizard-picked-pentagon').hide();
        $('.spock-picked-pentagon').show();
        $('.content-pentagon').hide();
        house_random_pentagon();
        check_spock_pentagon();
      })
      
      $('.play-pentagon').click(function(){
        $('.game-pentagon').hide();
        $('.btn-replay-pentagon').hide();
        $('.house-paper-picked-pentagon').hide();
        $('.house-scissors-picked-pentagon').hide();
        $('.house-rock-picked-pentagon').hide();
        $('.house-lizard-picked-pentagon').hide();
        $('.house-spock-picked-pentagon').hide();
        $('.content-pentagon').show();
        reset_pentagon();
      })
      // var t = function action_show(){
      //   $('.house-' + action + '-picked').show();
      // }
      // setInterval(t, 2000);
  
      // $(function(){
      //   var play = function(){
      //     $('.btn-replay').show();
      //   };
      //   setInterval(play, 3000);
      // });
  
      function house_random_pentagon(){
        var x_pentagon = ['paper', 'scissors', 'rock', 'lizard', 'spock'];
        action_pentagon = x_pentagon[Math.floor(Math.random() * x_pentagon.length)];
        //action_show();
        //t;
        $('.house-' + action_pentagon + '-picked-pentagon').show();
        $('.btn-replay-pentagon').show();
        if (action_pentagon === 'paper'){
          $('.house-scissors-picked-pentagon').hide();
          $('.house-rock-picked-pentagon').hide();
          $('.house-lizard-picked-pentagon').hide();
          $('.house-spock-picked-pentagon').hide();
        } else if (action_pentagon === 'scissors'){
          $('.house-paper-picked-pentagon').hide();
          $('.house-rock-picked-pentagon').hide();
          $('.house-lizard-picked-pentagon').hide();
          $('.house-spock-picked-pentagon').hide();
        } else if (action_pentagon === 'rock'){
          $('.house-paper-picked-pentagon').hide();
          $('.house-scissors-picked-pentagon').hide();
          $('.house-lizard-picked-pentagon').hide();
          $('.house-spock-picked-pentagon').hide();
        } else if (action_pentagon === 'lizard'){
          $('.house-paper-picked-pentagon').hide();
          $('.house-rock-picked-pentagon').hide();
          $('.house-scissors-picked-pentagon').hide();
          $('.house-spock-picked-pentagon').hide();
        } else if (action_pentagon === 'spock'){
          $('.house-paper-picked-pentagon').hide();
          $('.house-rock-picked-pentagon').hide();
          $('.house-scissors-picked-pentagon').hide();
          $('.house-lizard-picked-pentagon').hide();
        }
        console.log(action_pentagon);
      }

      function check_paper_pentagon(){
        if (action_pentagon === 'paper'){
          $('.win-lose-pentagon').text('You Draw');
          count = count;
          $('.paper-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.paper-picked-pentagon img').css('animation-duration', '2s');
          $('.paper-picked-pentagon img').css('animation-iteration-count', 'infinite');

          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
          //total_score(count)
        } else if (action_pentagon === 'scissors' || action_pentagon === 'lizard'){
          $('.win-lose-pentagon').text('You Lose');
          count--;
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
          //total_score(count)
        }  else if (action_pentagon === 'rock' || action_pentagon === 'spock'){
          $('.win-lose-pentagon').text('You Win');
          count += 3;
          $('.paper-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.paper-picked-pentagon img').css('animation-duration', '2s');
          $('.paper-picked-pentagon img').css('animation-iteration-count', 'infinite');
          //total_score(count)
        } 
        console.log(count);
        total_score(count)
      }

      function check_scissors_pentagon(){
        if (action_pentagon === 'paper' || action_pentagon === 'lizard'){
          $('.win-lose-pentagon').text('You Win');
          count += 3;
          $('.scissors-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.scissors-picked-pentagon img').css('animation-duration', '2s');
          $('.scissors-picked-pentagon img').css('animation-iteration-count', 'infinite');
        } else if (action_pentagon === 'scissors'){
          $('.win-lose-pentagon').text('You Draw');
          count = count;
          $('.scissors-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.scissors-picked-pentagon img').css('animation-duration', '2s');
          $('.scissors-picked-pentagon img').css('animation-iteration-count', 'infinite');

          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
        }  else if (action_pentagon === 'rock' || action_pentagon === 'spock'){
          $('.win-lose-pentagon').text('You Lose');
          count--;
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
        } 
        console.log(count);
        total_score(count)
      }

      function check_rock_pentagon(){
        if (action_pentagon === 'paper' || action_pentagon === 'spock'){
          $('.win-lose-pentagon').text('You Lose');
          count--;
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
        } else if (action_pentagon === 'scissors' || action_pentagon === 'lizard'){
          $('.win-lose-pentagon').text('You Win');
          count += 3;
          $('.rock-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.rock-picked-pentagon img').css('animation-duration', '2s');
          $('.rock-picked-pentagon img').css('animation-iteration-count', 'infinite');
        }  else if (action_pentagon === 'rock'){
          $('.win-lose-pentagon').text('You Draw');
          count = count;
          $('.rock-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.rock-picked-pentagon img').css('animation-duration', '2s');
          $('.rock-picked-pentagon img').css('animation-iteration-count', 'infinite');

          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
        } 
        console.log(count);
        total_score(count)
      }

      function check_lizard_pentagon(){
        if (action_pentagon === 'scissors' || action_pentagon === 'rock'){
          $('.win-lose-pentagon').text('You Lose');
          count--;
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
        } else if (action_pentagon === 'paper' || action_pentagon === 'spock'){
          $('.win-lose-pentagon').text('You Win');
          count += 3;
          $('.lizard-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.lizard-picked-pentagon img').css('animation-duration', '2s');
          $('.lizard-picked-pentagon img').css('animation-iteration-count', 'infinite');
        }  else if (action_pentagon === 'lizard'){
          $('.win-lose-pentagon').text('You Draw');
          count = count;
          $('.lizard-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.lizard-picked-pentagon img').css('animation-duration', '2s');
          $('.lizard-picked-pentagon img').css('animation-iteration-count', 'infinite');

          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
        } 
        console.log(count);
        total_score(count)
      }

      function check_spock_pentagon(){
        if (action_pentagon === 'paper' || action_pentagon === 'lizard'){
          $('.win-lose-pentagon').text('You Lose');
          count--;
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
        } else if (action_pentagon === 'scissors' || action_pentagon === 'rock'){
          $('.win-lose-pentagon').text('You Win');
          count += 3;
          $('.spock-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.spock-picked-pentagon img').css('animation-duration', '2s');
          $('.spock-picked-pentagon img').css('animation-iteration-count', 'infinite');
        }  else if (action_pentagon === 'spock'){
          $('.win-lose-pentagon').text('You Draw');
          count = count;
          $('.spock-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.spock-picked-pentagon img').css('animation-duration', '2s');
          $('.spock-picked-pentagon img').css('animation-iteration-count', 'infinite');

          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-duration', '2s');
          $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-iteration-count', 'infinite');
        } 
        console.log(count);
        total_score(count)
      }


      var count = 0;
      function total_score(score){
        score = $('.numbers').html(count);
      }

      function reset_pentagon(){
        $('.house-' + action_pentagon + '-picked-pentagon img').css('animation-name', '');
        $('.paper-picked-pentagon img').css('animation-name', '');
        $('.scissors-picked-pentagon img').css('animation-name', '');
        $('.rock-picked-pentagon img').css('animation-name', '');
        $('.lizard-picked-pentagon img').css('animation-name', '');
        $('.spock-picked-pentagon img').css('animation-name', '');
      }

/* --------------------------------------------------------------------------------------------------------------------------- */

    //   Paper - Scissors - Rock
      $('.paper').click(function(){
        $('.game').show()
        $('.paper-picked').show();
        $('.rock-picked').hide();
        $('.scissors-picked').hide();
        $('.content').hide();
        house_random();
        check_paper();
      });
      $('.scissors').click(function(){
        $('.game').show()
        $('.scissors-picked').show();
        $('.paper-picked').hide();
        $('.rock-picked').hide();
        $('.content').hide();
        house_random();
        check_scissors();
      });
      $('.rock').click(function(){
        $('.game').show()
        $('.rock-picked').show();
        $('.paper-picked').hide();
        $('.scissors-picked').hide();
        $('.content').hide();
        house_random();
        check_rock();
      });
      
      $('.play').click(function(){
        $('.game').hide();
        $('.btn-replay').hide();
        $('.house-paper-picked').hide();
        $('.house-scissors-picked').hide();
        $('.content').show();
        reset();
      })
      // var t = function action_show(){
      //   $('.house-' + action + '-picked').show();
      // }
      // setInterval(t, 2000);
  
      // $(function(){
      //   var play = function(){
      //     $('.btn-replay').show();
      //   };
      //   setInterval(play, 3000);
      // });
  
      function house_random(){
        var x = ['paper', 'scissors', 'rock'];
        action = x[Math.floor(Math.random() * x.length)];
        //action_show();
        //t;
        $('.house-' + action + '-picked').show();
        $('.btn-replay').show();
        if (action === 'paper'){
          $('.house-scissors-picked').hide();
          $('.house-rock-picked').hide();
        } else if (action === 'scissors'){
          $('.house-paper-picked').hide();
          $('.house-rock-picked').hide();
        } else if (action === 'rock'){
          $('.house-paper-picked').hide();
          $('.house-scissors-picked').hide();
        }
        console.log(action);
      }

      function check_paper(){
        if (action === 'paper'){
          $('.win-lose').text('You Draw');
          count = count;
          $('.paper-picked img').css('animation-name', 'reSize,bgColor');
          $('.paper-picked img').css('animation-duration', '2s');
          $('.paper-picked img').css('animation-iteration-count', 'infinite');

          $('.house-' + action + '-picked img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action + '-picked img').css('animation-duration', '2s');
          $('.house-' + action + '-picked img').css('animation-iteration-count', 'infinite');
          //total_score(count)
        } else if (action === 'scissors'){
          $('.win-lose').text('You Lose');
          count--;
          $('.house-' + action + '-picked img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action + '-picked img').css('animation-duration', '2s');
          $('.house-' + action + '-picked img').css('animation-iteration-count', 'infinite');
          //total_score(count)
        }  else if (action === 'rock'){
          $('.win-lose').text('You Win');
          count += 3;
          $('.paper-picked img').css('animation-name', 'reSize,bgColor');
          $('.paper-picked img').css('animation-duration', '2s');
          $('.paper-picked img').css('animation-iteration-count', 'infinite');
          //total_score(count)
        } 
        console.log(count);
        total_score(count)
      }

      function check_scissors(){
        if (action === 'paper'){
          $('.win-lose').text('You Win');
          count += 3;
          $('.scissors-picked img').css('animation-name', 'reSize,bgColor');
          $('.scissors-picked img').css('animation-duration', '2s');
          $('.scissors-picked img').css('animation-iteration-count', 'infinite');
        } else if (action === 'scissors'){
          $('.win-lose').text('You Draw');
          count = count;
          $('.scissors-picked img').css('animation-name', 'reSize,bgColor');
          $('.scissors-picked img').css('animation-duration', '2s');
          $('.scissors-picked img').css('animation-iteration-count', 'infinite');

          $('.house-' + action + '-picked img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action + '-picked img').css('animation-duration', '2s');
          $('.house-' + action + '-picked img').css('animation-iteration-count', 'infinite');
        }  else if (action === 'rock'){
          $('.win-lose').text('You Lose');
          count--;
          $('.house-' + action + '-picked img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action + '-picked img').css('animation-duration', '2s');
          $('.house-' + action + '-picked img').css('animation-iteration-count', 'infinite');
        } 
        console.log(count);
        total_score(count)
      }

      function check_rock(){
        if (action === 'paper'){
          $('.win-lose').text('You Lose');
          count--;
          $('.house-' + action + '-picked img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action + '-picked img').css('animation-duration', '2s');
          $('.house-' + action + '-picked img').css('animation-iteration-count', 'infinite');
        } else if (action === 'scissors'){
          $('.win-lose').text('You Win');
          count += 3;
          $('.rock-picked img').css('animation-name', 'reSize,bgColor');
          $('.rock-picked img').css('animation-duration', '2s');
          $('.rock-picked img').css('animation-iteration-count', 'infinite');
        }  else if (action === 'rock'){
          $('.win-lose').text('You Draw');
          count = count;
          $('.rock-picked img').css('animation-name', 'reSize,bgColor');
          $('.rock-picked img').css('animation-duration', '2s');
          $('.rock-picked img').css('animation-iteration-count', 'infinite');

          $('.house-' + action + '-picked img').css('animation-name', 'reSize,bgColor');
          $('.house-' + action + '-picked img').css('animation-duration', '2s');
          $('.house-' + action + '-picked img').css('animation-iteration-count', 'infinite');
        } 
        console.log(count);
        total_score(count)
      }
      var count = 0;
      function total_score(score){
        score = $('.numbers').html(count);
      }

      function reset(){
        $('.house-' + action + '-picked img').css('animation-name', '');
        $('.paper-picked img').css('animation-name', '');
        $('.scissors-picked img').css('animation-name', '');
        $('.rock-picked img').css('animation-name', '');
      }