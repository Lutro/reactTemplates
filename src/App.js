
import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const sections = [
        { title: 'Technology', url: '#' },
      ];
function App() {
  return (
    <div className="App">
    
      <Header />
      
      <navigation>
     
        <Sidebar />
      </navigation>
      
      <main>
        <Main />
      </main>
      
      <footer>
        <p>My Footer</p>
      </footer>
      
    </div>
  );
}

export default App;
