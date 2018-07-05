questApp.controller('QuestionController', 
    function QuestionController($scope, dataService){
     /*Создаваемый сервис dataService будет передаваться в качестве 
     параметра в контроллер. А из контроллера данные будут 
     передаваться в представление.*/
        $scope.question=dataService.question;
     
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)