import "./spinner.styles.js";
import { SpinnerContainer,SpinnerOverlay } from "./spinner.styles.js";
const Spinner = () => {
  return (
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
  );
};

export default Spinner;