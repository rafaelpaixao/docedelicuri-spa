<template>
  <v-card class="pt-3 px-4">
    <div class=" caption text-xs-center text-uppercase font-weight-light grey--text text--darken-4">
      {{payment.type}}
    </div>
    <div class="subheading text-uppercase font-weight-bold grey--text text--darken-4 text-xs-center mb-5">
      {{payment.position}}
    </div>
    <salary-highlight class="pb-4" v-if="payment.salaryBase > 0" :total="salaryTotal" :actual="payment.salaryBase" color="info">Salário base</salary-highlight>
    <salary-highlight class="pb-4" v-if="payment.salaryBonus > 0" :total="salaryTotal" :actual="payment.salaryBonus" color="info">Salário Bônus</salary-highlight>
    <salary-highlight class="pb-4" v-if="payment.salaryBenefits > 0" :total="salaryTotal" :actual="payment.salaryBenefits" color="info">Salário Vantagens</salary-highlight>
    <div class="text-xs-center pb-4" >
      <a @click="$emit('show:details',payment)">Ver detalhes</a>
    </div>
  </v-card>
</template>
<script>
import SalaryHighlight from './salary-highlight'
export default {
  components:{
    SalaryHighlight
  },
  props:{
    payment:{
      type: Object,
      default: null
    }
  },
  computed:{
    salaryTotal(){
      return this.payment.salaryBase + this.payment.salaryBonus + this.payment.salaryBenefits
    },
    salaryByHour(){
      return this.salaryTotal / (this.payment.hours * 4)
    }
  },
  methods:{
    emReais(value){
      let aux = "R$ "+value
      return aux.replace('.',',')
    }

  }
}
</script>
