const container = document.getElementById("container");

console.log(container);



let insideDivArr=[];

for(let i=1;i<=10;i++){

    const row = document.createElement("div");
    row.classList.add("row");

        for(j=1;j<=10;j++){

            
            const insideDiv = document.createElement("div");
            
            insideDiv.classList.add("insideDiv");
            row.appendChild(insideDiv);
            console.log(insideDiv);
            
            insideDivArr.push(insideDiv);
        }

        container.append(row);
            
        }  
        
       
        insideDivArr.forEach((insideDiv)=>{
            insideDiv.addEventListener("mouseenter",()=>{
                insideDiv.style.backgroundColor="red";
            })
        })
    
        const reset = document.getElementById("reset");

        reset.addEventListener("click",()=>{
            
        insideDivArr.forEach((insideDiv)=>{
            
                insideDiv.style.backgroundColor="green";
            
        })
        })

