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

/*模块1*/
console.log(document.querySelectorAll('div'));//[object NodeList]
console.log(document.querySelectorAll('div').constructor);//function NodeList() { [native code] }
console.log(NaN == NaN);//false
console.log('123abc' - '123');//NaN

/*模块2*/
console.log('promise setTimeout start------');
setTimeout(() => {
   console.log(4)
},0);
new Promise( resolve => {
 console.log(1);
 let i = 0;
 while (i++ < 1e4){

 }
 resolve();
 console.log(2);
}).then(() => {
    console.log(5);
});
console.log(3);
//输出结果顺序：1 2 3 5 4
console.log()

/*工厂模式开始-------*/
/*简单工厂模式 */
let Fruit = function (name) {
    function Apple() {
        this.name = 'apple';
        this.color = 'red';
        console.log('this is an apple!')
    }
    function Banana() {
        this.name = 'banana';
        this.color = 'yellow';
        console.log('this is a banana!')
    }
    switch (name){
        case 'apple': return new Apple(); break;
        case 'banana': return new Banana(); break;
        default: throw new Error('参数为水果名字，如apple');
    }
};
let apple = Fruit('apple');
let banana = Fruit('banana');
// let ab = Fruit('bb');

/*工厂方法 */
let Fruit1 = function (name){
    function CreateFruit(fruit) {
        this.name = fruit.name;
        this.color = fruit.color;
        console.log(`this is a ${fruit.name}!`);
    }
    switch(name){
        case 'apple': return new CreateFruit({name:'apple',color:'red'});break;
        case 'banana': return new CreateFruit({name: 'banana', color: 'yellow'});break;
        default: throw new Error('参数错误：参数为水果名，如apple')
    }
}
let apple1 = Fruit1('apple');
let banana1 = Fruit1('banana');

/*抽象工厂*/

/*ES6中的工厂*/
/*ES6中的简单工厂*/
class Fruit3{
    //构造器
    constructor(opt){
        this.name = opt.name;
        this.color = opt.color;
        console.log(`this is a ${opt.name}!`);
    }
    static getInstance(fruitName){
        switch (fruitName){
            case 'apple': return new Fruit3({name:'apple',color:'red'});break;
            case 'banana': return new Fruit3({name:'banana', color:'yellow'});break;
            default: throw new Error('参数错误：参数为水果名，如apple');
        }
    }
}
let apple3 = Fruit3.getInstance('apple');

/*工厂模式结束-------*/