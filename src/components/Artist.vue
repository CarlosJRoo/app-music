<template lang="pug">
  li
    img(:src="artist.image[2]['#text']")
    h2: a(:href="artist.url" target="_blank") {{ artist.name }}
</template>

<script>
export default {
  name:'artist',
  props: ['artist']
}
</script>

<style scoped>
li{
  position: relative;
  padding: 10px;
  width: 15%;
  border:solid 1px rgb(15, 93, 219);
  margin: 5px;
  border-radius: 15px;

}

li a {
  color:rgb(15, 93, 219);
  text-decoration: none;
}
li h2{
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
}

@media (max-width:980px){
  li{
    width: 25%;
    font-size: 1rem;
  }
}
@media (max-width:500px){
  li{
    width: 40%;
  }
  h2{
    font-size: 1.1rem;
  }
}
</style>

