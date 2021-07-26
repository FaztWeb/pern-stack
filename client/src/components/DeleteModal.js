import React, { useState } from "react";
import { Modal, Icon, Header, Button } from "semantic-ui-react";

const DeleteModal = ({ task, handleDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={<Button color="red" icon="trash" />}
    >
      <Header icon>
        <Icon name="archive" />
        Do you want to delete the task "{task.description}"?
      </Header>
      <Modal.Content>
        <p style={{ textAlign: "center" }}>You cannot recover this data</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          inverted
          onClick={async () => {
            await handleDelete(task.id);
            setOpen(false);
          }}
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteModal;
