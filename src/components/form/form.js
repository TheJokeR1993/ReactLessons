import { Button, Modal } from "@mui/material";
import Forma from "./forma";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateButton } from "../../features/button/button";

const FormPage = () => {

  const isOpen = useSelector((state) => state.button.isOpen);
  const dispatch=useDispatch()
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
 
  
 
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Button onClick={() => dispatch(updateButton(!isOpen))}>Toggle</Button>
      {isOpen && <div>privet</div>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal_container">
          <Forma close={handleClose} />
        </div>
      </Modal>
    </>
  );
};
export default FormPage;
