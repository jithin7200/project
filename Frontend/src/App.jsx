import "../src/styles/Hello.css"
import GetBlog from "./components/Blogs/GetBlog"
import Homepage from "./components/routes/Homepage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar/>
      {/* <GetBlog /> */}
      <Homepage />
    </>
  )
}

export default App