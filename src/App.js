
import Search from './components/search/Search';
import './app.css'
function App() {
  return (
    <section className="App">
      <div className="header">
        <div className="container">
          <a className="logo" href="index.html">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8zm7-2V5h-5a2 2 0 0 0-2 2v12h7zm-9 0V7a2 2 0 0 0-2-2H4v14h7z" />
            </svg>
            <h3>Booky</h3>
          </a>
          <h2 className="desc">Welcome To Our Book App, Choose your Book And Start Reading</h2>
        </div>
      </div>
      <h1 className='title-b'>Search Books</h1>
      <Search />
    </section>
    
  );
}

export default App;
