import logo from './assets/images/logo.svg'
import data from '../data.json'
import Bar from './components/Bar';
import React from 'react';
function createBar() {
  let biggest = 0;
  let proportions = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].amount > biggest) {
      biggest = data[i].amount
    }
  }
  for (let i = 0; i < data.length; i++) {
    proportions[data[i].day] =parseInt(((data[i].amount / biggest).toFixed(2))*130);
  }
  return proportions;
}
const bars = createBar();
function App() {
  return (
    <main className='bg-cream h-screen flex flex-col justify-center items-center max-container'>
      <article className=''>
        <section id="balance" className="text-white bg-soft-red w-80 p-5 rounded-lg flex justify-between max-container lg:w-96">
          <div id='left-side'>
            <p className='text-very-pale-orange font-dmSans font-normal'>My balance</p>
            <h2 className='text-white font-dmSans font-bold text-xl mt-2'>$0.00</h2>
          </div>
          <img src={logo} alt="logo" />
        </section>
        <section id='spending-graph' className='bg-white mt-5 rounded-md w-80 p-6 pb-2 lg:w-96'>
          <h1 className='font-dmSans font-bold text-dark-brown text-xl max-container'>Spending - Last 7 days</h1>
          <div id='bars' className='pt-16 flex gap-3 justify-end items-end'>
            {
              data.map((item, index) => {
                return (
                  <Bar key={index} height={bars[item.day]} day={item.day} amount ={item.amount} />
                )
              })
            }
          </div>
          <div className='w-full h-0.5 mt-10 bg-cream'></div>
          <div id="bottom" className='flex justify-between'>
            <div id="left-bot">
              <h2 className='pt-5 font-dmSans text-slate-400 text-md'>Total this month</h2>
              <h2 className='font-dmSans font-bold text-dark-brown text-3xl'>${
                data.reduce((total, item) => {
                  return total + item.amount
                }, 0)
              }</h2>
            </div>
            <div id="right-bot" className='self-end mb-3'>
              <p className='text-dark-brown font-dmSans font-bold text-right'>+2.4%</p>
              <p className='font-dmSans text-slate-400 text-sm'>from last month</p>
            </div>
          </div>
          
        </section>
        
      </article>
      
    </main>
  )
}
export default App
