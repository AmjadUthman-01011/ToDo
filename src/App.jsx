import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import TaskList from './Components/TaskList'


function App() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="main">
          <TaskList/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
