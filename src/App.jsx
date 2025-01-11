import useSWR from "swr"
import { AdviceId, Card } from "./components/Card";
function App() {
 const fetcher = (url) => fetch(url).then((res) => res.json())


 const {data,error,isLoading} = useSWR('https://api.adviceslip.com/advice', fetcher);

 if(error) return <div> Error </div>
 if(isLoading) return <div> Loading... </div>
  return (
    <div className="container"> 
    <Card>
      <AdviceId>
         ADVICE  #{data?.slip?.id} 
      </AdviceId>
    
      <h1> {`"${data?.slip?.advice}"`} </h1>    
      <div>
      <img style={{width: '100%'}} src="./public/pattern-divider-desktop.svg" alt="" />
    </div>
    </Card>
    <div className="dice-icon" >
        <img src="./public/icon-dice.svg" alt="" />
    </div>
    
    </div>
  )
}

export default App
