import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface IProps {
  closeModal: () => void;
  handleDeleteUser: () => Promise<void>;
  isModalOpan: boolean;
}

export const CustomModal = ({
  closeModal,
  isModalOpan,
  handleDeleteUser,
}: IProps) => {
  return (
    <Dialog
      open={isModalOpan}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Подтвердите удаление </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Вы действительно хотите удалить сотрудника из таблицы?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="warning" variant="outlined">
          <span style={{ textTransform: "capitalize" }}>Отмена</span>
        </Button>
        <Button
          onClick={handleDeleteUser}
          color="info"
          variant="contained"
          autoFocus
        >
          <span style={{ textTransform: "capitalize" }}>Подтвердить</span>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
