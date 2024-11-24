import './Lottery.css';
import { useState } from 'react';

export const Lottery = () => {
    const [ticket, setTicket] = useState([0, 0, 0]);
    const [message, setMessage] = useState('Lottery Game Begins');
    const [IsWin, setIsWin] = useState(false);
    console.log(IsWin,"IsWin")
    const getTicket = () => {
        let newTicket = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];
        setTicket(newTicket);
       
        let addNumber = 0;

        for (let index in newTicket) {
            addNumber += newTicket[index]; 
        }

        if (addNumber === 15) {
            setMessage("You win!");
            setIsWin(true);
        } else {
            setMessage("You lost"); 
        }

    };
    
    return (
        <div className="lottery-container">
            <h1>{message}</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button  disabled={IsWin} className={IsWin?'get-ticket-win':'get-ticket-btn'} onClick={getTicket}>Get Ticket</button>
        </div>
    );
};
