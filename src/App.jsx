import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


function App() {

  const [hero, setHero] = useState([])
  const getHero = async () => {
    await axios
      .get('https://vm-ncts-lscs.eimdemo.com/lscs/v1/document/id/4d30612cc0cd7f481e06212b1e27e663$?project=//iwserver/default/main/sample&format=json&includeDCRContent=true')
      .then(response => {
        setHero(response.data.results.assets[0].content.Root)
        console.log(response)
        console.log("Hero", response.data.results.assets[0].content.Root)
      })
  }
  useEffect(() => {
    getHero()
  }, [])

  return (
    <div>
      <h1>This is a Sample</h1>
      <img src={`https://vm-ncts-lscs.eimdemo.com/${hero.FeaturedImage}`}/>
    </div>
  )
}

export default App
