import Button from "./Button";
import Display from "./Display";
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0)
  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  return (
    <div>
      <Display counter={counter}/>
      <Button handler={increase} text={'plus'}/>
      <Button handler={decrease} text={'minus'}/>
      <Button handler={setToZero} text={'zero'}/>
    </div>
  );
}

export default App;
