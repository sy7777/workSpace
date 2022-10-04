var fs = require('fs');
fs.readFile('./a.txt', 'utf8', function (err, data) {
    var le = data.length;
    var s = 0;
    var arr = [0];
    for(var i=0;i<le;i++){
        if(data[i] == '\n'){
           arr.push(i);
        }
    }
    // console.log(arr);
    var s = 0,e=1;

    function funs(){
        var str = data.slice(arr[s]+1,arr[e]);
        console.log(str);
        s = e;
        e = e+1;
        if(e>arr.length){
            clearInterval(clock)
        }
    }
    var clock = setInterval(funs,10);
})