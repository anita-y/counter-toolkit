import { useSelector } from "react-redux";
//useSelector gives slice of store
//it is kind of subscriber

const DisplayCounter  = () => {

   const { counterVal} =  useSelector(store => store.counter)
   
    return (
        <p className="lead mb-4">Counter value {counterVal}</p>
        
    )
}

export default DisplayCounter;