let container=document.querySelector(".container");

const colors = [
    '#e74c3c', 
    '#8e44ad', 
    '#3498db', 
    '#e67e22', 
    '#2ecc71', 
    '#1abc9c', 
    '#3498db', 
    '#9b59b6', 
    '#34495e', 
    '#f39c12', 
    '#27ae60',
    '#c0392b',
    '#2980b9',
    '#d35400',
    '#16a085',
  ];
  
let totalNumberOfSquares=500;



for(let i=0;i<totalNumberOfSquares;i++){
    let singleSquare=document.createElement("div");

    singleSquare.classList.add("square");

    singleSquare.addEventListener("mouseover",()=>{color(singleSquare)})
    singleSquare.addEventListener("mouseleave",()=>{removeColor(singleSquare)})

    container.append(singleSquare);

}

const randomColor=()=>{

    const index=Math.floor(Math.random()*colors.length)

    return colors[index];
}

const color=(square)=>{
    const color=randomColor();
    square.style.backgroundColor=color;
    square.style.boxShadow=`0 0 2px ${colors}`
}
const removeColor=(square)=>{

    square.style.backgroundColor="#1e1e1e";
    square.stlye.boxShadow="0 0 2px #000";
}