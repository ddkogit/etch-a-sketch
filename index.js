const container = document.getElementById("container");

console.log(container);



let insideDivArr=[];

for(let i=1;i<=5;i++){

    const row = document.createElement("div");
    row.classList.add("row");

        for(j=1;j<=5;j++){

            
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
        // insideDivArr.forEach((insideDiv)=>{
        //     insideDiv.addEventListener("mouseleave",()=>{
        //         insideDiv.style.backgroundColor="green";
        //     })
        // })

