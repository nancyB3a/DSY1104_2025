import { useState } from "react"
import Audifono from "./components/Audifono"
import Header from "./components/Header"
import { db } from "./data/db"

function App() {

  const [data, setData] = useState(db)

  return (
    <>
     <Header />
     <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
        {data.map((audifono) =>(
          <Audifono
            audifono = {audifono}
          />
        ))} 
        </div>       
     </main>
     <footer className="bg-datk mt-5 p-5">
      <div className="container-xl">
        <p className="text-white text-center fs-4 mt-4 m-md-0">
          Logiteshhh - Todos los derechos reservados.
        </p>
      </div>

     </footer>
    </>
  )
}

export default App
