const Challenge = () => {
  const a = 2;
  const b = 2;

  return (
    <div>
      Temos dois valores {a} e {b}
      <div>
        <button onClick={() => console.log(a + b)}>
          Clique aqui para somar
        </button>
      </div>
    </div>
  );
};

export default Challenge;
