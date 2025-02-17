import './App.css';
import Layout from './components/Layout/Layout.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import AddNewMeal from './Containers/AddNewMeal/AddNewMeal.tsx';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Home />} />
          <Route path="meals/add-new-meal" element={<AddNewMeal/>}/>
        </Routes>
      </Layout>
    </>
  );

};

export default App;
