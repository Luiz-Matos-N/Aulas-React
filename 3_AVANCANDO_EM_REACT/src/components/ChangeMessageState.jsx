const ChangeMessageState = ({ changeMessage }) => {
  const messages = ["Suzuka", "Moa", "Momoko", "Babymetal"];

  return (
    <div>
      <button onClick={() => changeMessage(messages[0])}>1</button>
      <button onClick={() => changeMessage(messages[1])}>2</button>
      <button onClick={() => changeMessage(messages[2])}>3</button>
      <button onClick={() => changeMessage(messages[3])}>4</button>
    </div>
  );
};

export default ChangeMessageState;
