import { makeStyles } from "@mui/styles";
import {keyframes} from "@emotion/react";

const ussStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
    width: '100vw'
  },
  battleButton: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  animation: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '300px'
  },
  result: {
    fontSize: '50px',
    lineHeight: '30px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: '$resultAnimation 1s ease'
  },
  '@keyframes resultAnimation': {
    '0%': {
      fontSize: 0
    },
    '100%': {
      fontSize: '50px',
    },
  }

}));

export default ussStyles;