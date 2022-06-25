import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Advertising from './components/advertising/Advertising';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Advertising />
        <Main />
      </div>
    </div>
  );
}

export default App;
