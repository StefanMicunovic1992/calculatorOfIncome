import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Income from './components/Income/Income';
import IncomeDetails from './components/IncomeDetails/IncomeDetails'
import Header from './components/Header/Header';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-50'>
      <div className='bg-[#F5E8C7] shadow-2xl'>
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
