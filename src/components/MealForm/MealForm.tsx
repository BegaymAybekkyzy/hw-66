import { Button, Form } from "react-bootstrap";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { IMealForm } from "../../types";
import LoadingBtn from "../UI/LoadingBtn/LoadingBtn.tsx";
import axiosApi from "../../axiosApi.ts";
import { NavLink } from "react-router-dom";
import Loader from "../UI/Loader/Loader.tsx";
import { mealTime } from "../../constants.ts";

interface Props {
  isEdit?: boolean;
  isLoading?: boolean;
  id?: string;
  onSubmitFunction: (postMeal: IMealForm) => void;
}

const MealForm: React.FC<Props> = ({
  isEdit = false,
  onSubmitFunction,
  isLoading = false,
  id,
}) => {
  const [form, setForm] = useState<IMealForm>({
    mealtime: "",
    description: "",
    calories: 0,
    date: String(new Date().toISOString().slice(0, 10)),
  });

  const [loading, setLoading] = useState(false);

  const fetchOneMealPost = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await axiosApi<IMealForm>(`meals/${id}.json`);
      setForm(res.data);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchOneMealPost();
  }, [id, fetchOneMealPost]);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitFunction({ ...form });
    if (!isEdit) {
      setForm({
        mealtime: "",
        description: "",
        date: String(new Date().toISOString().slice(0, 10)),
        calories: 0,
      });
    }
  };

  const onChangeInput = (
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { value, name } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 className="mb-4 text-primary-emphasis">
        {isEdit ? "Edit" : "Add"} meal
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <Form onSubmit={onSubmitForm}>
          <Form.Group className="mb-3">
            <Form.Select
              name="mealtime"
              required
              disabled={isLoading}
              value={form.mealtime}
              onChange={onChangeInput}
            >
              <option value="" disabled>
                Open this select menu
              </option>
              {mealTime.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Meal description</Form.Label>
            <Form.Control
              name="date"
              value={form.date}
              type="date"
              required
              disabled={isLoading}
              onChange={onChangeInput}
              placeholder="Meal description"
            />
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
            <Form.Label>Meal calories</Form.Label>
            <Form.Control
              name="calories"
              required
              disabled={isLoading}
              type="number"
              min={0}
              value={form.calories}
              onChange={onChangeInput}
              placeholder="kcal"
            />
          </Form.Group>
          {isLoading ? (
            <Button variant="primary" disabled type="submit">
              <LoadingBtn /> Loading...
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              {" "}
              Save
            </Button>
          )}
          <NavLink to="/" className="btn btn-secondary ms-3">
            Cancel
          </NavLink>
        </Form>
      )}
    </>
  );
};

export default MealForm;
