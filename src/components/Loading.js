import { ReactComponent as Spinner } from "../assets/SVG/spinner.svg";

const Loading = () => {
  return (
    <div className="center-box">
      <Spinner className="spinner" />
    </div>
  );
};

export default Loading;
