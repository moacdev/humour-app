import "./App.css"
import IconChanger from "./iconChanger";
import { useState } from 'react'

function App() {

  const [indexHumour, setIndexHumour] = useState(0)

  let humour = [
    {
      content: `La maîtresse de Toto l’interroge sur la dernière leçon de géographie : "Peux-tu me dire quels sont les pays frontaliers de la France, Toto ?"

      Toto reste muet, la maîtresse le sermonne,
      
      - Tu n’as toujours pas revu le cours de géographie !
      
      Toto répond :
      
      - Si, mais à force de me creuser la tête, j’ai un trou de mémoire !`
    },
    {
      content: 'N’aie pas honte de péter pendant que tu urines, il n’y a pas de pluie sans tonnerre...'
    },
    {
      content: 'L\'amour rend aveugle, mais le mariage rend la vue !'
    },
    {
      content: 'Passer le bac, c\'est comme faire la lessive. On mouille, on sèche et ... On repasse !'
    }
  ]

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const ChangeHumour = () =>{
    setIndexHumour( getRandom(0, humour.length-1))
  }


  return (
    <div className="content">
      <p>
        { humour[indexHumour].content }
      </p>

      <div>
        <button onClick={ChangeHumour} className='change-button'>
        <IconChanger/>
        </button>
      </div>
    </div>
    
  );
}

export default App;

