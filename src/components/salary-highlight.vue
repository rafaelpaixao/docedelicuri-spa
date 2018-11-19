<template>
  <v-layout>
    <v-flex xs4>
      <v-progress-circular
        :rotate="90"
        :size="60"
        :width="10"
        :value="progress"
        :color="color"
      >
        {{ progress.toFixed(0) }}%
      </v-progress-circular>
    </v-flex>
    <v-flex xs8>
      <div class="text-xs-right headline font-weight-bold grey--text text--darken-3"><span class="body-1">R$</span> {{$toMoney(actual)}}</div>
      <div class="text-xs-right text-uppercase font-weight-bold grey--text text--darken-1">
        <slot></slot>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props:{
    total:{
      type: Number,
      default: 0
    },
    actual:{
      type: Number,
      default: 0
    },
    color:{
      type: String,
      default: 'primary'
    }
  },
  data(){
    return {
      progress: 0
    }
  },
  mounted(){
    this.progress = this.actual*100/this.total
  }
}
</script>
