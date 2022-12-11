const nome = document.querySelector('#nome') 
const saldo = document.querySelector('#saldo')
const saldoArmazenado = document.querySelector('#saldoArmazenado')
const sacar = document.querySelector('#sacar')
const armazenar = document.querySelector('#armazenar')

let cartao = {
    nomeDotitular:'Daniel Marcos Pires',
    saldo:0,
}
let banco = {
    saldo:200,
}

saldo.innerHTML = parseFloat(cartao.saldo).toFixed(2)
saldoArmazenado.innerHTML = parseFloat(banco.saldo).toFixed(2)

sacar.addEventListener('click',()=>{
  const valor = banco.saldo > 0;
  if(valor){
    let valorDesejavel = parseFloat(prompt('Insira o valor para retirar'))
    cartao.saldo += valorDesejavel;
    
    // const cartaoTotal = parseFloat(cartao.saldo).toFixed(2)

    banco.saldo -= valorDesejavel
    // const total = parseFloat(banco.saldo).toFixed(2)

      saldo.innerHTML = parseFloat(cartao.saldo).toFixed(2)
      saldoArmazenado.innerHTML = parseFloat(banco.saldo).toFixed(2)
      
  }else{
   alert("Seu banco está vazio")
  }
})
armazenar.addEventListener('click',()=>{
  if(cartao.saldo > 0){
    let valor = parseFloat(prompt("insira o valor para sacar"));
    cartao.saldo -= valor;
    banco.saldo += valor;

    saldo.innerHTML = parseFloat(cartao.saldo).toFixed(2)
    saldoArmazenado.innerHTML = parseFloat(banco.saldo).toFixed(2);   
  }else{
    alert('Voce não possui saldo no cartão')
  }
})



