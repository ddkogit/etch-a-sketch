const container = document.getElementById("container");



const containerSize=500;

var pColor=251 ;

function reset(){
    location.reload();
   
}

const divSize=100;
const boxes=containerSize/divSize;

let insideDivArr=[];




function setBoxes(divSize=20,boxes=containerSize/divSize){




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
                pColor = pColor+1;
                insideDiv.style.backgroundColor="#"+(pColor);
            })
        })

    }

    const newSet = document.getElementById("newSet");

    newSet.addEventListener("click",ask=()=>{
        
       
        let divSize = Number.parseInt(prompt("enter a number less than 100"));
        while(divSize>=100){
            
            
            alert("Please enter number less than 100");
             divSize = Number.parseInt(prompt("enter a number less than 100"));
            
        }
        
      
        container.innerHTML = "";
        setBoxes(divSize);
    })

    setBoxes();
    
    
        const resetBtn = document.getElementById("reset");

        resetBtn.addEventListener("click",reset);

      
     