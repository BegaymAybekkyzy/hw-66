import "./App.css";
import Layout from "./components/Layout/Layout.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home.tsx";
import AddNewMeal from "./Containers/AddNewMeal/AddNewMeal.tsx";
import EditMeal from "./Containers/EditMeal/EditMeal.tsx";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Home />} />
          <Route path="meals/add-new-meal" element={<AddNewMeal />} />
          <Route path="meals/edit-meal/:id" element={<EditMeal />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
