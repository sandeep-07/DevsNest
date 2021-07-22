import {useFetch} from "./hook"
const URL="https://hn.algolia.com/api/v1/search?query=react"
function App() {
  const {loading,error,data}=useFetch(URL)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
