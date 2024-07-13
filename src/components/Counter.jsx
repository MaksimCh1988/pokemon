import React from 'react';
import styles from './Counter.module.css'

const Counter = ({currentScore,maxScore}) => {
  return (
    <div className={styles.counter}>
      <h1>Поймано покемонов</h1>
      <span> {currentScore}/{maxScore} </span>
    </div>
  )
};

export default Counter;
