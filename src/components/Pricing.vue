<template>
  <div id="prices" class="about-bg-block ">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="feature-block">
            <h1 class="feature-title mb60">Árlista</h1>
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
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/32243658_1877338682284999_5210661405908271104_n.jpg?_nc_cat=0&oh=4d2c95b006f4c531f5e2119965e60988&oe=5BB2F8EC',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/32247245_1877338505618350_4739656033595555840_n.jpg?_nc_cat=0&oh=3780f4b2347c5b91b08fb3551bfbe12c&oe=5BBCDFF9',
      ],
    };
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#prices {
  /* background-color: #E85E78; */
  /* background-color: #e85e7863; */
  background-color: #ffffff;
}

@media only screen and (max-width:768px) {
}

</style>
