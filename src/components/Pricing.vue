<template>
  <div id="prices" class="about-bg-block ">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="feature-block">
            <!--<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdrkovacsanna%2Fphotos%2Fa.1784186171600251%2F1877338678951666%2F%3Ftype%3D3&width=500" width="500" height="502" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>-->
            <!--<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdrkovacsanna%2Fphotos%2Fa.1784186171600251%2F1877338502285017%2F%3Ftype%3D3&width=500" width="500" height="360" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>-->
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
        'static/images/price1.jpg',
        'static/images/price2.jpg',
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
