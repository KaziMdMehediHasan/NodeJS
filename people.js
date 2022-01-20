// (function(exports={}, require,module,__filename,__dirname){
        const people = ['sakib','tamim','mashrafe'];
        const a = 6;
        function test(){
            console.log("test");
        }

        console.log(module);
        module.exports ={ 
            people,
            a,
            test
        }
        // return module.exports;
// })