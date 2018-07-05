questApp.controller('QuestionModulController',
    function QuestionModulController($scope, questionService){
      
        $scope.question=questionService.question;
      
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)