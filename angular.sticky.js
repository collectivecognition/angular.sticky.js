angular.module("sticky", []).
    directive("sticky", ["$timeout", function($timeout){
        return {
            link: function(scope, el, attr, ngModelCtrl){
                var w = angular.element(window);

                $timeout(function(){
                    scope.originalOffsetTop = el.offset().top;
                    scope.originalTop = el.css("top");
                    scope.originalPosition = el.css("position");

                    w.on("scroll", function(e){
                        if(w.scrollTop() > scope.originalOffsetTop){
                            el.css("position", "relative");
                            el.css("top", w.scrollTop() - scope.originalOffsetTop);
                            el.addClass("sticky");
                        }else{
                            el.css("top", scope.originalTop);
                            el.css("position", scope.originalPosition);
                            el.removeClass("sticky");
                        }
                    });
                }, 0);
            }
        };
     }]);