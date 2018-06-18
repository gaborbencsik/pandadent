<template>
  <div class="tiny-footer">
      <div class="container">
          <div class="row">
              <div class="col-md-12">{{ copyright }}</div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Copyright',
  data() {
    return {
    };
  },
  computed: {
    copyright() {
      return `© ${this.currentYear} Minden jog fenntartva!`;
    },
    currentYear() {
      const currentDate = new Date();
      return currentDate.getFullYear();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (max-width:768px) {
}

</style>
