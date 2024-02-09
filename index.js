const perguntas = [
    {
      pergunta: "Qual é a função do método 'push' em JavaScript?",
      respostas: [
        "Adicionar um novo elemento no início do array",
        "Adicionar um novo elemento no final do array",
        "Remover o último elemento do array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código? \n console.log(10 + '20')",
      respostas: [
        "30",
        "1020",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'map' faz em um array JavaScript?",
      respostas: [
        "Remove elementos do array",
        "Itera sobre o array e modifica cada elemento",
        "Verifica se todos os elementos do array satisfazem uma condição",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de selecionar um elemento HTML com o ID 'demo' em JavaScript?",
      respostas: [
        "document.getElement('demo')",
        "document.find('demo')",
        "document.getElementById('demo')",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação estrita (valor e tipo)",
        "Comparação solta (apenas valor)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de 10 == '10' em JavaScript?",
      respostas: [
        "true",
        "false",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'forEach' faz em um array JavaScript?",
      respostas: [
        "Remove elementos do array",
        "Itera sobre o array e executa uma função para cada elemento",
        "Verifica se todos os elementos do array satisfazem uma condição",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de declarar uma função em JavaScript?",
      respostas: [
        "função minhaFuncao() {}",
        "var minhaFuncao = function() {}",
        "function minhaFuncao() {}",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'filter' faz em um array JavaScript?",
      respostas: [
        "Remove elementos do array",
        "Cria um novo array com todos os elementos que passam em um teste fornecido por uma função",
        "Verifica se todos os elementos do array satisfazem uma condição",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }