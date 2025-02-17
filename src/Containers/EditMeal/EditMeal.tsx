import MealForm from '../../components/MealForm/MealForm.tsx';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { IMealForm } from '../../types';
import axiosApi from '../../axiosApi.ts';

const EditMeal = () => {
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  const editingMealPost= async (mealPost: IMealForm)=> {
    try {
      setLoading(true);
      await axiosApi.put(`meals/${id}.json`, mealPost);
    }catch(e){
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <MealForm isEdit onSubmitFunction={editingMealPost} id={id} isLoading={loading}/>
    </div>
  );
};

export default EditMeal;