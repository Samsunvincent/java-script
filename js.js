let str = "   hello world"

let strlength = str.length;
console.log('length', strlength);
console.log('toupper case', str.toUpperCase());
console.log('to lowercase', str.toLowerCase());
console.log('starts with', str.startsWith('h'));
console.log('ends with', str.endsWith('d'))
console.log('chaining string', str.toUpperCase().toLowerCase().toUpperCase());

let lefttrimmedvalue = str.trimStart();
console.log('trimmed value', lefttrimmedvalue);
console.log('trimmed value length', lefttrimmedvalue.length);

// let righttrimmedvalue = str.trimEnd();
// console

// array

let arr = [10, 20, 30, 40, 50];
console.log('arr', arr)
console.log("typeof=", typeof arr)
console.log("array-length", arr.length);


console.log('arr[4]', arr[3]);

arr[0] = 50;
console.log('value changed ', arr);

arr.push('last');
console.log('array pushed', arr);
arr.unshift('first');
console.log('unshift', arr)

// pop
arr.pop();
console.log('poped array', arr);
arr.shift();
console.log('unsshifted array', arr);

// splice





// loop
for (let i = 0; i < 10; i++) {
    console.log('hello world');
}

let i = 0;
while (i < 10) {
    console.log('hi sajan');
    i++
}

{

    let str = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            str = str + "*";
        }
        // console.log(str)
    }
}



// functions

{
    // Named functions
    function func1() {
        var sum;
        sum = 10 + 20;
        console.log(sum)
    }
    func1();
}

{
    // Anonymous function


    let func2 = function () {
        console.log('this is anonymous function',)

    }
    func2();
}

{
    // arrow function

    const fun3 = () => {
        console.log('this is arrow function')
    }
    fun3();
}

{

    // function with arguments and parameters
    function func4(a, b, c) {
        console.log('a  :', a);
        console.log('b :', b)
        console.log('c :', c)


    }
    func4(10, 20, 30);
}



// call by value

{
    let a = 10;
    console.log(a)
    function updateValue(a) {
        a = 20;
        console.log(a)

    }
    updateValue(a);
    console.log(a)
}


// function by value
{
    let arr = ['1', '2', '3', '4'];
    function updatedValue1(arr) {
        arr[0] = 100;

    }
    updatedValue1(arr);
    console.log(arr)
}


//closure
{
    console.log('\n\n\n')


    function outerFunction() {
        let outerVariable = "outer function";

        function innerFunction() {

            function innerFunction1() {
                console.log(outerVariable);
            }
            return innerFunction1;

        }
        return innerFunction;
    }
    let result = outerFunction();
    let result1 = result();
    result1();
}


// {
//     // setTimeout( function(){
//     //     console.log('this is set time out')
//     // },5000)
//     function putzero(value) {
//         if (value < 10) {
//             console.log('0')
//         }
//         else {
//             console.log(value)
//         }
//     }
//     let dt = new Date();
//     console.log('date', dt);
//     let hour = dt.getHours();
//     console.log('hour', hour);
//     let ampm;
//     if (hour < 12) {
//         console.log('am');

//     }
//     else {
//         console.log('pm');
//     }

//     let time = document.getElementById('time')
//     console.log('time', time)

//     time.innerHTML = putzero
// }

// event handling
// {
//     let btn = document.getElementById('btn');
//     console.log(btn);

//     btn.addEventListener('click',function(){
//         console.log('button clicked');

//     })

//     btn.addEventListener('mouseover',function(){
//         console.log("mouseover fired");
//     })


//     btn.addEventListener('mouseout',function(){
//         console.log('mouse out fired');

//     })

//     btn.addEventListener('keypress',function(){
//         console.log('key press fired');
//     })

//     btn.addEventListener('keydown',function(){
//         console.log('key down fired ...');
//     })

//     btn.addEventListener('keyup',function(){
//         console.log('key up fired ...');
//     })

//     btn.addEventListener('mousedown',function(){
//         console.log('mouse down fired');
//     })

//     btn.addEventListener('mouseup',function(){
//         console.log('mouse up fired');

//     })
// }

// inheritance
{
    class Animal {
        name;
        constructor(name) {
            this.name = name
        }
        walking() {
            console.log(`${this.name}`);
        }
    }
    class Dog extends Animal {
        age;
        constructor(name, age) {
            super(name)
            this.age = age
        }
        walking() {
            console.log(`${this.name}${this.age}`)
        }

    }
    let dog1 = new Dog('sajan ', '18')
    dog1.walking();
    let cat = new Animal('sajan');
    // cat.walking();
}


// setter and getter
{
    class Car {
        name;
        condition;
        info() {
            console.log(`${this.name} is running,${this.condition}`);
        }
        set Condition(condition) {
            this.condition = condition;
        }
        get Condition() {
            return this.condition;
        }
    }
    let obj1 = new Car(`ashik`);
    obj1.info();
    obj1.condition = "good condition";
    obj1.info();

}


{
    class Button {
        button;
        constructor(content) {
            this.button = document.createElement('button');
            this.button.innerHTML = content;
            document.body.appendChild(this.button);
        }

        set width(width) {
            this.button.style.width = width + "px";

        }
        set height(height) {
            this.button.style.height = height + "px"

        }
        onClick(fn) {
            this.button.onclick = fn
        }

    }
    let button1 = new Button('click')
    console.log(button1)
    button1.width = 100;
    button1.height = 100;
    button1.onClick(function () {
        console.log("button clicked")
    })
    class BlackButton extends Button {

        constructor(content) {
            super(content);
            this.button.style.background = "black"
            this.button.style.color = "white";


        }
        onClick(fn) {
            this.button.onclick = function () {
                console.log('this', this);
                console.log('this.button', this.button)
                this.button.style.padding = 10 + "px";
                fn();
            }.bind(this);
        }


    }
    
    let blackbutton = new BlackButton("Don't click");
    blackbutton.onClick(function () {
        console.log('black button clicked');
    })


}


{
    // text task

    class Paragraph {
        text;
        constructor(content) {
            this.text = document.createElement('p');
            this.text.innerHTML = content;
            document.body.appendChild(this.text);
        }
        set font(fontSize){
            this.text.style.fontSize = fontSize + "px"
        }
       
        onClick(fn){
            this.text.onclick = fn;
        }
        onMouse(fn) {
            this.text.onmouseover = fn;
        }

    }
    
    let text1 = new Paragraph("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus rem maxime placeat modi nulla earum fuga corporis distinctio illum odio tempore perferendis qui, alias voluptatum nobis unde ipsum porro iste quaerat magnam? Tempora ipsa quos repellendus qui dolores iure alias odio, maiores ratione delectus deserunt dignissimos veniam nostrum ab? Beatae suscipit aut cumque cupiditate assumenda quia delectus nisi pariatur recusandae reprehenderit. Rem sit facilis fuga delectus. Nobis incidunt id itaque accusantium porro, libero asperiores, dicta magni similique velit voluptates! Id repudiandae ipsam vero minima in saepe sed? Quo, voluptas dolore fuga voluptates magnam perspiciatis deleniti, atque ullam sit iure nulla!");
  
    

    text1.onClick(function(){
        console.log("text clicked")
        this.style.background = "black"
        this.style.color = "white"
        text1.font = 25;
    })
    text1.onMouse(function(){
        this.style.background = "red";
    })
    

    class paragraph1 extends Paragraph{
        constructor(content){
            super(content)
            
        }
    }


}

// Asynchronous operation
// callstack
// event loop
// callback Queue
// microtask queue
// web space environment



console.log('\n\n\n\n\n\n\n\n')
// call back queue request
{
    let xhr = new XMLHttpRequest();
    console.log('xhr',xhr);
    xhr.open('get','https://jsonplaceholder.typicode.com/users');
    document.getElementById('btn').onclick = function(){
        xhr.send();

    }
    xhr.onreadystatechange = function(){
        console.log("ready state :  ",xhr.readyState);
        if(xhr.readyState === 4){
            console.log('status',xhr.status)
           if(xhr.status === 200){
            let response = xhr.response;
            console.log('response : ',response)
            console.log('type of response : ',typeof(response));


            let datas = JSON.parse(response);
            console.log('datas : ',datas)

            let datacontainer = document.getElementById('data-container');
            console.log('data container',datacontainer);

            let rows = '';
            for(let i = 0;i < datas.length;i++){
                rows = row + `
                <tr>
                <td>${datas[i].name}</td>
                <td>${datas[i].username}</td>
                <td>${data}
                `
            }
           }
        }
    }
}

