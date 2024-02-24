import { useState } from "react";
import ussStyles from "./appStyle";
// import battleAnimation from './assets/Animation - 1708668877016.gif';
import animationData from './assets/Animation - 1708668877016.json';
import { Button } from '@mui/material';
import Lottie from 'react-lottie';

function App() {
  const styles = ussStyles();
  const [isBattle, setBattle] = useState<string>(null);
  // const [isAnimation, setAnimation] = useState<boolean>(false);
  // const [isVictory, seIsVictory] = useState<boolean>(false);
  // const [isDefeat, setIsDefeat] = useState<boolean>(false)
  const [result, setResult] = useState<string>(null);

  const handleBattleClick = () => {
    setTimeout(() => {
      setBattle('start');
      // setAnimation(true);
    }, 300)
    setTimeout(() => {
      // setAnimation(false);
      setBattle('end');
      const random = Math.random();
      if (random > 0.5) {
        setResult('victory');
      } else {
        setResult('defeat');
      }
    }, 10000)
  }
  return (
    <div className={styles.wrapper}>
      {!isBattle &&
        <Button className={styles.battleButton} onClick={handleBattleClick} variant={"contained"}>Start battle</Button>
      }
      {/*{(isBattle === 'start' &&*/}
      {/*  // <img className={styles.animation} src={battleAnimation} alt="battle"/>*/}
      {(isBattle === 'start') &&
        <div className={styles.animation}>
          <Lottie
            height={300}
            width={300}
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
          />
        </div>
      }
      {(result === 'victory') &&
        <h1 className={styles.result}>Victory</h1>
      }
      {(result === 'defeat') &&
        <h1 className={styles.result}>Defeat</h1>
      }
    </div>
  )
}

export default App
