import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Menu  from './common/Menu';
import Home  from './Home';
import Counter  from './component/Counter';
// import FunComp  from './component/FunComp';
import ToDoAssignment  from './component/ToDoAssignment';
import ComponentModal  from './component/ComponentModal';
import ComponentAPI  from './component/ComponentAPI';
import FetchAPI  from './component/FetchAPI';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main>
    <Menu/>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-1 bg-success'>Left</div>
            <div className='col-sm-10 col-lg-10 bg-light main-wrapper'>
              <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/home' element = {<Home/>}/>
                <Route path='/counter' element = {<Counter/>}/>
                <Route path='/compmodal' element = {<ComponentModal/>}/>
                <Route path='/todo' element = {<ToDoAssignment/>}/>
                <Route path='/compapi' element = {<ComponentAPI/>}/>
                <Route path='/fetchapi' element = {<FetchAPI/>}/>
              </Routes>
            </div>
            <div className='col-lg-1 bg-success'>Aside</div>
        </div>
      </div>
      </main>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
