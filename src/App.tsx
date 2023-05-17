import { Search } from './components/Search'
import { List } from './components/List'
import { Video } from './components/Video'
import { useState, useEffect } from 'react';

interface Video {
  snippet: Snippet;
  id: {
    videoId: string;
  }
  [x:string]: unknown;
}

interface Snippet {
  title: string;
  description: string;
  [x:string]: unknown;
}

function App() {
  const [ searchQuery, setSearchQuery ] = useState('')
  const [ searchData, setSearchData ] = useState([])
  const [ selectedVideo, setSelectedVideo ] = useState({} as Video);

  const KEY = "AIzaSyA_JVcoI3Euk120dfbHfV7KnouXP549hGA";

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      const fetchData = async () => {
        await fetch("https://www.googleapis.com/youtube/v3/search?key="+KEY+"&maxResults=5&type=video&part=snippet&q="+searchQuery, {
          headers: {}
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          setSelectedVideo(data.items[0]);
          setSearchData(data.items);
        })
      };
      if (searchQuery.length > 2) fetchData();
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  }

  const handleChangeSelected = (idx: number) => {
    setSelectedVideo(searchData[idx]);
  }

  return (
    <main className="container">
      <div className="row search">
        <div className="col">
          <Search searchQuery={searchQuery} handleSearch={handleSearch}/>
        </div>
      </div>
      <section className="row video-row">
        <aside className="col-lg-8 col-md-12">
          <Video selectedVideo={selectedVideo}/>
        </aside>
        <aside className="col-lg-4 col-md-12 video-list">
          <List searchData={searchData} handleChangeSelected={handleChangeSelected}/>
        </aside>
      </section>
    </main>
  )
}

export default App
