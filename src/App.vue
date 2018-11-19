<template>
  <v-app>
    <v-toolbar app v-if="$route.name!='home'">
      <v-toolbar-title class="headline text-uppercase" @click="$router.push({name:'home'})" >
        <span>DOCE </span>
        <span class="font-weight-light">DE LICURI</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-chip color="primary" text-color="white">BETA</v-chip>
    </v-toolbar>
    <v-content class="pb-5">
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
    <v-slide-y-transition>
    <v-bottom-nav
      v-if="$route.name!='home'"
      :value="true"
      fixed
      class="pt-2 pl-2">
      <v-flex xs4 @click="sheet=true">
        <v-layout row justify-center align-center>
        <v-icon class="mr-2">place</v-icon><div>Feira de Santana</div>
        </v-layout>
      </v-flex>

      <v-flex xs4 @click="sheet=true">
      <v-layout row justify-center align-center>
        <v-icon class="mr-2">account_balance</v-icon><div class="app-bottom-entity">{{entityName}}</div>
      </v-layout>
      </v-flex>

      <v-flex xs4 @click="sheet=true">
      <v-layout row justify-center align-center>
        <v-icon class="mr-2">date_range</v-icon><div>{{$getMonth(this.$route.params.month)}}<br>{{this.$route.params.year}}</div>
      </v-layout>
      </v-flex>
    
    </v-bottom-nav>
    </v-slide-y-transition>

    <v-bottom-sheet v-model="sheet">
      <v-layout column class="app-form">
        <p class="body-1 font-weight-regular mx-2 mt-2">
          Aqui você pode consultar informações sobre os salários dos servidores de algumas entidades públicas de Feira de Santana.
        </p>
        <p class="body-1 font-weight-regular mx-2">Os dados são fornecidos pelo portal do 
          <a href="https://www.tcm.ba.gov.br/portal-da-cidadania/pessoal/" target="_blank">Tribunal de Contas dos Municípios da Bahia</a>
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
          @click="doSearch()"
          class="ma-0" large color="info">
          <v-icon class="mr-2">search</v-icon>
          CONSULTAR
        </v-btn>
      </v-layout>
    </v-bottom-sheet>
  </v-app>
</template>

<script>
import SearchForm from './components/search-form'
export default {
  name: 'App',
  extends: SearchForm,
  data(){
    return {
      sheet: false
    }
  },
  computed:{
    entityName(){
      const v = this.$route.params.entity
      const e = this.options.entities.filter(entity => {
        console.log(entity.value)
        console.log(entity.value === v)
        return entity.value === v
      })
      return e[0].text
    }
  },
  methods:{
    doSearch(){
      this.sheet = false
      this.$router.push({name: 'analyses-month', params: this.search})
    }
  }
}
</script>
<style lang="scss">
.app-card{
  border-radius: 20px
}
.app-form{
  background-color: white
}
.app-bottom-entity{
  max-height: 42px;
  overflow: hidden;
}
</style>
