
var a = 1, b = 2, c = 3;

(function firstFunction(){ //parents
    var b = 5, c = 6;

    (function secondFunction(){ //child
        var b = 8;
        console.log("a: "+a+", b: "+b+", c: "+c);

        (function thirdFunction(){ //child 1
            var a = 7, c = 9;

            (function fourthFunction(){ //child 2
                var a = 1, c = 8;

            })();
        })();
    })();
})();

