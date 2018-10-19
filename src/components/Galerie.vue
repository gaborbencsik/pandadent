<template>
    <div id="galerie" class="space-medium bg-light">
      <div class="container">
        <div class="row">
          <h1>{{title}}</h1>
        </div>
        <div class="row">
          <div v-for="image in officeImages" :key="image"
               class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="service-block">
              <img v-bind:src="image" class="img-responsive">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Galerie',
  data() {
    return {
      title: 'Rendelö',
      officeImages: [
        'static/images/post-img-small-3.jpg',
        'static/images/post-img-small-3.jpg',
        'static/images/post-img-small-3.jpg',
        'static/images/post-img-small-3.jpg',
      ],
    };
  },
  created() {
    console.log(process.env);
  },
};
</script>

<style scoped>
.img-responsive {
  margin: auto;
}

</style>
