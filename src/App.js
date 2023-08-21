import Header from './Components/Header';
import Main from './Components/Main';
import { DataProvider } from './Contexts/dataContext';

function App() {
  return (
    <DataProvider>
      <div className="flex flex-col min-h-screen min-w-[280px]">
        <Header />
        <Main />
      </div>
    </DataProvider>
  );
}

export default App;
