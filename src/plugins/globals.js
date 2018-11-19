import Vue from 'vue'

Vue.prototype.$toMoney = function(value){
  return value.toFixed(2).replace('.',',')
}

Vue.prototype.$getMonth = function(value){
  const months = [
    "Janeiro","Fevereiro","Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ]
  return months[value-1]
}

