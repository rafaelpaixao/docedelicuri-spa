<template>
  <v-container class="app-home-content">
    <v-layout column>
        <h1 class="display-2 font-weight-light my-5 text-xs-center">
          <span class="font-weight-bold primary--text">Doce</span> de Licuri
        </h1>
        <p class="subheading font-weight-regular my-2">
          Aqui você pode consultar informações sobre os salários dos servidores de algumas entidades públicas de Feira de Santana.
        </p>
        <p class="subheading font-weight-regular my-2">Os dados são fornecidos pelo portal do 
          <a href="https://www.tcm.ba.gov.br/portal-da-cidadania/pessoal/" target="_blank">Tribunal de Contas dos Municípios da Bahia.</a>
        </p>
        <v-select
          class="mt-4 mx-2"
          :items="options.entities"
          v-model="search.entity"
          label="Escolha a entidade"
          item-text="text"
          item-value="value"
          solo
        ></v-select>
        <v-select
          class="mx-2"
          :items="options.years"
          v-model="search.year"
          label="Escolha o ano"
          solo
        ></v-select>
        <v-select
          class="mx-2"
          :disabled="search.year===null"
          :items="options.months"
          v-model="search.month"
          label="Escolha o mês"
          item-text="text"
          item-value="value"
          solo
        ></v-select>
        <v-btn
          :disabled="!canSearch"
          class="ma-0" large :to="{name: 'analyses-month', params: search}" color="info">
          <v-icon class="mr-2">search</v-icon>
          CONSULTAR
        </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import SearchForm from '../components/search-form'
  export default {
    extends: SearchForm,
  }
</script>

<style lang="scss">
.app-home-content{
  max-width: 500px;
  p{
    text-indent: 30px;
    text-align: justify
  }
}
</style>
