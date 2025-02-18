import { Button, Card } from "react-bootstrap";
import { IMealPost } from "../../types";
import React, { useState } from "react";
import "./CardMeal.css";
import { NavLink } from "react-router-dom";
import LoadingBtn from "../UI/LoadingBtn/LoadingBtn.tsx";

interface Props {
  postMeal: IMealPost;
  deletePostMeal: (id: string) => void;
}

const CardMeal: React.FC<Props> = React.memo(
  ({ postMeal, deletePostMeal }) => {
    const [loading, setLoading] = useState(false);

    const deletePost = () => {
      setLoading(true);
      deletePostMeal(postMeal.id);
      setLoading(false);
    };
    return (
      <Card className="mb-4">
        <div>
          <Card.Header className="bg-primary-subtle">
            {postMeal.mealtime}
          </Card.Header>
          <Card.Body>
            <div className="row row-cols-3 justify-content-sm-between align-items-center">
              <div>{postMeal.description}</div>
              <div className="fw-bold w-auto">{postMeal.calories} kcal</div>

              <div className="w-auto">
                <NavLink
                  className="editBtn"
                  to={`meals/edit-meal/${postMeal.id}`}
                />

                {loading ? (
                  <Button variant="secondary" disabled>
                    <LoadingBtn /> Loading...
                  </Button>
                ) : (
                  <Button variant="secondary" onClick={deletePost}>
                    {" "}
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </Card.Body>
        </div>
        <Card.Footer>Date: {postMeal.date}</Card.Footer>
      </Card>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.postMeal !== nextProps.postMeal;
  },
);

export default CardMeal;
