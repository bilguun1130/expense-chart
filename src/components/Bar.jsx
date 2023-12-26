const Bar = ({key, height, day, amount}) => {
  return (
    <div key={key} className='w-20 lg:w-24 group rounded-sm bg-soft-red relative hover:bg-cyan hover:cursor-pointer' style={{height: `${height}px`} }>
        <p className='font-dmSans font-light text-slate-400 text-sm absolute top-[100%] left-[10%]'>{day}</p>
        <div id="text-reveal" className="p-1 rounded-md z-10 bg-dark-brown absolute -right-3 -top-10 hidden group-hover:block">
          <p className="text-cream text-sm font-dmSans font-bold">${amount}</p>
        </div>
    </div>

  )
}


export default Bar
