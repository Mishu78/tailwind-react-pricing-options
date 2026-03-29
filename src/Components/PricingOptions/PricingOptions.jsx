import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
   const  pricingData= use (pricingPromise);
   //console.log(pricingData)
    return (
        <div>
           <h2 className='text-3xl'>Get our membership</h2> 
           
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
          {
            pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
          }
        </div>
        </div>
    );
};

export default PricingOptions;