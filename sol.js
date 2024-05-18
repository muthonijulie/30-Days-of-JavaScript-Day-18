const debounce=function(fn,t){
    let timeoutId;

    return function(...args){
        clearTimeout(timeoutId);
        timeoutId=setTimeout(()=>{
            fn(...args)
        },t)

    };
};
const fn=(n)=>console.log(n)

//example1
// const func=debounce(fn,50);
// setTimeout(()=>{
//     func(1)
// },50);

// setTimeout(()=>{
//     func(2)
// },75);

//example2
// const func=debounce(fn,20);
// setTimeout(()=>{
//     func(1)
// },50);

// setTimeout(()=>{
//     func(2)
// },100);

//example3
const func=debounce(fn,150);
setTimeout(()=>{
    func([1,2])
},50);

setTimeout(()=>{
    func([3,4])
},300);
setTimeout(()=>{
    func([5,6])
},300);