import React from "react";

type Card = {
    id: string;
    content: string;
  };

interface CardProps {
    card: Card
}

const Card: React.FC<CardProps> = ({card}) => {

    const handleDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setData("cardId", card.id);
    }

  return (
    <div>
        <div
        draggable
        onDragStart={handleDragStart}
        className="card"
        style={{margin: '5px', padding:'10px', cursor:'grab'}}
        >
            {card.content}
        </div>
    </div>
  )
}

export default Card