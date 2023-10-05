
import NorthIcon from '@mui/icons-material/North';
import Home from './components/Home';


function App() {  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  };
  return (
    <div className="App">
      <Home />
    <button id="to-top-button" onClick={scrollToTop} title="Go To Top"
    className=" fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold transition-colors duration-300">
        <NorthIcon/>
    </button>
    </div>
  );
}

export default App;
