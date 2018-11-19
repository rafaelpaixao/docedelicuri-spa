<template>
<v-container>
  <template v-if="loading">
<v-layout row justify-center>
      <v-progress-circular
      :size="70"
      class="my-4"
      indeterminate
      color="primary">
      </v-progress-circular>
    </v-layout>
  </template>
  <template v-else>
    <template v-if="monthAnalysis===null">
        Nenhum dado para exibir.
    </template>
    <template v-else>
    <v-layout :row="$vuetify.breakpoint.lgAndUp" :column="$vuetify.breakpoint.mdAndDown">

      <v-flex xs12 mb-3 lg4>
        <v-card class="pa-3 app-card">
          <salary-highlight :total="salaryTotal" :actual="sumComposition(monthAnalysis.salariesTotal)">Total Gasto</salary-highlight>
        </v-card>
        <div class="text-xs-right mt-3" >
          <router-link :to="{name:'payments', params:params}">Ver detalhes do mês</router-link>
        </div>
      </v-flex>

      <v-flex xs12 mb-3 lg4 :mx-4="$vuetify.breakpoint.lgAndUp">
        <v-card class="pa-3 app-card">
          <p class="body-2 text-uppercase grey--text text--darken-2">Total por regime de contratação</p>
          <div v-for="(item, i) in monthAnalysis.salariesByType" :key="i" class="mb-4">
            <salary-highlight :total="salaryTotal" :actual="sumComposition(item.composition)" color="blue">{{item.text}}</salary-highlight>
          </div>
        </v-card>
      </v-flex>

      <v-flex xs12 lg4>
        <v-card class="pa-3 app-card">
          <p class="body-2 text-uppercase grey--text text--darken-2">Total por cargo</p>
          <div v-for="(item, i) in monthAnalysis.salariesByPosition" :key="i" class="mb-4">
            <salary-highlight :total="salaryTotal" :actual="sumComposition(item.composition)" color="success">{{item.text}}</salary-highlight>
          </div>
        </v-card>
      </v-flex>

  </v-layout>
  </template>

  </template>
</v-container>
  
</template>
<script>
import FirebaseDb from '@/firebase'
import SalaryHighlight from '../components/salary-highlight'

export default {
  components:{
    SalaryHighlight
  },
  data(){
    return {
      monthAnalysis: null,
      loading: true,
      salaryTotal: 0,
      params:{
        city: this.$route.params.city,
        entity: this.$route.params.entity,
        year: this.$route.params.year,
        month: this.$route.params.month
      }
    }
  },
  methods:{
    sumComposition(composition){
      return composition.base + composition.benefits + composition.bonus
    },
    progress(value, total){
      return value*100/total
    }
  },
  mounted(){
    const params = this.params

    let path = `payments_reports_month/${params.city}/${params.entity}/${params.year}/${params.month}`
      let self = this
      FirebaseDb.ref(path).once('value').then(function(snapshot) {
        const ma = snapshot.val()
        self.salaryTotal = self.sumComposition(ma.salariesTotal)
        self.monthAnalysis = ma
        self.loading = false
      });
  }
}
</script>
