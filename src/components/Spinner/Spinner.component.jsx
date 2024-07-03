import { SpinnerWrapper, SpinnerOverlay, SpinnerIcon } from "./Spinner.styles";
import { useContext, useEffect } from "react";
import { SpinnerContext } from "../../context/spinner/spinner.context";

import { useSelector } from "react-redux";
import { selectLoading } from "../../store/user/user.selector";

const Spinner = () => {
  const { spinner, setSpinner } = useContext(SpinnerContext);

  const loading = useSelector(selectLoading);

  useEffect(() => {
    setSpinner(loading);
  }, [loading]);

  return (
    <>
      {spinner && (
        <SpinnerWrapper>
          <SpinnerOverlay />
          <SpinnerIcon />
        </SpinnerWrapper>
      )}
    </>
  );
};

export default Spinner;
