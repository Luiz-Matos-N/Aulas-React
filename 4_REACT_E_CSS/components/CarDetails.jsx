/* eslint-disable react/prop-types */
import styles from "./CarDetails.module.css";
const CarDetails = ({ brand, km, color, newCar }) => {
  const newBrand = styles.brand;

  return (
    <div className={styles.div}>
      <h2 className={styles.title}>Detalhes do carro</h2>
      <ul>
        <li className={newBrand}>Marca: {brand}</li>
        <li className={styles.km}>KM: {km}</li>
        <li style={color ? { color: `${color}` } : null}>Cor: {color}</li>
      </ul>
      {newCar && <p className={styles.newCar}>Este carro é novo!</p>}
    </div>
  );
};

export default CarDetails;
