const Bar = ({key, height, day}) => {
  return (
    <div key={key} className='w-16 rounded-sm bg-soft-red relative hover:bg-cyan hover:cursor-pointer' style={{height: `${height}px`} }>
        <p className='font-dmSans font-light text-slate-400 text-sm absolute top-[100%] left-[10%]'>{day}</p>
    </div>

  )
}


export default Bar
