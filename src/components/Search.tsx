import '../styles/style.css'

interface Props {
  searchQuery: string;
  handleSearch: (arg0: string)=>void;
}

export const Search = ({searchQuery, handleSearch}: Props) => {
  return (
    <div className="search-bar">
      <input type="text" className="form-control" placeholder="Search..." value={searchQuery} onChange={(e) => handleSearch(e.target.value)}></input>
    </div>
  )
}
