const countdown = () => {
  //instanciando a data atual, com todas as informações do dia
  const data = new Date();
  //aqui é hardcode para ter o dia exato desejado, pretendo mudar para que não seja apenas ano novo
  const diaTarget = 01;
  const mesTarget = 01;
  const anoTarget = 2021;

  //e então instancio a data que quero, para que fique um objeto bonito do mesmo jeito que o "data"
  const dataTarget = new Date(`${anoTarget}-${mesTarget}-${diaTarget}`);

  //vejo no console o dia de hoje
//   console.log(data);
  //vejo o dia que quero, o ruim é que só botei dia, mes e ano, então as horas e tals tá tudo zerado mas é perfeito pra ano novo
//   console.log(dataTarget);
  //parece que gettime retorna em millisegundos a partir de 1970 até o objeto, então eu vejo qnts milisegundos tem de 1970 até hj
//   console.log("tempo agora: " + data.getTime());

  //calculo a diferença em millisegundos entre a data que quero até hoje
  const diferença = dataTarget.getTime() - data.getTime();
  //vejo a diferença em millisegundos
//   console.log(diferença);

  //converto millisegundos para segundos, padrão
  const segundosConvertido = Math.floor(diferença / 1000);
//   console.log(segundosConvertido);

  //converto segundos para dias
  const diasConvertido = Math.floor(segundosConvertido / (3600 * 24));
//   console.log(diasConvertido);

  // converto os segundos restantes para horas (segundosConvertido - (diasConvertido * (3600 * 24)))
  const horasConvertido = Math.floor(
    (segundosConvertido - diasConvertido * (3600 * 24)) / 3600
  );
//   console.log(horasConvertido);

  // mesma logica da hora, só que pra minutos
  const minutosConvertido = Math.floor(
    (segundosConvertido -
      diasConvertido * (3600 * 24) -
      horasConvertido * 3600) /
      60
  );
//   console.log(minutosConvertido);

  //pego o restante da divisão entre segundos e 60 (minutos) representado pela letra B na imagem do cáculo
  const segundos = segundosConvertido % 60;
  console.log(segundos);

  //aqui o resultado de qnt tempo falta

  return (`${diasConvertido} dias, ${horasConvertido} horas, ${minutosConvertido} minutos e ${segundos} segundos`);
};

var elementoTeste = document.querySelector(".teste");

const mostraCountdown = () => {
    setInterval(() => { elementoTeste.innerHTML = countdown() }, 1000);
}



