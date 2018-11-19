<template>
  <v-container>
    <v-layout row wrap>
        <template v-if="payments.length > 0">
          <v-flex v-for="(payment, i) in payments" :key="i" xs12 sm6 md4 lg3>
            <payment-card @show:details="showDetails" :payment="payment" class="ma-1"></payment-card>
          </v-flex>
        </template>
        <template v-else>
          <v-layout row justify-center>
            <v-progress-circular
            :size="70"
            class="my-4"
            indeterminate
            color="primary">
            </v-progress-circular>
          </v-layout>
        </template>
    </v-layout>

    <v-dialog
      v-model="showDialogPayment"
      width="500"
    >
      <v-card class="pa-3">
        <div class="text-xs-right" @click="showDialogPayment=false"><a>Fechar</a></div>
        <div class="mb-2">Matrícula: {{dialogPayment.registration}}</div>
        <div class="">{{dialogPayment.name}}</div>
        <div>{{dialogPayment.position}}</div>
        <div class="mb-2">{{dialogPayment.type}}</div>
        <div>Salário base: R$ {{$toMoney(dialogPayment.salaryBase)}}</div>
        <div>Salário bônus: R$ {{$toMoney(dialogPayment.salaryBonus)}}</div>
        <div>Salário vantagens: R$ {{$toMoney(dialogPayment.salaryBenefits)}}</div>
        <div>Horas semanais: {{dialogPayment.hours}}</div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import FirebaseDb from '@/firebase'
  import PaymentCard from '../components/payment-card'

  export default {
    components:{
      PaymentCard
    },
    data() {
      return {
        payments: [],
        dialogPayment: {
          registration: null,
          name:null,
          position: null,
          type: null,
          salaryBase: 0,
          salaryBonus: 0,
          salaryBenefits: 0,
          salary13: 0,
          hours: 0
        },
        showDialogPayment: false
      }
    },
    methods:{
      showDetails(payload){
        this.dialogPayment = payload
        this.showDialogPayment = true
      }
    },
    created(){
      let path = `payments/${this.$route.params.city}/${this.$route.params.entity}/${this.$route.params.year}/${this.$route.params.month}`
      let self = this
      FirebaseDb.ref(path).once('value').then(function(snapshot) {
        self.payments = snapshot.val()
      });
    }
  }
</script>
