
import { Link } from "react-router-dom"

const sportCards = [
  { id: 1, title: "Cricket", image: "https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg" },
  { id: 2, title: "Basketball", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheSUyMGJhc2tldGJhbGx8ZW58MHx8MHx8fDA%3D" },
  { id: 3, title: "Tennis", image: "https://courtsidetennis.com/cdn/shop/articles/Untitled-1.png?v=1664521489" },
  { id: 4, title: "Football", image: "https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg" },
  
]

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
            RacingAhead
          </div>
          <div className="space-x-4">
            
            <Link to="/MyTournament" className="hover:text-gray-300">
              My tournaments
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Explore Sports</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sportCards.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 px-5"
            >
              <img src={sport.image || "/placeholder.svg"} alt={sport.title} className="w-full h-48 object-cover " />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black">{sport.title}</h2>
                <p className="mt-2 text-gray-600">Explore {sport.title} events and news</p>
                <Link
                  to={`/tournaments/${sport.title.toLowerCase()}`}
                  className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
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

export default HomePage

