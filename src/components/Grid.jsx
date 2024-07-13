import styles from './Grid.module.css'

const Grid = (props) => {
  return <div className={styles.grid}>{props.children}</div>;
};

export default Grid;
