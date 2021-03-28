<template lang="pug">
  #app
    img(src='https://fhantons7.github.io/app-music/dist/logo.png')
    h1 musica en linea
    select(v-model="selectedCountry")
      option(v-for="country in countries" :value="country.value") {{ country.name }}
    ul
      li
        span(@click="clicks(p.n)" v-for="p in pages") {{p.n}}
    ul
      Spinner(v-show="loading")
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")

</template>

<script>
import getArtist from './api/'
import Artist from './components/Artist'
import Spinner from './components/Spinner'
export default {
  name: 'app',
  data () {
    return {
      loading:true,
      artists:[],
      selectedCountry:'venezuela',
      countries:[
        {name:'Venezuela',value:'venezuela'},
        {name:'Colombia',value:'colombia'},
        {name:'Peru',value:'Peru'},
        {name:'Chile',value:'Chile'},
      ],
      pages:[{'n':1},{'n':2},{'n':3},{'n':4},{'n':5}],
      pagesSel:1
    }
  },
  components:{
    Artist,
    Spinner
  },
  methods:{
    refreshArtist() {
      const self = this
      this.loading = true
      this.artists=[]
      getArtist(this.selectedCountry,this.pagesSel)
      .then(function(artist){
        self.artists = artist
        self.loading = false
      })

    },
    clicks(n){
      this.pagesSel = n
      this.refreshArtist()
    }
  },
  watch:{
    selectedCountry(){
      this.refreshArtist()
    }
  },
  mounted(){
    this.refreshArtist()
  }
}
</script>

<style scoped>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top :60px;
}
h1, h2{
  font-weight: normal;
}
ul{
  list-style-type: none;
  padding: 0;
  }

li{
  display :inline-block;
  margin: 0 10px;
  }

a{
  color: #42b983;
  }

  select{
    padding: 10px;
    border:none;
  }
  ul li span{
    padding: 10px 14px;
    border: solid 1px #444;
    border-radius: 20px;
    margin: 10px;
    cursor: pointer;
  }
  ul li span:hover{
    background:#42b983;
    color: #fff;
  }
</style>

