<script>
export default {
  data(){
    return{
      search:{
        year: null,
        month: null,
        city: '2910800',
        entity: '544'
      },
      options:{
        years: ["2018","2017","2016","2015","2014","2013","2012","2011"],
        months: ["12","11","10","9","8","7","6","5","4","3","2","1"],
      }
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
        this.options.months = ["9","8","7","6","5","4","3","2","1"]
      }else{
        this.search.month=null
        this.options.months = ["12","11","10","9","8","7","6","5","4","3","2","1"]
      }
    }
  }
}
</script>