import "./style.css"
import PlayerName from "../../components/PlayerName";
import ContentPontos from "../../components/ContentPontos";
import VsPlayer from "../../components/VsPlayer";

function ScoreBoard() {
    return /*  HTML*/ `
    <header class="score-board">   
    ${PlayerName('Player 1')}
    ${ContentPontos()}
    ${VsPlayer()}
    ${ContentPontos()}
    ${PlayerName('Player 2')}

    </header>
    `;
}
export default ScoreBoard;