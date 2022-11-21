import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Income from './components/Income';
import IncomeDetails from './components/IncomeDetails'
import Header from './components/Header';

function App() {
  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
      <div className='bg-[#F5E8C7] shadow-2xl lg:w-[50vw] lg:h-[60vh]'>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path={'/'} element={<Income></Income>}></Route>
          <Route path={'/income_details'} element={<IncomeDetails></IncomeDetails>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
