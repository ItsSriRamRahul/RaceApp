
import { Link } from "react-router-dom"
import NavBar from "./components/NavBar"


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

// Mock data for live cricket score
const liveScore = {
  team1: {
    name: "India",
    score: 287,
    wickets: 5,
    overs: 45.2,
  },
  team2: {
    name: "Australia",
    score: 185,
    wickets: 3,
    overs: 32.1,
  },
  currentBatsman: "V. Kohli",
  currentBowler: "P. Cummins",
  recentOvers: [".", "1", "4", "W", "2", "6"],
}

const MyTournamentsPage= () => {

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <NavBar/>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-8">My Tournaments</h1>

        {/* Live Score Card */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Live Cricket Score</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-xl font-bold">
                {liveScore.team1.name}: {liveScore.team1.score}/{liveScore.team1.wickets}
              </p>
              <p className="text-gray-600">Overs: {liveScore.team1.overs}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-bold">
                {liveScore.team2.name}: {liveScore.team2.score}/{liveScore.team2.wickets}
              </p>
              <p className="text-gray-600">Overs: {liveScore.team2.overs}</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p>
              <span className="font-semibold">Current Batsman:</span> {liveScore.currentBatsman}
            </p>
            <p>
              <span className="font-semibold">Current Bowler:</span> {liveScore.currentBowler}
            </p>
            <div>
              <span className="font-semibold">Recent Overs:</span>
              <div className="flex space-x-2 mt-1">
                {liveScore.recentOvers.map((ball, index) => (
                  <span
                    key={index}
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      ball === "W"
                        ? "bg-red-500 text-white"
                        : ball === "4" || ball === "6"
                          ? "bg-green-500 text-white"
                          : "bg-gray-200"
                    }`}
                  >
                    {ball}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

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
          <p>&copy; 2021 RacingAhead. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default MyTournamentsPage

