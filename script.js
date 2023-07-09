
let str=''
let count=0
let counter=0
function clr()
{
    let var1=document.getElementById('number')
    var1.placeholder="0"
    str=''
    count=0
    counter=0
}
function stradd(symbol)
{
      let var2=document.getElementById('number')
    if(counter!=2)
    {
    if(var2.placeholder=='0')
    var2.placeholder=symbol
    else
    var2.placeholder=var2.placeholder+symbol;
    }
    else
        var2.placeholder=var2.placeholder

}
let opt=''
let opnd1
let opnd2
function operands(operat)
{
    let var3=document.getElementById('number')
    if(operat=='=')
    {
    calc(opnd1,opt)
    }
    else
    {
        opnd1=var3.placeholder
        opt=operat
        var3.placeholder=''
    }
}
function calc(op1,optr)
{
    let var4=document.getElementById('number')
     if(count!=1)
    {
    count=1
    let res
    opnd2=var4.placeholder
    switch(optr)
    {
        case '+':
            res=parseInt(op1)+parseInt(opnd2)
            break
        case '-':
            res=op1-opnd2
            break
        case '*':
            res=op1*opnd2
            break
        case '/':
            res=op1/opnd2
            res=res.toFixed(4)
            break
        case '%':
            res=op1%opnd2
            break
        default:
            var4.placeholder='ERROR'
    }
    str=str+opnd1+opt+opnd2+'='+res
        counter=2
    var4.placeholder=str
}
else
{
    var4.placeholder='ERROR'
}
}