import React from 'react';
import { useHouses } from './Houses/Hooks/useHouses';

const App:React.FC = ()=>{
  const {houses} = useHouses()
  return (
    <div>
      {houses.map(house => <ol>{house.name}</ol>)}
    </div>
  )
}

export default App;
