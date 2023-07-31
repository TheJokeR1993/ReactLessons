import { Button, Modal } from "@mui/material";
import Forma from "./forma";
import { useEffect, useState } from "react";

const FormPage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [today, setToday] = useState(false);
  useEffect(() => {
    console.log("mount");
  }, []);
  useEffect(
    () => () => {
      console.log("unmount");
    },
    []
  );
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Button onClick={() => setToday((value) => !value)}>Toggle</Button>
      {today && <div>privet</div>}
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
