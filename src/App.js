import React from "react";

const App = () => {

  const [round, setRound] = React.useState(1)
  const [energy, setEnergy] = React.useState(3)
  const [energyUse, setEnergyUse] = React.useState({ used: 0, restored: 0, steal: 0 })
  const [error, setError] = React.useState('')

  const { used, restored, steal } = energyUse

  const handleNextRound = () => {
    const parseUsed = isNaN(used) ? 0 : used
    const parseRestored = isNaN(restored) ? 0 : restored
    const parseSteal = isNaN(steal) ? 0 : steal

    if(parseUsed > energy )
      return setError('La energia usada es mayor a la total')
    
    setRound(round + 1 )
    setEnergy( energy - parseUsed - parseSteal + parseRestored + 2)

    setEnergyUse({ used: 0, restored: 0, steal: 0})
  }


  const handleChangeInput = (e) => {
    const intValue = Number.parseInt(e.target.value)

    setEnergyUse( {...energyUse, [e.target.name]: intValue} )
  }

  const handleReset = () => {
    setRound(1)
    setEnergy(3)
    setEnergyUse({ used: 0, restored: 0, steal: 0})

  }

  return(
    <div className='flex flex-col items-center justify-center bg-blue-500 min-h-screen font-sans'>
      <p className='text-6xl font-bold mb-3'>Round {round}</p>
      <p className='text-2xl font-medium mb-3 text-yellow-300 mb-4'>Energy: {energy}</p>
      <div>
        <p className='text-white font-medium'>Used Energy</p>
        <p className='text-red-800 italic'>{error}</p>
        <input
        className='mt-2 focus:outline-none text-center p-2 text-xl font-medium text-gray-500'
        name='used'
        value={used} 
        type='number' 
        placeholder='Used Energy'
        onChange={ handleChangeInput }/>

        <p className='mt-3 text-white font-medium '>Restored Energy</p>
        <input
        className='mt-2 focus:outline-none text-center p-2 text-xl font-medium text-gray-500'
        name='restored'
        value={restored} 
        type='number'
        placeholder='Restored Energy'
        onChange={handleChangeInput} />

        <p className='mt-3 text-white font-medium '>Steal Energy</p>
        <input
        className='mt-2 focus:outline-none text-center p-2 text-xl font-medium text-gray-500'
        name='steal'
        value={steal} 
        type='number'
        placeholder='Steal Energy'
        onChange={handleChangeInput} />

    </div>
    <br/>
    <div className='grid grid-cols-2 gap-3'>
      <button onClick= { handleReset } className='bg-black px-5 py-2 text-white font-medium hover:bg-gray-800'>Reset</button>
      <button onClick={ handleNextRound } className='bg-black px-5 py-2 text-white font-medium hover:bg-gray-800'>Next Round</button>
    </div>
    </div>
  );
}


export default App;
