import Hero from "../components/Hero.jsx"
import Blogs from "./Blogs.jsx"

function Home() {
  return (
    <div className="bg-white text-primary container mx-auto mt-8 p-8">
      <Hero/>
      <Blogs/>
    </div>
  )
}
export default Home