import "./styles.css"
function ArrowDown(currentPlayer = 2){
    return /*html*/`
    <img class="arrow-down" 
         data-currentPlayer = ${currentPlayer}
         src="images/IconArrowDown.png" alt="IconArrowDown" >

    `;
}

export default ArrowDown;