import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Demo  from './Demo'
import Dynamic from './Dynamic';



function App() {
  const obj={
    name : "sathish",
    roll : 209,
    dept : "CSE"
    
  }

  const arr = [1,2,3,4,5]

  const arrobj = [ 
    {key : "value"} , {key :"value"} , {key : "value"} , {key : "value"}
   ]
  return (
    <div> 
      < Dynamic />
      <Demo test ={obj} />
    </div>
  );
}

export default App;
