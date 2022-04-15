    
    
    document.getElementById("buton").addEventListener("click", ()=>{ 
         let hacker1=document.getElementById("name1").value
         let hacker2=document.getElementById("name2").value                
         if(hacker1.length>hacker2.length){
                console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
            }else if(hacker1.length<hacker2.length){
                console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
            }else{
                console.log("Wow, you both have equally long names, XX characters!")
            }
         let arrayName1=[], arrayName2=[];
         for(i of hacker1){
            arrayName1.push(i)                    
          }
          console.log(`All characters of the driver's name, separated by a space and in uppercase  ${arrayName1.join(" ").toUpperCase()}`)             
          for(i of hacker2){                   
            arrayName2.push(i)
            }                
         console.log(`All characters of the navigator's name, in reverse order ${arrayName2.reverse().join("")}`)
         if(hacker1.localeCompare(hacker2) < 0){
            console.log("The driver's name goes first")
         }else if(hacker1.localeCompare(hacker2) > 0){
            console.log("Yo, the navigator goes first definitely")
         }else{
            console.log("What?! You both have the same name?")
         }
    }) 
           


