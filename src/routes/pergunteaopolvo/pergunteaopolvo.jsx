import React, { useState } from 'react';

function PergunteAoPolvo() {
    const [respostaPolvo, setRespostaPolvo] = useState('Clique no botão acima');
    const [previousOperation, setPreviousOperation] = useState(0);
    const [currentOperation, setCurrentOperation] = useState(0);
    const [numglobal, setNumglobal] = useState('');

    function Polvo() {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
        const input1 = document.getElementById('Polvo-input1').value;
        const input2 = document.getElementById('Polvo-input2').value;
        const inputs = [input1, input2];
        const escolhafinal = inputs[random(0, inputs.length)];
        setRespostaPolvo(`O Polvo escolheu: ${escolhafinal}`);
    }

    function operations(num) {
        setNumglobal(num);
        const parsedCurrentOperation = parseFloat(currentOperation);
        if (!isNaN(parsedCurrentOperation)) {
            parsedCurrentOperation(parsedCurrentOperation);
        }else {
            setCurrentOperation('0');
        }
        setCurrentOperation('0');
    }

    function equalsbutton() {
        const parsedCurrentOperation = parseFloat(currentOperation);
        setPreviousOperation((prev) => {
            let resultadodaconta = prev;
            switch (numglobal) {
                case '-':
                    resultadodaconta -= parsedCurrentOperation;
                    break;
                case '+':
                    resultadodaconta += parsedCurrentOperation;
                    break;
                case '*':
                    resultadodaconta *= parsedCurrentOperation;
                    break;
                case '/':
                    resultadodaconta /= parsedCurrentOperation;
                    break;
                case '**':
                    resultadodaconta **= parsedCurrentOperation;
                    break;
                case '/100*':
                    resultadodaconta = (prev / 100) * parsedCurrentOperation;
                    break;
                default:
                    break;
            }
            return resultadodaconta;
        });
        setCurrentOperation('0');
    }

    function numerosnormais(num) {
        setCurrentOperation((prev) => {
            if (num === '0-') {
                return '0';
            } else if (num === '0-1') {
                return prev.substring(0, prev.length - 1);
            } else {
                return prev + num;
            }
        });
    }

    return (
        <div id="App">
            <section id="Parte-Polvo">
                <img
                    id="Polvo-img"
                    src="https://pergunteaopolvo.com.br/static/media/polvo.3253b186.webp"
                    alt=""
                />
                <br />
                <input type="text" id="Polvo-input1" className="Polvo-input" />
                vs.
                <input type="text" id="Polvo-input2" className="Polvo-input" />
                <br />
                <button id="Polvo-botao" onClick={Polvo}>
                    Clique aqui
                </button>
                <br />
                <p id="Polvo-res">{respostaPolvo}</p>
                <p id="Polvo-contagem"></p>
            </section>
            <section id="Parte-Calculadora">
                    <div id="Calculadora-Container">
                    <div id="Calculadora-operations">
                        <p id="Calculadora-previuosoperations">
                            {previousOperation !== null ? `${previousOperation} ${numglobal}` : ''}
                        </p>
                        <p id="Calculadora-currentoperation" className="empty" placeholder="clique nos botoes">
                            {currentOperation}
                        </p>
                    </div>
                    <button id="um" className="Calculadora-botao" onClick={() => numerosnormais('1')}>
        1
    </button>
    <button id="dois" className="Calculadora-botao" onClick={() => numerosnormais('2')}>
        2
    </button>
    <button id="tres" className="Calculadora-botao" onClick={() => numerosnormais('3')}>
        3
    </button>
    <button id="CE" className="Calculadora-botao" onClick={() => numerosnormais('0-')}>
        CE
    </button>
    <button id="voltar" className="Calculadora-botao" onClick={() => numerosnormais('0-1')}>
        ESQ
    </button>
    <button id="quatro" className="Calculadora-botao" onClick={() => numerosnormais('4')}>
        4
    </button>
    <button id="cinco" className="Calculadora-botao" onClick={() => numerosnormais('5')}>
        5
    </button>
    <button id="seis" className="Calculadora-botao" onClick={() => numerosnormais('6')}>
        6
    </button>
    <button id="mais" className="Calculadora-botao" onClick={() => operations('+')}>
        +
    </button>
    <button id="menos" className="Calculadora-botao" onClick={() => operations('-')}>
        -
    </button>
    <button id="sete" className="Calculadora-botao" onClick={() => numerosnormais('7')}>
        7
    </button>
    <button id="oito" className="Calculadora-botao" onClick={() => numerosnormais('8')}>
        8
    </button>
    <button id="nove" className="Calculadora-botao" onClick={() => numerosnormais('9')}>
        9
    </button>
    <button id="multiplicar" className="Calculadora-botao" onClick={() => operations('*')}>
        *
    </button>
    <button id="dividir" className="Calculadora-botao" onClick={() => operations('/')}>
        /
    </button>
    <button id="zero" className="Calculadora-botao" onClick={() => numerosnormais('0')}>
        0
    </button>
    <button id="elevar" className="Calculadora-botao" onClick={() => operations('**')}>
        **
    </button>
    <button id="porcentagem" className="Calculadora-botao" onClick={() => operations('/100*')}>
        %
    </button>
    <button id="igual" className="Calculadora-botao" onClick={equalsbutton}>
        =
    </button>
                    </div>
            </section>
        </div>
    );
}

export default PergunteAoPolvo;
