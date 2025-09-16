const TemplateExpressions = () => {
  const name = "Ambrósio";
  const data = {
    age: 38,
    job: "CEO",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
    </div>
  );
};

export default TemplateExpressions;
