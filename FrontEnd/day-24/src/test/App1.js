import {MovieProvider} from "./MovieContext"
import MovieList from "./Movies"
import Nav from "./Nav"

function App() {
  return (
    <MovieProvider>
      <Nav/>
      <MovieList />
    </MovieProvider>
  );
}

export default App;
