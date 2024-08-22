// hook to initiate loading of flags in prideReducer
import { useEffect, useContext } from "react";
import { PrideDispatchContext } from "../context/prideContext";
import { INIT_PRIDE } from "../context/actions";

export default function useInitPride() {
  const { dispatch } = useContext(PrideDispatchContext);

  useEffect(() => {
    dispatch({ type: INIT_PRIDE });
  }, [dispatch]);
}