<template>
<v-container>
  <v-layout column align-center>
    <p class="title font-weight-regular mt-3 mb-1">
      {{city}}
    </p>
    <p class="title font-weight-regular ma-1">
      {{entity}}
    </p>
    <p class="title font-weight-regular mb-1">
      {{year}} - {{getMonth(month)}}
    </p>
  </v-layout>
  </v-container>
</template>
<script>
export default {
  props:{
    city:{
      type: String,
      default: null
    },
    entity:{
      type: String,
      default: null
    },
    year:{
      type: String,
      default: null
    },
    month:{
      type: String,
      default: null
    }
  },
  methods:{
    getMonth(month){
      const months = [
        "Janeiro","Fevereiro","Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
      ]
      return months[parseInt(month)]
    }
  }
}
</script>
