let campoIdade;
let campoComedia;
let campoAventura;

function setup() {
  createCanvas(400, 200);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoComedia = createCheckbox("Gosta de comedia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeComedia, gostaDeAventura);

  fill(color(0, 0, 0));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeComedia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Golpe baixo";
    } else {
      if (idade >= 12) {
        if(gostaDeComedia || gostaDeAventura) {
          return "Esposa de mentirinha";          
    } else {
          return "Gente grande";
        }
      } else {
        if (gostaDeComedia) {
          return "Pixels";
        } else {
          return "Bolt- Supercão";
        }
      }
    }
  } else {
    if (gostaDeComedia) {
      return "Up - altas aventuras";
    } else {
      return "Procurando nemo";
    }
  }
}
