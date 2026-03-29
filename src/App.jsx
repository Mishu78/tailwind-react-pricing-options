
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import Link from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

const pricingPromise=fetch('pricingData.json')
.then(res=>res.json());

const markspromise=axios.get('marksData.json');

function App() {
  return (
    <>  
    <header>
       <NavBar></NavBar> 
      </header> 

      <main>
      <Suspense fallback={<span class="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
        
      <Suspense fallback={<span class="loading loading-spinner loading-lg"></span>}>
        <MarksChart marksPromise={markspromise}></MarksChart>
      </Suspense>
        <ResultsChart></ResultsChart>
      </main>
   
    
{/* <DaisyNav></DaisyNav> */}

    </>
  )
}

export default App
