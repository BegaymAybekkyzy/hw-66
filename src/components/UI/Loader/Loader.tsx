import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{ height: "80vh" }}
      className="container m-auto d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
