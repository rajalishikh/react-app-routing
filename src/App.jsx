import './App.css'
import GymOption from './component/GymOption/GymOption'
import Navbar from './component/navbar/navbar'
import Phone from './component/phone/Phone'
import Rechart from './component/Rechart/Rechart'

function App() {
 

  return (
    <>
    <h2 className='bg-red-700 text-3xl'>NavNar section </h2>
    <Navbar></Navbar>
    <h2 className='text-center  mt-7'>Here is our GymOption</h2>
    <GymOption></GymOption>
    <Rechart></Rechart>
    <Phone></Phone>
    </>
  )
}

export default App
