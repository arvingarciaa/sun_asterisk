import { Search } from './components/Search'
import { List } from './components/List'
import { Video } from './components/Video'
import { useState, useEffect } from 'react';

function App() {
  const [ searchQuery, setSearchQuery ] = useState('')

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      //fetch data
      console.log(searchQuery)
    }, 500)
    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  }

  return (
    <main className="container">
      <div className="row search">
        <div className="col">
          <Search searchQuery={searchQuery} handleSearch={handleSearch}/>
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
