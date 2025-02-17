import MealForm from '../../components/MealForm/MealForm.tsx';
import { IMealForm } from '../../types';
import axiosApi from '../../axiosApi.ts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const AddNewMeal = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitNewMeals = async (postMeal: IMealForm) => {
    try {
      setLoading(true);
      await axiosApi.post("meals.json", postMeal);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
      navigate('/');
    }
  };

  return (
    <div className="w-75 mx-auto">
        <MealForm onSubmitFunction={onSubmitNewMeals} isLoading={loading} />
    </div>
  );
};

export default AddNewMeal;