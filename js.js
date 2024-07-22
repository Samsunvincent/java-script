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


