import './App.css'
import { Search } from './components/Search'
import { List } from './components/List'
import { Video } from './components/Video'

function App() {

  return (
    <main className="container">
      <div className="row search">
        <div className="col">
          <Search />
        </div>
      </div>
      <div className="row video-row">
        <div className="col main-video">
          <Video />
        </div>
        <div className="col video-list">
          <List />
        </div>
      </div>
    </main>
  )
}

export default App
