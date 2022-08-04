let lift=document.getElementById("lift")
let up=document.getElementById("up")
let down=document.getElementById("down")

let key0=document.getElementById("f0")
let key1=document.getElementById("f1")
let key2=document.getElementById("f2")
let key3=document.getElementById("f3")
let key4=document.getElementById("f4")
let key5=document.getElementById("f5")
let key6=document.getElementById("f6")
let key7=document.getElementById("f7")
let key8=document.getElementById("f8")
let key9=document.getElementById("f9")

let state=1


let lpos=0
let upArr=[]
let downArr=[]

function move(floor)
{
    
    // console.log(lpos)
    // console.log(floor)
    if(floor>lpos)
    {
        state=1

        upArr.push(floor)
        upArr.sort()
        let x=upArr[0]*10 +"%"
        console.log(upArr)
        upArr.shift()
        lift.style.bottom=x
        lpos=floor
        

    }
    else if(floor<lpos)
    {
       state=0
        downArr.push(floor)
        downArr.sort()
        let x=downArr[0]*10 +"%"
        console.log(downArr)
        downArr.shift()

        lift.style.bottom=x
        lpos=floor
        
    }

    
    

   
  
}






