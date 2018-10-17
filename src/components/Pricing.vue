<template>
  <div id="prices" class="about-bg-block ">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="feature-block">
            <div class="section-title">
              <h1 class="feature-title mb60">Árlista</h1>
            </div>
            <div class="row">
              <div v-for="image in this.imageUrls"
                v-bind:key="image"
                class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="feature-content">
                  <h3 class="feature-title"></h3>
                  <img v-bind:src="image" alt="pricelist">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Pricing',
  data() {
    return {
      title: 'Árlista',
      imageUrls: [
        'static/images/price1.jpg',
        'static/images/price2.jpg',
      ],
    };
  },
  computed: {
  },
};
</script>

<style scoped>

#prices {
  /* background-color: #E85E78; */
  /* background-color: #e85e7863; */
  background-color: #ffffff;
}

@media only screen and (max-width:768px) {
}

</style>
