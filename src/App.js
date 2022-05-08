import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Menu from './common/Menu';
import Home from './Home';
import Counter from './component/Counter';
// import FunComp  from './component/FunComp';
import ToDoAssignment from './component/ToDoAssignment';
import ComponentModal from './component/ComponentModal';
import ComponentAPI from './component/ComponentAPI';
import FetchAPI from './component/FetchAPI';
import AccordionDemo from './component/Accordion';
import FunToDoComponet from './component/FunToDoComponent';
import DigitalClock from './component/DigitalClocks';
import DigitalClockClass from './component/ComponentDigitalClockClass';
import FormFunctional from './component/FormFn';
import EMI from './component/EMICalculator/EMI';
import Parent from './component/ContextReactDemo/Parent';
import ExpenseTracker from './component/ExpenseTracker/ExpenseTracker';
import CurrencyConverter from './component/CurrencyConverter/CurrencyConverter';

import './sass/Test.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Menu />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-1 bg-success'>Left</div>
            <div className='col-sm-10 col-lg-10 bg-light main-wrapper'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/compmodal' element={<ComponentModal />} />
                <Route path='/todo' element={<ToDoAssignment />} />
                <Route path='/compapi' element={<ComponentAPI />} />
                <Route path='/fetchapi' element={<FetchAPI />} />
                <Route path='/accordemo' element={<AccordionDemo />} />
                <Route path='/funtodolist' element={<FunToDoComponet />} />
                <Route path='/digiclock' element={<DigitalClock />} />
                <Route path='/digiclockclass' element={<DigitalClockClass />} />
                <Route path='/formfn' element={<FormFunctional />} />
                <Route path='/emicalc' element={<EMI />} />
                <Route path='/contextdemo' element={<Parent />} />
                <Route path='/expensetracker' element={<ExpenseTracker />} />
                <Route path='/currencyconverter' element={<CurrencyConverter />} />
                
              </Routes>
            </div>
            <div className='col-lg-1 bg-success'>Aside</div>
          </div>
        </div>
      </main>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
