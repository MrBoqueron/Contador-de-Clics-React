import "../styles.css";

export default function Boton({ texto, estilo, evento }) {
  return (
    <button className={estilo} onClick={evento}>
      {texto}
    </button>
  );
}
