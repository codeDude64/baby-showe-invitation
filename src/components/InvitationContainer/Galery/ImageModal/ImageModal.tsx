import { Fade, Modal } from '@mui/material';
import { FC } from 'react';

import useStyles from './useStyles';

interface Props {
  src: string;
  title: string;
  show: boolean;
  handleClose: () => void;
}

const ImageModal: FC<Props> = ({ src, title, show, handleClose }) => {
  const { classes } = useStyles();
  return (
    <Modal
      className={classes.modal}
      open={show}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={show}>
        <img src={src} alt={title} className={classes.image} />
      </Fade>
    </Modal>
  );
};

export default ImageModal;
