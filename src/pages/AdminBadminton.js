import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, Minus,Plus, X } from "lucide-react"
import NavBar from "./components/NavBar"

const AdminBadmintonScoreUpdate = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [player1, setPlayer1] = useState({ name: "Player 1", score: 0 })
  const [player2, setPlayer2] = useState({ name: "Player 2", score: 0 })
  const [lastRoundResult, setLastRoundResult] = useState({ player1: 0, player2: 0 })
  const [roundWins, setRoundWins] = useState({ player1: 0, player2: 0 })

  const handlePlayerUpdate = (player, field, value) => {
    const updateFunc = player === "player1" ? setPlayer1 : setPlayer2
    updateFunc((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleLastRoundUpdate = (player, value) => {
    setLastRoundResult((prev) => ({
      ...prev,
      [player]: Number(value),
    }))
  }

  const handleRoundWinUpdate = (player) => {
    setRoundWins((prev) => ({
      ...prev,
      [player]: prev[player] + 1,
    }))
  }
  const reset= ()=>{
    setRoundWins({player1: 0, player2: 0})
  }
  const handleScoreUpdate = (player, change) => {
    const updateFunc = player === "player1" ? setPlayer1 : setPlayer2
    updateFunc((prev) => ({
      ...prev,
      score: Math.max(0, prev.score + change), // Ensure score doesn't go below 0
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Updated score:", { player1, player2, lastRoundResult, roundWins })
    alert("Score updated successfully!")
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <NavBar/>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Update Badminton Score</h1>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Player 1 */}
            <div>
              <h2 className="text-xl font-semibold mb-2">{player1.name}</h2>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={player1.name}
                  onChange={(e) => handlePlayerUpdate("player1", "name", e.target.value)}
                  placeholder="Player 1 Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleScoreUpdate("player1", -1)}
                    className="mx-2"
                  >
                    <Minus/>
                  </button>
                  <span className="text-2xl font-bold">{player1.score}</span>
                  <button
                    type="button"
                    onClick={() => handleScoreUpdate("player1", 1)}
                    className="mx-2"
                  >
                   <Plus/>
                  </button>
                </div>
              </div>
            </div>

            {/* Player 2 */}
            <div>
              <h2 className="text-xl font-semibold mb-2">{player2.name}</h2>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={player2.name}
                  onChange={(e) => handlePlayerUpdate("player2", "name", e.target.value)}
                  placeholder="Player 2 Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleScoreUpdate("player2", -1)}
                    className="mx-2"
                  >
                    <Minus/>
                  </button>
                  <span className="text-2xl font-bold">{player2.score}</span>
                  <button
                    type="button"
                    onClick={() => handleScoreUpdate("player2", 1)}
                    className="mx-2"
                  >
                    <Plus/></button>
                </div>
              </div>
            </div>
          </div>

          {/* Last Round Result */}
         
          {/* Round Wins */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Round Wins</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-2">{player1.name}</p>
                <div className="flex space-x-2">
                  {[...Array(roundWins.player1)].map((_, index) => (
                    <div key={index} className="w-6 h-6 rounded-full bg-blue-500"></div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => handleRoundWinUpdate("player1")}
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Win
                </button>
              </div>
              <div>
                <p className="mb-2 flex justify-end">{player2.name}</p>
                <div className="flex space-x-2 justify-end">
                  {[...Array(roundWins.player2)].map((_, index) => (
                    <div key={index} className="w-6 h-6 rounded-full bg-green-500"></div>
                  ))}
                </div>
                <div className="w-full flex justify-end">
                <button
                  type="button"
                  onClick={() => handleRoundWinUpdate("player2")}
                  className=" mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Win
                </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={()=>{
                reset()
              }}
            >
             Reset
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 RacingAhead PVT LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  )
}

export default AdminBadmintonScoreUpdate

