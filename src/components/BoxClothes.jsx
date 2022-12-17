import { Link } from 'react-router-dom';
import styles from '../styles/components/boxclothes.module.css'

export function BoxClothes(props) {
  return (
    <div className={styles.boxclothesContainer}>
      <img className={styles.boxclothesImage} src={props.clothes.photo} alt="Roupa" />

      <ul className={styles.boxclothesDetail}>
        <li>{props.clothes.name}</li>
        <li>Tamanho: {props.clothes.size}</li>
        <li>Cor: {props.clothes.color}</li>
      </ul>

      <Link className={styles.boxclothesButton} to="/formReceivedonation">
        Receber Doação
      </Link>
    </div>
  );
}
