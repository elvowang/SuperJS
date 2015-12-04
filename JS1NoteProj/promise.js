'use strict';

var promiseCount = 0;

function testPromise(){
    var thisPromiseCount = ++promiseCount;

    var result = document.getElementById('result');
    result.insertAdjacentHTML('beforeend', thisPromiseCount +') Started (<small>Sync code started</small>)<br/>');

    var p1 = new Promise(
        function(resolve, reject){
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');

            window.setTimeout(
                function(){
                    resolve(thisPromiseCount);
                }, Math.random()*2000+1000);
        }
    );

    p1.then(
        function(val){
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        }
    )
    .catch(
        function(reason){
            console.log('Handle rejected promise ('+reason+') here.');
        }
    );

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}

testPromise();