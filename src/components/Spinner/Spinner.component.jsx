import { SpinnerWrapper, SpinnerOverlay, SpinnerIcon } from "./Spinner.styles";
import { useContext, useEffect } from "react";
import { SpinnerContext } from "../../context/spinner/spinner.context";

import { useSelector } from "react-redux";
import { selectUserLoading } from "../../store/user/user.selector";
import { selectCollectionLoading } from "../../store/collections/collection.selector";

const Spinner = () => {
  const { spinner, setSpinner } = useContext(SpinnerContext);

  const userLoading = useSelector(selectUserLoading);
  const collectionLoading = useSelector(selectCollectionLoading);

  const loading = userLoading || collectionLoading;

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
