import './App.css'
import GymOption from './component/GymOption/GymOption'
import Navbar from './component/navbar/navbar'

function App() {
 

  return (
    <>
    
      
    <h2 className='bg-red-700 text-3xl'>NavNar section </h2>
    <Navbar></Navbar>
    <h2 className='text-center  mt-7'>Here is our GymOption</h2>
    <GymOption></GymOption>
    </>
  )
}

export default App
