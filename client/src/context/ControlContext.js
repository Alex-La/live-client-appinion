import { createContext } from "react";

const ControlContext = createContext({
  data: null,
  startLive: null,
  setStartLive: () => {},
  expand: null,
  setExpand: () => {},
  setClose: () => {},
  isMobile: null,
  setIsMobile: () => {},
});

export default ControlContext;
