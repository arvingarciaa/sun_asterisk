import '../styles/style.css'

interface Props {
  selectedVideo: Video; 
}

interface Video {
  snippet: {
    title: string;
    description: string;
    [x:string]: unknown;
  };
  id: {
    videoId: string;
  }
  [x:string]: unknown;
}


export const Video = ({selectedVideo}: Props) => {
  const unescape = (str: string) => {
    return str.replace(/&#(\d+);/g, (_match, dec) => String.fromCharCode(dec))
  }
  const url = selectedVideo ? `https://www.youtube.com/embed/${selectedVideo?.id?.videoId}` : '';
  const title = selectedVideo ? selectedVideo?.snippet?.title : '';
  const description = selectedVideo ? selectedVideo?.snippet?.description : '';
  if(Object.keys(selectedVideo).length === 0){
    return (
      <>
        <div className="loading">
          <p className="placeholder-glow">
            <span className="placeholder col-12 main-video"></span>
          </p>
          <p className="h4 placeholder-glow">
            <span className="placeholder col-4"></span>
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-3"></span>
            &#160;
            <span className="placeholder col-4"></span>
            &#160;
            <span className="placeholder col-4"></span>
            <span className="placeholder col-5"></span>
            &nbsp;
            <span className="placeholder col-5"></span>
          </p>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          <div className="main-video">
            <iframe src={url} title="Video Player" width="100%" height="100%" />
          </div>
          <p className="h4 main-video-title">
            {unescape(title)}
          </p>
          <p className="main-video-subtitle">
            {description}
          </p>
        </div>
      </>
    )
  }
  
}
