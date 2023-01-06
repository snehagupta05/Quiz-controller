function populate(){
    if(quiz.isEnded()) {
        showScores();
    }
    else  {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
         var choices = quiz.getQuestionIndex().choices;
         for(var i = 0; i< choices.length; i++)
         {
               var element = document.getElementById("choice" + i);
               element.innerHTML = choices[i];
              guess("btn" + i,choices[i]);

         
         showProgress();
         }
    }

       
};

   function guess(id, guess){
        var button = document.getElementById(id);
        button.onclick = function() {
         quiz.guess(guess);
         populate();

      
        }
    
    };
      function showProgress() {
        var currentQuestionNumber = quiz.questionIndex + 1;
        var element = document.getElementById("progress");
        element.innerHTML = "Question" + currentQuestionNumber + "of" +  quiz.questions.length;
          

      }

     function showScores() {

         var gameOverHtml = "<h1>Result</h1>";
         gameOverHtml += "<h2 id ='score'>Your scores: " + quiz.score + "</h2>";        
         var element = document.getElementById("quiz");

          element.innerHTML = gameOverHtml;

    };


var questions = [
    new Question ("Javascript is an___language ?", ["Object-Oriented", "Object-Baesd", "Procedural","None of the above"],"Object-Oriented"),
    new Question ("How do we write a comment in javascript?", ["/* */", "//", "#","$$"],"//"),
    new Question ("which language is used for styling web page ?", ["HTML", "javascript", "CSS","XML"],"CSS"),
    new Question ("which of the following keywords is used to define a variable in Javascript ?", ["var", "let", "Both A and B","None of the above"],"Both A and B"),
    new Question ("which language is use for web apps ?", ["PHP", "Javascript", "python","All"],"ALl")
   

];

var quiz = new Quiz(questions);

populate();




  
