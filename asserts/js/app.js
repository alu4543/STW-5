(function(exports){
    "use strict";

    var worker = new Worker('js/worker.js');

    exports.calculate = function() {
        var value = document.getElementById('original').value;
        worker.postMessage(value);
    }

    worker.addEventListener('message', function(e) {
    var data = e.data.split(" ");

    document.getElementById('converted').innerHTML = data[0]+" "+data[1];
    document.getElementById('converted2').innerHTML = data[2]+" "+data[3];

    }, false);

})(this);
