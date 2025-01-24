
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Menu, X } from "lucide-react"

// Mock data for tournaments
const tournamentsData = {
  cricket: [
    { id: 1, name: "Summer League 2023", startDate: "2023-07-01", endDate: "2023-08-15", enrollmentFee: "$50" },
    { id: 2, name: "City Championship", startDate: "2023-09-01", endDate: "2023-10-30", enrollmentFee: "$75" },
  ],
  football: [
    { id: 1, name: "Summer League 2023", startDate: "2023-07-01", endDate: "2023-08-15", enrollmentFee: "$50" },
    { id: 2, name: "City Championship", startDate: "2023-09-01", endDate: "2023-10-30", enrollmentFee: "$75" },
  ],
  basketball: [
    { id: 1, name: "3v3 Street Tournament", startDate: "2023-06-15", endDate: "2023-06-17", enrollmentFee: "$30" },
    { id: 2, name: "Winter Indoor League", startDate: "2023-11-01", endDate: "2023-12-20", enrollmentFee: "$60" },
  ],
  tennis: [
    { id: 1, name: "Grand Slam Open", startDate: "2023-08-01", endDate: "2023-08-14", enrollmentFee: "$100" },
    { id: 2, name: "Junior Development Series", startDate: "2023-07-01", endDate: "2023-09-30", enrollmentFee: "$40" },
  ],
}

const TournamentPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { sport } = useParams();
  const tournaments = tournamentsData[sport] || []

  const handleEnroll = (tournamentId) => {
    // Implement enrollment logic here
    console.log(`Enrolled in tournament ${tournamentId}`)
    alert(`You have successfully enrolled in the tournament!`)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-2xl font-bold">
            RacingAhead
          </p>
          
            <Link to="/home" className="block md:inline-block hover:text-gray-300">
              Home
            </Link>
            
          
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-8 capitalize">{sport} Tournaments</h1>

        {tournaments.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-black mb-2">{tournament.name}</h2>
                  <p className="text-gray-600 mb-2">Start Date: {tournament.startDate}</p>
                  <p className="text-gray-600 mb-2">End Date: {tournament.endDate}</p>
                  <p className="text-gray-600 mb-4">Enrollment Fee: {tournament.enrollmentFee}</p>
                </div>
                <button
                  onClick={() => handleEnroll(tournament.id)}
                  className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">No tournaments available for {sport} at the moment.</p>
        )}
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

export default TournamentPage

