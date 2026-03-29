
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import Link from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'

const pricingPromise=fetch('pricingData.json')
.then(res=>res.json());

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
        
        <ResultsChart></ResultsChart>
      </main>
   
    
{/* <DaisyNav></DaisyNav> */}

    </>
  )
}

export default App
