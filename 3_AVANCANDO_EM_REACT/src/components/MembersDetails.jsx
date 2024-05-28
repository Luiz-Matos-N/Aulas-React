const MembersDetails = ({ nome, idade, altura, profissao, picture }) => {
  return (
    <div>
      <h2>Babymetal</h2>
      <img src={picture} alt={nome} />
      <ul>
        <ol>Integrante: {nome}</ol>
        <ol>Idade: {idade}</ol>
        <ol>Altura: {altura}m</ol>
        <ol>Profissão: {profissao}</ol>
        {idade >= 18 && <p>Pode dirigir</p>}
        {altura <= 1.58 && <p>Nanica</p>}
        {altura >= 1.58 && <p>Deusa</p>}
      </ul>
    </div>
  );
};

export default MembersDetails;
