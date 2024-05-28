const TemplateExprassion = () => {
  const name = "Momoko";

  const data = {
    age: 21,
    job: "Singer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como {data.job}</p>
      <p>E possui {data.age} anos</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExprassion;
