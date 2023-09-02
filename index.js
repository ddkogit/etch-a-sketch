const container = document.getElementById("container");



const containerSize=500;

var pColor=211 ;
var addedColor=1;
function reset(){
    location.reload();
   
}

var divSize=50;
var boxes=containerSize/divSize;

let insideDivArr=[];




function setBoxes(divSize=20,boxes=25,pColor=255,addedColor=1){
    
for(let i=1;i<=boxes;i++){
    

    const row = document.createElement("div");
    row.classList.add("row");

        for(j=1;j<=boxes;j++){
        
        
            const insideDiv = document.createElement("div");
            insideDiv.style.width=`${divSize}px`;
            insideDiv.style.height=`${divSize}px`;
            
            
            insideDiv.classList.add("insideDiv");
            row.appendChild(insideDiv);
         
            
            insideDivArr.push(insideDiv);
        }

        container.append(row);
            
        }  
             
    
        insideDivArr.forEach((insideDiv)=>{

            insideDiv.addEventListener("mouseenter",()=>{
                pColor+=addedColor;
                insideDiv.style.backgroundColor="#"+(pColor);
            })
        })

    }

    const newSet = document.getElementById("newSet");

    newSet.addEventListener("click",ask=()=>{
        
       
        let divSize = Number.parseInt(prompt("enter the size of brush less than 100"));
        while(divSize>=100){
            
            
            alert("Please enter number less than 100");
             divSize = Number.parseInt(prompt("enter a number less than 100"));
            
        }
        
      
        container.innerHTML = "";
      
        setBoxes(divSize,containerSize/divSize);
    })

    setBoxes();
    
    
        const resetBtn = document.getElementById("reset");

        resetBtn.addEventListener("click",reset);


        const bnw = document.getElementById("bnw");

        bnw.addEventListener("click",()=>{
            container.innerHTML="";
            divSize=ask();
            setBoxes(divSize,containerSize/divSize,111,0);
        });
           
        const color = document.getElementById("color");

        color.addEventListener("click",()=>{
            container.innerHTML="";
            divSize=ask();
            setBoxes(divSize,containerSize/divSize);
        }); 
           
            
    
      
     