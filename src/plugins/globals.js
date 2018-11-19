import Vue from 'vue'

Vue.prototype.$toMoney = function(value){
  var aux = value.toFixed(2).split('.')
  return aux[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + aux[1]
}

Vue.prototype.$getMonth = function(value){
  const months = [
    "Janeiro","Fevereiro","Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ]
  return months[value-1]
}

