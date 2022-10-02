import PulseLoader from "react-spinners/PulseLoader";
import { SpinnerContainer } from "./style";

export function Spinner() {
  return (
    <SpinnerContainer>
      <PulseLoader className="spinner" color={"#afc2d4"} loading={true} />
    </SpinnerContainer>
  );
}
