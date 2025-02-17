import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useState } from 'react'


function CricketScoring() {

  
  const team1=[('Rohit',0),('jaiswal',0),('kolhi',0),('iyer',0)]
  const team2={'starc':0,'boland':0,'cummins':0}
  
  const allPlayers = [
    { id: 1, name: "Player 1", score: 0 },
    { id: 2, name: "Player 2", score: 0 },
    { id: 3, name: "Player 3", score: 0 },
    { id: 4, name: "Player 4", score: 0 },
  ];
  const [score,SetScore]=useState(0)
  const [players, setPlayers] = useState([allPlayers[0], allPlayers[1]]);
  const [wickets, setWickets] = useState(0);
  const [nextPlayerIndex, setNextPlayerIndex] = useState(2);
  const [strike,setStrike] = useState(0);
  // Function to update score
  const updateScore = (playerIndex, runs) => {
    SetScore(score+runs)
    const newPlayers = [...players];
    newPlayers[playerIndex].score += runs;
    setPlayers(newPlayers);
  };

  // Function to handle a wicket
  const handleWicket = () => {
    if (nextPlayerIndex < allPlayers.length) {
      const newPlayers = [...players];
      newPlayers.pop(players[strike%2]); // Remove the out player
      newPlayers.push(allPlayers[nextPlayerIndex]); // Add next player
      setPlayers(newPlayers);
      setWickets(wickets + 1);
      setNextPlayerIndex(nextPlayerIndex + 1);
    }
    else {
      alert('INnigs done')
    }
  };



  
  return (
    <div className='flex justify-between flex-col bg-gray-100 '>
        <NavBar/>
        <div className=' md:h-[500px] bg-white shadow-lg w-3/4 mx-auto my-16 p-6 h-fit'> 
        <p className='text-2xl font-bold'>
          Ind Vs Aus
          </p>
          <p className='text-xl p-4'>
            India
          </p>
          <p className='p-4 text-xl tracking-widest'>{score}/{wickets}</p>
          <div className='flex items-center'>
            <p className='text-xl font-semibold'>{players[0].name}</p>
            <p className='text-xl font-semibold px-3'>{players[0].score}</p>
            <div className={`w-3 h-3 bg-black rounded-full ${strike%2==0 ? 'block':'hidden'}`}></div>
            </div>
            <div className='flex  items-center'>
            <p className='text-xl font-semibold'>{players[1].name}</p>
            <p className='text-xl font-semibold px-3'>{players[1].score}</p>
            <div className={`w-3 h-3 bg-black rounded-full ${strike%2==1 ? 'block':'hidden'}`}></div>
            <div className='text-xl font-semibold mx-auto'> 
              <form>
                <label>
                 
                  <select>
                    <option value ="cummins">
                      cummins
                    </option>
                    <option value ="starc">
                      starc
                    </option>
                    <option value ="boland">
                      boland
                    </option>
                    <option value ="lyon">
                      lyon
                    </option>
                  </select>
                </label>
              </form>
            </div>
            </div>
          <div className='grid grid-cols-2 gap-2 md:grid-cols-6 my-3'>

          
            <p onClick={()=>{updateScore((strike%2),1)
              setStrike(strike+1)
            }}
             className='w-20 h-20 rounded-lg text-white bg-green-400 flex justify-center items-center'>1</p>
            <p onClick={()=>{updateScore((strike%2),2)}}
             className='w-20 h-20 rounded-lg text-white bg-green-400 flex justify-center items-center'>2</p>
            <p onClick={()=>{updateScore((strike%2),3) 
            setStrike(strike+1)}}
             className='w-20 h-20 rounded-lg text-white bg-green-400 flex justify-center items-center'>3</p>
            <p onClick={()=>{updateScore((strike%2),4)}}
             className='w-20 h-20 rounded-lg text-white bg-green-400 flex justify-center items-center'>4</p>
            <p onClick={()=>{updateScore((strike%2),6)}}
             className='w-20 h-20 rounded-lg text-white bg-green-400 flex justify-center items-center'>6</p>
            <p onClick={()=>{handleWicket() 
              
            }}
             className='w-20 h-20 rounded-lg text-white bg-red-400 flex justify-center items-center'>w</p>
            
            
          </div>
        
        </div>
        <div className='h-[200px] bg-red-500 w-3/4 mx-auto '> player update </div>
        <div className='h-[200px] bg-red-500 w-3/4 mx-auto'> Commentry </div>
        <Footer/>
    </div>
  )
}

export default CricketScoring