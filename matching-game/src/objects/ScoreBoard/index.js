import "./style.css"
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import ArrowDown from "../../components/ArrowDown"

function ScoreBoard() {
    return /*  HTML*/ `
    <header class="score-board"> 
    ${ArrowDown()}  
    ${PlayerName('Player 1')}
    ${PlayerScore(1)}
    ${VsPlayer()}
    ${PlayerScore(3)}
    ${PlayerName('Player 2')}

    </header>
    `;
}
export default ScoreBoard;