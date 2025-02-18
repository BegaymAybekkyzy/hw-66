import { Spinner } from "react-bootstrap";

const LoadingBtn = () => {
  return (
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  );
};

export default LoadingBtn;
