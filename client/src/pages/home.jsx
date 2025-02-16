/* DEPENDENCIES */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* HOMEPAGE */
const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // If videos are loaded, show videos
  return (
    <div id="homepage" className="bg-image">
      <div id="homepage-content">
        <button className="borders" id="start-crafting">
          Welcome!
        </button>
      </div>
    </div>
  )
}

/* EXPORT */
export default Home
