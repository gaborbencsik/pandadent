<template>
  <div id="treatment" class="space-medium">
    <p>{{ $route.params }}</p>
  </div>
</template>

<script>

export default {
  name: 'Treatment',
  data() {
    return {
      title: 'Fogászati kezelések',
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
