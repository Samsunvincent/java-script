let str = "   hello world"

let strlength = str.length;
console.log('length', strlength);
console.log('toupper case',str.toUpperCase());
console.log('to lowercase',str.toLowerCase());
console.log('starts with',str.startsWith('h'));
console.log('ends with' , str.endsWith('d'))
console.log('chaining string',str.toUpperCase().toLowerCase().toUpperCase());

let lefttrimmedvalue = str.trimStart();
console.log('trimmed value', lefttrimmedvalue);
console.log('trimmed value length',lefttrimmedvalue.length);

// let righttrimmedvalue = str.trimEnd();
// console

// array

let arr = [10,20,30,40,50];
console.log('arr',arr)
console.log("typeof=",typeof arr)
console.log("array-length",arr.length);


console.log('arr[4]',arr[3]);

arr[0] = 50;
console.log('value changed ',arr);

arr.push('last');
console.log('array pushed', arr);
arr.unshift('first');
console.log('unshift',arr)

// pop
arr.pop();
console.log('poped array',arr);
arr.shift();
console.log('unsshifted array',arr);

// splice





// loop
for(let i = 0; i < 10; i++) {
    console.log('hello world');
}

let i = 0;
while(i<10){
    console.log('hi sajan');
    i++
}

{

let str = '';
for(let i = 0; i<10; i++){
    for(let j = 0; j<i; j++){
        str = str + "*";
    }
    // console.log(str)
}
}



// functions

{
    // Named functions
    function func1(){
        var sum;
        sum=10+20;
        console.log(sum)
    }
    func1();
}

{
    // Anonymous function
    

     let func2 = function(){
        console.log('this is anonymous function',)
        
    }
    func2();
}

{
    // arrow function

    const fun3=()=>{
        console.log('this is arrow function')
    }
    fun3();
}

{

    // function with arguments and parameters
 function func4 (a,b,c){
    console.log('a  :',a);
    console.log('b :',b)
    console.log('c :',c)


}
func4(10,20,30);
}



// call by value

{
    let a = 10;
    console.log(a)
    function updateValue(a){
        a=20;
        console.log(a)
        
    }
    updateValue(a);
    console.log(a)
}


// function by value
{
let arr = ['1','2','3','4'];
function updatedValue1(arr){
    arr[0]=100;

}
updatedValue1(arr);
console.log(arr)
}


//closure
{
    console.log('\n\n\n')


    function outerFunction(){
        let outerVariable = "outer function";
        
        function innerFunction(){
            
            function innerFunction1(){
                console.log(outerVariable);
            }
            return innerFunction1;

        }
       return innerFunction;
    }
    let result=outerFunction();
    let result1=result();
    result1();
}


{
    setTimeout( function(){
        console.log('this is set time out')
    },5000)
    function putzero(value){
        if(value<10){
            console.log('0')
        }
        else{
            console.log(value)
        }
    }
    let dt = new Date();
    console.log('date',dt);
    let hour = dt.getHours();
    console.log('hour',hour);
    let ampm ;
    if(hour<12){
       console.log('am');
    
}
else{
    console.log('pm');
}

let time = document.getElementById('time')
console.log('time',time)

time.innerHTML = putzero
}

// event handling
{
    let btn = document.getElementById('btn');
    console.log(btn);
    
    btn.addEventListener('click',function(){
        console.log('button clicked');
      
    })

    btn.addEventListener('mouseover',function(){
        console.log("mouseover fired");
    })


    btn.addEventListener('mouseout',function(){
        console.log('mouse out fired');

    })

    btn.addEventListener('keypress',function(){
        console.log('key press fired');
    })

    btn.addEventListener('keydown',function(){
        console.log('key down fired ...');
    })

    btn.addEventListener('keyup',function(){
        console.log('key up fired ...');
    })

    btn.addEventListener('mousedown',function(){
        console.log('mouse down fired');
    })

    btn.addEventListener('mouseup',function(){
        console.log('mouse up fired');
        
    })
}

