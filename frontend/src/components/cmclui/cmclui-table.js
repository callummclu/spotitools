import React from 'react'
import './cmclui-table.css'

const BackArrow = ({color}) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>)
}

const ForwardArrow = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
  )
}

const Table = ({data={},fields,showHeaders=true,title="",pagination=false,accent="rgb(240,240,240)",textAccent="rgb(60,60,60)",darkmode=false}) => {

  const [pageNum,setPageNum] = React.useState(1)
  const [textAccentCalc,setTextAccentCalc] = React.useState(textAccent)
  const [accentCalc,setAccentCalc] = React.useState(accent)
  const [perPageNum,setPerPageNum] = React.useState(5)
  React.useEffect(()=>setPageNum(1),[perPageNum])

  React.useEffect(()=>{
    if(darkmode){
      if(accentCalc=="rgb(240,240,240)")setAccentCalc('rgb(60,60,60)')

      if(textAccentCalc=="rgb(60,60,60)")setTextAccentCalc('rgb(240,240,240)')
    }
  },[])


  const findIndexes = (pageNum,perPage) => [((pageNum - 1) * perPage + 1),((pageNum - 1) * perPage + perPage + 1)]
  let indexes = findIndexes(pageNum,parseInt(perPageNum))
  if (data !== undefined && data.length > 0){
    return (
    <>
      <div className={`container-parent n-${perPageNum}`}>
      {title.length > 0 && <h1 style={{background:accentCalc, color:textAccentCalc}} className="title-container">{title}</h1>}
      <div className={`${!pagination && "disabled"} table-container`} style={darkmode ? {background:"rgb(90,90,90)",color:"rgb(240,240,240)"} : {}}>
        
        {showHeaders && <p style={darkmode ? {position:"sticky",top:"0",background:"rgb(90,90,90)",color:"rgb(240,240,240)"} : {background:"white",position:"sticky",top:"0",borderBottom:"0.5px solid lightgray"}} className={`span-container ${darkmode && "dark"}`}>{fields.map(e=><h4 style={{width:`${(100/fields.length)}%`,fontWeight:"bold"}}>{e}</h4>)}</p>}
        {pagination ? 
          (data?.slice(indexes[0] -1,indexes[1]-1).map(e=><><p className={`span-container ${darkmode && "dark"}`}>{fields.map(f=><span style={{width:`${(100/fields.length)}%`}}>{e[f]}</span>)}</p></>)) 
          : 
          (data.map(e=><><p className="span-container">{fields.map(f=><span style={{width:`${(100/fields.length)}%`}}>{e[f]}</span>)}</p></>))
        }
        {pagination &&
        <>
        <div style={{background:`${accentCalc}` }} className="table-controls">

        <p style={{margin:"0",color:textAccentCalc }}>{indexes[0]} - {indexes[1]-1 > data.length ? data.length : indexes[1]-1} of {data.length}</p>
      <button onClick={()=>pageNum>1 && setPageNum(pageNum - 1)}>
        <BackArrow color={textAccentCalc}/>
      </button>
      <p style={{color:textAccentCalc,margin:"0" }}>{`  ${pageNum} of ${Math.ceil(data.length/perPageNum)}  `}</p>
      
      <button onClick={()=>pageNum<((data.length/perPageNum)) && setPageNum(pageNum + 1)}>
        <ForwardArrow color={textAccentCalc}/>
      </button>
      
        <label style={{color:textAccentCalc }}>Entries per page</label>
        <select onChange={e=>setPerPageNum(e.target.value)} name="perPage">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="100">100</option>
      </select>
      
        </div>


        </>

    }
      </div>
          </div>

    </>
  )
  } else {
    return (
    <>
      <div className="container-parent">
      <div className="table-container">
        {title.length > 0 && <h1 style={{background:accentCalc, color:textAccentCalc}} className="title-container">{title}</h1>}
      </div>
      {pagination &&
        <div style={{background:`${accentCalc}`,color:textAccentCalc }} className="table-controls">
        {0} - {0} of {0}
      <button><BackArrow/></button>
      <button><ForwardArrow/></button>
      <label style={{color:textAccentCalc }}>Entries per page</label>
      <select onChange={e=>setPerPageNum(e.target.value)} name="perPage">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="100">100</option>
      </select>
        </div>
      }
      </div>

    </>
  )
  }
  
}

export default Table