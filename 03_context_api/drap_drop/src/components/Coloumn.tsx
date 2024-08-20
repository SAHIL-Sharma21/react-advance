import React from "react";
import Card from "./Card"


type Column = {
    id: string;
    title: string;
    cards: Card[];
  };

interface ColoumnProps {
    column: Column;
    onDropCard: (cardId: string, targetColumnId: string) => void;
}

const Coloumn: React.FC<ColoumnProps> = ({column, onDropCard}) => {

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData("cardId");
        onDropCard(cardId, column.id);
    }

    const handleDrapOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

  return (
    <>
        <div
        onDrop={handleDrop}
        onDragOver={handleDrapOver}
        className="column"
        style={{margin:'10px', padding:'10px'}}
        >
            <h2>{column.title}</h2>
            {column.cards.map((card) => (
                <Card key={card.id} card={card}/>
            ))}
        </div>
    </>
  )
}

export default Coloumn