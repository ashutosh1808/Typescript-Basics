function add(num1:number,num2:number,showResult:boolean,phrase)
{
    /* 
    if(typeof num1!=="number" || typeof num2!=="number")
    {
        throw new Error("invalid input")
    }
    */
    const res=num1+num2
    if(showResult)
    {
        console.log(phrase+res)
    }
    else
        return num1+num2;
}

const num1=5 //5.0
const num2=2.8

add(num1,num2,true,"res is=")