<template>
  <div id="treatment" class="">
    <Header :menu="menuItems"/>
    <h1>{{ this.title }}</h1>
    <p>{{ $route.params }}</p>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'Treatment',
  components: {
    Header,
  },
  data() {
    return {
      title: 'Fogászati kezelések',
      menuItems: [
        { content: 'Bemutatkozás', title: 'AboutMe', href: '/' },
        { content: 'Kezelések', title: 'Treatments', href: '/' },
        { content: 'Referenciák', title: 'Referencies', href: '/' },
        { content: 'Árlista', title: 'Prices', href: '/' },
        { content: 'Elérhetöség', title: 'Contact', href: '/' },
      ],
    };
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (max-width:768px) {
}

</style>
