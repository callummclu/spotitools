const PreContent = ({data}) => {
  let orangeWords = ['let','const','var','=','return','=>','?',":","from","import","&&"]
  return data.split(' ').map(e=>
                             orangeWords.includes(e) ? <span style={{color:"orange"}}>{e} </span> :
                             e.startsWith('<') ? <span style={{color:"lightblue"}}>{e} </span> :
                             e.startsWith('>') ? <span style={{color:"lightblue"}}>{e} </span> :
                             e.endsWith('"') ? <span style={{color:"lightgreen"}}>{e}</span> :
                             e.startsWith('"') ? <span style={{color:"lightgreen"}}>{e}</span> :
                             e.startsWith('className=') ? <span style={{color:"goldenrod"}}>{e}</span> :
                            <span>{e} </span>)
}

const CodeBlock = ({data}) => {  
  return (
    <pre><PreContent data={data}/></pre>
  )
}

export default CodeBlock