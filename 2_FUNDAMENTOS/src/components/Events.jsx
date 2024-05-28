const Events = () => {
  const handleMyEvent = (e) => {
    e.preventDefault();
    console.log("Ativou o evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Click")}>
          Clique aqui também!
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deve existir :)");
            }
          }}
        >
          Clica aqui, por favor!
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
