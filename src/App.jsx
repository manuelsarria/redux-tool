import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, incrementByAmount } from './store/slices/counter';

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
         Increment
        </button>
        <button onClick={() => dispatch( decrement() )}>
         Decrement
        </button>
        <button onClick={() => dispatch( incrementByAmount(2) )}>
         Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
