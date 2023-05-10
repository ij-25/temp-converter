let far = document.getElementsByClassName("user-input").innerHTML
let out = document.getElementById("out")
let temp1 = " "
console.log(far)
        function celsius (f)
    {
        temp1 = (f-32)/0.555;
        console.log(temp1)
    }
    // function farehiet (c)
    // {
    //     let temp2 = (c*1.8) + 32 ;
    // }
//     let string = "";
 let button = document.querySelector('.btn');
    button.addEventListener('click' , (e)=>{
        e.preventDefault ()
        console.log("hello" ,temp1)
        console.log(out)
         out.textContent = Math.round(temp1).toString()
     })
    console.log("yup",button)
        