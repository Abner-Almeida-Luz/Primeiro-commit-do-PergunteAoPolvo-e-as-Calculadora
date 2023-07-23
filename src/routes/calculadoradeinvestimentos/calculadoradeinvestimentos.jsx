import React, { useState } from "react";

function CalculadoraDeInvestimentos() {
  const [capital, setCapital] = useState('');
  const [aporte, setAporte] = useState('');
  const [rendimento, setRendimento] = useState('');
  const [anos, setAnos] = useState('');
  const [meses, setMeses] = useState('');
  const [valorFinal, setValorFinal] = useState("Preencha todos os campos.");

  function calcularInvestimentoMensal() {
    if (isNaN(capital) || isNaN(aporte) || isNaN(rendimento) || isNaN(anos) || isNaN(meses)) {
      setValorFinal("Preencha todos os campos.");
      return;
    } else {
      let capitalCalculado = capital;
      let totalInvestido = 0;
      for (let i = 0; i < anos * 12 + meses; i++) {
        capitalCalculado += aporte + capitalCalculado * (rendimento / 100);
        totalInvestido += aporte;
      }

      const rendimentoAposPeriodo = capitalCalculado - totalInvestido;
      setValorFinal(
        `O valor final depois de ${anos} anos e ${meses} meses e com rendimentos de ${
          rendimento
        }% ao mês será de: R$${capitalCalculado.toFixed(0)}. E o Rendimento total no final do período será de ${rendimentoAposPeriodo.toFixed(
          0
        )} ou 1 / ${(capitalCalculado / rendimentoAposPeriodo).toFixed(0)} vezes a mais que o total investido `
      );
    }
  }

  function calcularInvestimentoAnual() {
    if (isNaN(capital) || isNaN(aporte) || isNaN(rendimento) || isNaN(anos) || isNaN(meses)) {
      setValorFinal("Preencha todos os campos.");
      return;
    } else {
      let capitalCalculado = capital;
      let totalInvestido = 0;
      for (let i = 0; i < anos * 12; i++) {
        capitalCalculado += aporte + capitalCalculado * (rendimento / 12 / 100);
        totalInvestido += aporte;
      }

      const rendimentoAposPeriodo = capitalCalculado - totalInvestido;
      setValorFinal(
        `O valor final depois de ${anos} anos e ${meses} meses e com rendimentos de ${
          rendimento
        }% ao ano será de: R$${capitalCalculado.toFixed(0)}. E o Rendimento total no final do período será R$${rendimentoAposPeriodo.toFixed(
          0
        )} ou 1 / ${(capitalCalculado / rendimentoAposPeriodo).toFixed(0)} a mais que o total investido`
      );
    }
  }

  return (
    <div id="Calculadora-App">
      <div id="CalculadoraDeInvestimentos">
      <div id="BordaDosElementos">
        <div id="CalculadoraDeInvestimentos-inputs">
        <input
          type="number"
          className="ContainerDosElementos"
          id="capital"
          value={capital}
          onChange={(e) => setCapital(parseFloat(e.target.value))}
          placeholder="Capital"
        />
        <input
          type="number"
          className="ContainerDosElementos"
          value={aporte}
          onChange={(e) => setAporte(parseFloat(e.target.value))}
          placeholder="Aporte"
        />
        <input
          type="number"
          className="ContainerDosElementos"
          value={rendimento}
          onChange={(e) => setRendimento(parseFloat(e.target.value))}
          placeholder="Rendimento"
        />
        <input
          type="number"
          className="ContainerDosElementos"
   
          value={anos}
          onChange={(e) => setAnos(parseFloat(e.target.value))}
          placeholder="Anos"
        />
        <input
          type="number"
          className="ContainerDosElementos"
          value={meses}
          onChange={(e) => setMeses(parseFloat(e.target.value))}
          placeholder="Meses"
        />
        </div>
        <button className="ContainerDosElementos" onClick={calcularInvestimentoMensal}>
          Clique aqui para Calcular(Mensal)
        </button>
        <button className="ContainerDosElementos" onClick={calcularInvestimentoAnual} id="ultimobutton">
          Clique aqui para Calcular(Anual)
        </button>
        <p className="ContainerDosElementos" id="ValorFinal">
          {valorFinal}
        </p>
      </div>
      </div>
    </div>
  );
}

export default CalculadoraDeInvestimentos;
