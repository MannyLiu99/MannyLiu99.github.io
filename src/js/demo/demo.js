var add = (function () {
    var counter = 0;
    console.log('11111::::' + counter);
    return function () {
        console.log('2222::::' + counter);
        var a = counter += 1;
        console.log('33333::::' + counter);
        console.log('44444::::' + a);
        return a;
    }
})();
console.log("aa:" + add);
console.log("typeof:" + typeof add);
function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
