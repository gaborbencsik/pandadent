<template>
  <div id="phoneButton" class="">
    <button @click="showPhoneNumber"
      class="btn btn-primary btn-sm"
      type="button"
      name="button">
        Idöpont kérés
    </button>
  </div>
</template>

<script>

export default {
  name: 'PhoneButton',
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    showPhoneNumber() {
      /* eslint-disable */
      $('#myModal').modal({ backdrop: false });
      /* eslint-enable */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (max-width:768px) {
}

</style>
