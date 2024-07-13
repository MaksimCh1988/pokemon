import styles from './Pokemon.module.css';
import { memo } from 'react';

const Pokemon_ = ({ name, id, captured, onButtonClick }) => {
  console.log('🎨', 'Pokemon', name);
  return (
    <div
      className={styles.pokemon}
      style={{ backgroundColor: captured ? '#BA0606' : '#069a15' }}
    >
      <h2>{name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <button
        onClick={() => {
          onButtonClick(id);
        }}
      >
        {captured ? 'Отпустить' : 'Поймать'}
      </button>
    </div>
  );
};

export const Pokemon = memo(Pokemon_);
