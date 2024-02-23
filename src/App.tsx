import { useState } from "react";
import ussStyles from "./appStyle";
import battleAnimation from './assets/Animation - 1708668877016.gif';
import { Button } from '@mui/material';

function App() {
  const styles = ussStyles();
  const [isBattle, setBattle] = useState<boolean>(false);
  const [isAnimation, setAnimation] = useState<boolean>(false);
  const [isVictory, seIsVictory] = useState<boolean>(false);
  const [isDefeat, setIsDefeat] = useState<boolean>(false)

  const handleBattleClick = () => {
    setTimeout(() => {
      setBattle(true);
      setAnimation(true);
    }, 300)
    setTimeout(() => {
      setAnimation(false);
      const random = Math.random();
      if (random > 0.5) {
        seIsVictory(true);
      } else {
        setIsDefeat(true);
      }
    }, 10000)
  }
  return (
    <div className={styles.wrapper}>
      {!isBattle &&
        <Button className={styles.battleButton} onClick={handleBattleClick} variant={"contained"}>Start battle</Button>
      }
      {isAnimation &&
        <img className={styles.animation} src={battleAnimation} alt="battle"/>
      }
      {isVictory &&
        <h1 className={styles.result}>Victory</h1>
      }
      {isDefeat &&
        <h1 className={styles.result}>Defeat</h1>
      }
    </div>
  )
}

export default App
