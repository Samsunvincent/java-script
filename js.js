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
console.log('unsshifted array',arr)

// splice

arr.splice(1,3);
console.log('splice arrayu,'arr);

arr.splice('')
