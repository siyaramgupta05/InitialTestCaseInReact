import {useState} from 'react';
import './App.css';
import CommentForm from './components/CommentForm'
import CommetList from './components/CommetList'
import Counter from './components/counter/Counter';

function App() {
  const allcomments=[
    // {id:1,name:"Siyaram"},
    // {id:2,name:"Arnav"}
  ]
    const [comments,setComments] = useState(allcomments)
  return (
    <div className="App">
      <Counter/>
      <h2>Install "Mock Service Worker" (https://mswjs.io/) for mock data asynchronous</h2>
      <CommentForm setComments={setComments}/>
      <CommetList allcomments={comments} />
    </div>
  );
}
//1:22:20
export default App;
