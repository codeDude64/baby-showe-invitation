import { Box, Fade, Modal, Typography } from '@mui/material';

const ImageModal = ({ src }) => {
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="spring-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="spring-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ImageModal;
