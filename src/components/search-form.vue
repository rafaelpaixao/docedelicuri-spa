<script>
const months = [{
          text: 'Janeiro',
          value: 1
        },
        {
          text: 'Fevereiro',
          value: 2
        },
        {
          text: 'Março',
          value: 3
        },
        {
          text: 'Abril',
          value: 4
        },
        {
          text: 'Maio',
          value: 5
        },
        {
          text: 'Junho',
          value: 6
        },
        {
          text: 'Julho',
          value: 7
        },
        {
          text: 'Agosto',
          value: 8
        },
        {
          text: 'Setembro',
          value: 9
        },
        {
          text: 'Outubro',
          value: 10
        },
        {
          text: 'Novembro',
          value: 11
        },
        {
          text: 'Dezembro',
          value: 12
        },
        ]
export default {
  data(){
    return{
      search:{
        year: null,
        month: null,
        city: '2910800',
        entity: null
      },
      options:{
        years: ["2018","2017","2016","2015","2014","2013","2012","2011"],
        months: [{
          text: 'Janeiro',
          value: 1
        },
        {
          text: 'Fevereiro',
          value: 2
        },
        {
          text: 'Março',
          value: 3
        },
        {
          text: 'Abril',
          value: 4
        },
        {
          text: 'Maio',
          value: 5
        },
        {
          text: 'Junho',
          value: 6
        },
        {
          text: 'Julho',
          value: 7
        },
        {
          text: 'Agosto',
          value: 8
        },
        {
          text: 'Setembro',
          value: 9
        },
        {
          text: 'Outubro',
          value: 10
        },
        {
          text: 'Novembro',
          value: 11
        },
        {
          text: 'Dezembro',
          value: 12
        },
        ],
        entities: [
        { value: '129',
          text: 'Prefeitura Municipal' },
        { value: '544', text: 'Câmara Municipal ' },
        { value: '880',
          text: 'Instituto de Previdência' },
        { value: '892',
          text: 'Fundação Hospitalar' },
        { value: '984', text: 'Superintendência Municipal de Trânsito' },
        { value: '1008',
          text: 'Fundação Cultural Municipal Egberto Tavares Costa' },
        { value: '1032',
          text: 'Superintendência Municipal de Proteção e Defesa do Consumidor' },
        { value: '1033',
          text: 'Agência Reguladora de Feira de Santana' },
        { value: '1104',
          text: 'Consórcio Público Interfederativo De Saúde Da Região de Feira de Santana' },
          ]
      },
      
      }
  },
  computed:{
    canSearch(){
      return this.search.year !=null && this.search.month !=null
    }
  },
  watch:{
    'search.year': function(newVal){
      if(newVal==="2018"){
        this.search.month=null
        this.options.months = months.slice(0,9) 
      }else{
        this.search.month=null
        this.options.months = months
      }
    }
  }
}
</script>