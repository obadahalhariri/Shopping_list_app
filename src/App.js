import "./App.css";
import { Header, Contianer, Footer } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ShoppingListsPage, ShoppingListDetailPage } from './pages/index'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Contianer>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shoppingLists' element= {<ShoppingListsPage/>}/>
            <Route path="/list/:id" element= {<ShoppingListDetailPage/>} />
          </Routes>
        </Contianer>
        <Footer />
      </Router>
    </>
  );
}

export default App;
