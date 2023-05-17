
interface Props {
  searchData: Video[];
  handleChangeSelected: (arg0: number)=>void;
}

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
  thumbnails: {
    medium: {
      url: string
    }
  }
  [x:string]: unknown;
}


export const List = ({searchData, handleChangeSelected}: Props) => {
  const unescape = (str: string) => {
    return str.replace(/&#(\d+);/g, (_match, dec) => String.fromCharCode(dec))
  }

  if(searchData.length <= 0){
    return (
      <>
        <div className="loading">
          <p className="placeholder-glow">
            <span className="placeholder col-6 list-video"></span>
            <span className="placeholder col-5 list-video-text"></span>
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-6 list-video"></span>
            <span className="placeholder col-5 list-video-text"></span>
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-6 list-video"></span>
            <span className="placeholder col-5 list-video-text"></span>
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-6 list-video"></span>
            <span className="placeholder col-5 list-video-text"></span>
          </p>
        </div>
      </>
    )
  } else {
    return (
      <ul>
        {searchData.map((item, idx) => {
          return(
            <li key={item.id.videoId} className="row list-video" onClick={() => {handleChangeSelected(idx)}}>
              <span className="list-video-image-container col-6">
                <img
                  width="100%"
                  className="list-video-image"
                  alt={item.snippet.title}
                  src={item.snippet.thumbnails.medium.url}
                />
              </span>
              <p className="list-video-text col-5">{unescape(item.snippet.title)}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}
