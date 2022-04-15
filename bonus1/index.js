function textLore(){
    let paragraphs=document.querySelector("p").innerHTML
    let searchWord=document.querySelector("input").value
    let paragraphsOnlyWords=paragraphs.replace(/[.";:,]/g,"").trim()
    let paragraphsWords=[];
    paragraphsWords.push(paragraphsOnlyWords.toLowerCase().split(" "))
    let u=0;
    for (i=0;i<paragraphsWords[0].length;i++){
        if(paragraphsWords[0][i]===searchWord.toLocaleLowerCase()){
            u++     
        }
    } 
    console.log(`This text contains ${i} words`)
    console.log(`The word "${searchWord}" is repeated ${u} times`)
}


