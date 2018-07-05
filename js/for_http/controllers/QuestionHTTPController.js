// используем в контроллере QuestionController сервис $http
questApp.controller('QuestionHTTPController', 
    function QuestionHTTPController($scope, $http){
       $scope.loaded=false;
      // синтаксис использования сервиса $http:
      /*Для обращения к определенному ресурсу (в данном случае к файлу question.json) 
        сервис $http использует метод get, который выполняет GET-запрос протокола http. 
        Ресурсом необязательно должен выступать файл в формате json, это может быть и любой ресурс, 
        который передает клиенту объекты в формате json, например, веб-серсис на ASP.NET, скрипт на PHP, 
        Ruby и т.д.*/
        /*Далее идет функция then, в которую в качестве первого параметра передается функция, 
        которая срабатывает, если обращение к ресурсу прошло успешно - здесь мы берем из полученного 
        объекта data, который содержит весь вышеопределенный файл в формате json и выбираем в нем объект 
        верхнего уровня question. Затем этот объект передаем в представление.*/
        $scope.load = function (){
            $http({method: 'GET', url: 'question.json'}).
                then(function success(response) {
                    $scope.question=response.data.question;
                    $scope.loaded=true;
            });
        };           
      
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)