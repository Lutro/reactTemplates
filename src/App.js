
import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import ToDoList from './components/ToDoList';

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
      <ToDoList />
      
      <footer>
        <p>My Footer</p>
      </footer>
      
    </div>
  );
}

export default App;
