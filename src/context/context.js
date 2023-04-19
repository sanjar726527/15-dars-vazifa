import React, { createContext, useState } from "react";

export const Context = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  console.log(modal);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  return (
    <Context.Provider value={[modal, setModal, handleClose, handleShow]}>
      {children}
    </Context.Provider>
  );
};
