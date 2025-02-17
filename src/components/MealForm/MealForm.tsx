import { Button, Form } from 'react-bootstrap';
import * as React from 'react';
import { useState } from 'react';
import { IMealForm } from '../../types';
import LoadingBtn from '../UI/LoadingBtn/LoadingBtn.tsx';

interface Props {
  isEdit?: boolean;
  isLoading?: boolean;
  onSubmitFunction: (postMeal: IMealForm) => void;
}

const MealForm: React.FC<Props> = ({ isEdit = false, onSubmitFunction, isLoading = false }) => {
  const [form, setForm] = useState<IMealForm>({
    mealtime: "",
    description: "",
    kcal: 0,
  });

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitFunction({...form});
    setForm({
      mealtime: "",
      description: "",
      kcal: 0,
    });
  };

  const onChangeInput =
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 className="mb-4 text-primary-emphasis">{isEdit ? "Edit" : "Add"} meal</h1>
      <Form onSubmit={onSubmitForm}>
        <Form.Group className="mb-3">
          <Form.Select
            name="mealtime"
            required
            disabled={isLoading}
            value={form.mealtime}
            onChange={onChangeInput}>
            <option value="" disabled>Open this select menu</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Snack">Snack</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Meal description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            required
            disabled={isLoading}
            value={form.description}
            onChange={onChangeInput}
            placeholder="Meal description"
          />
        </Form.Group>
        <Form.Group className="mb-3 w-25">
          <Form.Label>Meal kcal</Form.Label>
          <Form.Control
            name="kcal"
            required
            disabled={isLoading}
            type="number"
            value={form.kcal}
            onChange={onChangeInput}
            placeholder="kcal"
          />
        </Form.Group>
        { isLoading
          ? <Button variant="primary" disabled type="submit"><LoadingBtn/> Loading...</Button>
          : <Button variant="primary" type="submit"> Save</Button>
        }
      </Form>
    </>
  );
};

export default MealForm;
