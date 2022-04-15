document.getElementById("inp").addEventListener("keyup", e=>{ 
text=document.querySelector("input").value
e.target.value
let wordReverse=[]
let wordString;
   if(e.keyCode===13){
        let leng=text.length       
        for(i=leng-1;i>=0;i--)        
        wordReverse.push(text[i])
        let wordsCompare=wordReverse.toString(",").replace(/[, ]/g,"").toLowerCase()
        let wordsCompare2=text.replace(/ /g,"").toLowerCase()
        console.log(wordsCompare,wordsCompare2)
        wordsCompare===wordsCompare2?console.log("The texts are the same¡¡")
        :
        console.log(`The texts are not the same`)
   }
})
