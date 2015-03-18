/*场景提示  有 a  b  c  三件事

 执行顺序为 a 循环一次执行一次b  然后再执行c
 b 和c 为异步执行

 代码如下
 */

//console.log(JSON.stringify(r)) ;
var async = require("async");

function b(callback) {
    //console.log(b) ;

    setTimeout(function () {
        callback('b1')
    }, 1000);

}


function c(callback) {
    //console.log(b) ;

    setTimeout(function () {
        callback('c1')
    }, 1000);

}
async.series({

    a: function (done) {
        async.each([1, 2, 3, 4], function (item) {
                console.log(item);

                b(function (e) {
                        console.log(e);
                        done();
                    }
                )
            }, function (retvalue) {

            }
        );
        done() ;
    },
    c: function (done) {
        c(function (e) {
                console.log(e);
                done();
            }
        )
    }


}, function (retValue) {


})
