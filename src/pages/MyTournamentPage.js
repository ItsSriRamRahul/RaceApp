
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X,Home } from "lucide-react"

// Mock data for rankings
const rankings = [
  { rank: 1, name: "Team Alpha", points: 28 },
  { rank: 2, name: "Team Beta", points: 25 },
  { rank: 3, name: "Team Gamma", points: 22 },
  { rank: 4, name: "Team Delta", points: 19 },
  { rank: 5, name: "Team Epsilon", points: 17 },
]

// Mock data for upcoming matches
const upcomingMatches = [
  { id: 1, team1: "Team Alpha", team2: "Team Beta", date: "2023-06-15", time: "15:00" },
  { id: 2, team1: "Team Gamma", team2: "Team Delta", date: "2023-06-16", time: "14:30" },
  { id: 3, team1: "Team Epsilon", team2: "Team Alpha", date: "2023-06-18", time: "16:00" },
]

const MyTournamentsPage= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
            RacingAhead
          </div>
          
          
            <Link to="/home" className="block  hover:text-gray-300 px-6">
              Home
            </Link>
          
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-8">My Tournaments</h1>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
          {/* Current Rankings */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-black mb-4">Current Rankings</h2>
            <table className="w-full min-w-[300px]">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2">Rank</th>
                  <th className="text-left py-2 px-2">Team</th>
                  <th className="text-left py-2 px-2">Points</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((team) => (
                  <tr key={team.rank} className="border-b last:border-b-0">
                    <td className="py-2 px-2">{team.rank}</td>
                    <td className="py-2 px-2">{team.name}</td>
                    <td className="py-2 px-2">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Upcoming Matches */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h2 className="text-2xl font-semibold text-black mb-4">Upcoming Matches</h2>
            <ul className="space-y-4">
              {upcomingMatches.map((match) => (
                <li key={match.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="font-semibold mb-1 sm:mb-0">
                      {match.team1} vs {match.team2}
                    </span>
                    <span className="text-gray-600">{match.date}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-600">Time: {match.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
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

export default MyTournamentsPage