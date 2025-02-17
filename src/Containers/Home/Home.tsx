import { NavLink } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import { IMealAPI, IMealPost } from '../../types';
import Loader from '../../components/UI/Loader/Loader.tsx';
import CardMeal from '../../components/CardMeal/CardMeal.tsx';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allMeals, setAllMeals] = useState<IMealPost[]>([]);

  const fetchData = useCallback( async () => {
    try {
      setLoading(true);
      const res = await axiosApi.get<IMealAPI>("meals.json");
      if (!res.data) return;
      const mealsArray = Object.keys(res.data).map((key) => ({
          id: key,
          ...res.data[key]
        }));
      setAllMeals(mealsArray);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const deletePostMeal = async (idMeal: string) => {
    try {
      await axiosApi.delete(`meals/${idMeal}.json`);
      setAllMeals(prevState => prevState.filter((meal) => meal.id !== idMeal));
    } catch (e) {
      alert(e);
    }
  };

  let content: React.ReactNode;

  if (loading) content = <Loader />;
  if (!loading) {
    if (allMeals.length > 0) {
        content = (
        <div className="w-75 mx-auto">
          {allMeals.map((meal) => (
            <CardMeal
              key={meal.id}
              deletePostMeal={deletePostMeal}
              postMeal={meal} />
          ))}
        </div>
      );
    } else {
      content = <h1 className="text-center">Tracker's empty</h1>;
    }
  }

  return (
    <div>
      <div className="w-75 mx-auto mb-3 row row-cols-2 justify-content-sm-between">
        <span className="d-block">Total kcal</span>
        <NavLink className="btn btn-primary w-auto" to="meals/add-new-meal">Add new meal</NavLink>
      </div>

      <div>
        {content}
      </div>
    </div>
  );
};

export default Home;