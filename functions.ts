// type Combinable=number|string; //alias
// type Convertable='as-number'|'as-text'

// function combine(input1:Combinable,input2:Combinable, printConversion:Convertable)
// {
//     let res
//     if(typeof input1==="number" && typeof input2==="number" || printConversion==="as-number")
//     {
//         res=+input1 + +input2 // guaranteed to be a no
//     }else{
//         res=input1.toString()+input2.toString()
//     }
//     return res;
//     // }if(printConversion==='as-number'){
//     //     return parseFloat(res)
//     // }
// }

// const combinedAges=combine(20,30,'as-number')
// console.log(combinedAges)

// const combinedNos=combine('20','30','as-number')
// console.log(combinedNos)


// const combinedNames=combine("Ashu","tosh",'as-text')
// console.log(combinedNames)

function add(n1:number,n2:number)
{
    return n1+n2;
}

// function printResult(num:number):void ==> return stmt not required
function printResult(num:number):undefined
{
    console.log('result: ',num)
    return;
}

function addAndHandle(a:number,b:number,cb:(num:number)=>void){
    const result=a+b
    cb(result)
}

//callback functions can return something even if it's void

printResult(add(5,12))

let combineValues : (a:number,b:number) => number;

combineValues=add;
// combineValues=5;
console.log(combineValues(8,8))

addAndHandle(20,40,(result)=>{
    console.log(result)
})