import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div>
        <NavLink className="btn btn-primary" to="meals/add-new-meal">Add new meal</NavLink>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Home;