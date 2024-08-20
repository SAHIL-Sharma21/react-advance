import { useState } from 'react';
import './App.css'
import Coloumn from './components/Coloumn'

interface Card {
  id: string;
  content: string;
}

interface Column {
  id: string;
  title: string;
  cards: Card[];
}


const initialColoumns: Column[] = [
  {
    id: "1",
    title: "To Do",
    cards: [
      {id: "1", content:"Task 1"},
      {id: "2", content: "Task 2"}
    ],
  },
  {
    id: "2",
    title: "In Progress",
    cards: [{id: "3", content:"Task 3"}]
  },
  {
    id: "3",
    title: "Done",
    cards: [{id:"4", content:"Task 4"}]
  }
];

function App(): JSX.Element {
  
  const [columns, setColumns] = useState<Column[]>(initialColoumns)

  const onDrop = (cardId: string, targetColumnId: string) => {
    let sourceColumnId = "";

    const sourceColumn = columns.find((column) => column.cards.some((card) => card.id === cardId));

    if(sourceColumn){
      sourceColumnId = sourceColumn.id;
    }

    if(sourceColumnId === targetColumnId) return;

    const cardToMove = sourceColumn?.cards.find((card) => card.id === cardId);

    if(cardToMove){
      const updateSourceColumn = {
        ...sourceColumn!,
        cards: sourceColumn!.cards.filter((card) => card.id !== cardId),
      }

      const targetColumn = columns.find((column) => column.id === targetColumnId);

      const updatedTargetColumn = {
        ...targetColumn!,
        cards: [...targetColumn!.cards, cardToMove],
      };

      setColumns(
        columns.map((column) => 
          column.id === sourceColumnId
          ? updateSourceColumn
          : column.id === targetColumnId
          ? updatedTargetColumn
          : column
        )
      );
    }
  };


  return (
    <>
      <div className='app' style={{display:'flex', padding: '20px'}}>
        {columns.map((column) => (
          <Coloumn key={column.id} column={column} onDropCard={onDrop} />
        ))}
      </div>
    </>
  )
}

export default App
