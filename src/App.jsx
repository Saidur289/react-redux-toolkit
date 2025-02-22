
import './App.css'
import CounterView from './app/features/counter/CounterView'
import PostsView from './app/features/posts/PostsView'

function App() {

  return (
    <>
      <div>
        <h1>React Redux Toolkit</h1>
        <CounterView/>
        <PostsView/>
      </div>
    </>
  )
}

export default App
