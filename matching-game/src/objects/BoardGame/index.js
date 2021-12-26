import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data";

function BoardGame(amountCards) {
 
    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join('');

  
    return /* Html */`
    <section class="board-game">
     ${$htmlCards}
    </section>
    `;

}
export default BoardGame;