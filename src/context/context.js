import React, { createContext, useState } from "react";

export const Context = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const onModal = (modal) => {
    setModal(!modal);
  };

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  return (
    <Context.Provider
      value={[data, setData, modal, setModal, onModal, handleClose, handleShow]}
    >
      {children}
    </Context.Provider>
  );
};
