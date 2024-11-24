
import './Ludo.css';
import { useState } from 'react';


export const Ludomove = () => {
    let [Moves, SetMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    let updateblue = () => {
        Moves.blue +=1;
        SetMoves({...Moves});
    };

    let updateyellow = () => {
        Moves.yellow +=1;
        SetMoves({...Moves});
    };
    let updategreen = () => {
        Moves.green +=1;
        SetMoves({...Moves});
    };
    let updatered = () => {
        Moves.red +=1;
        SetMoves({...Moves});
    };
   

    return (
        <div>
            <h1>Game Begins</h1>
            <p>Blue Moves={Moves.blue}</p>
            <button id="b1" onClick={updateblue}>+1</button>
            <p>Yellow Moves ={Moves.yellow}</p>
            <button id="b2" onClick={updateyellow}>+1</button>
            <p>Green Moves={Moves.green}</p>
            <button id="b3" onClick={updategreen}>+1</button>
            <p>Red Moves={Moves.red}</p>
            <button id="b4" onClick={updatered}>+1</button>
        </div>
    )
}