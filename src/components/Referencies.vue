<template>
  <div id="referencies" class="space-medium">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="section-title">
            <h1>{{this.title}}</h1>
            <p>{{this.motto}}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="carousel-view">
          <button class='carousel-controls__button btn btn-primary screen'
          @click="previous">{{this.buttonArrows.prew}}</button>

          <transition-group class='carousel' tag="div">
            <div v-for="slide in imageUrls" class='slide' :key="slide.id">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-wrapper">
                <div class="ba-gallery">
                  <img v-bind:src="slide.before" alt="" class="img-responsive">
                  <div class="ba-left-btn"> <span class="left-btn">before</span></div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-wrapper">
                <div class="ba-gallery">
                  <img v-bind:src="slide.after" alt="" class="img-responsive">
                  <div class="ba-left-btn"> <span class="left-btn">after</span></div>
                </div>
              </div>
            </div>
          </transition-group>

          <button class='carousel-controls__button btn btn-primary screen'
          @click="next">{{this.buttonArrows.next}}</button>
          <div class='carousel-controls mobile'>
            <button class='carousel-controls__button btn btn-primary'
            @click="previous">{{this.buttonArrows.prew}}</button>
            <button class='carousel-controls__button btn btn-primary'
            @click="next">{{this.buttonArrows.next}}</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="mt40 text-center">
            <!-- <router-link class="btn btn-primary btn-lg"
            v-bind:to="beforeAfterGalleryPath">
              {{buttonText}}
            </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Treatments',
  data() {
    return {
      title: 'Referenciák',
      // motto: 'A legnagyobb öröm, amikor a páciens elégedetten, szép, egészséges mosollyal száll ki székböl.',
      motto: '',
      beforeAfterImageUrls: [
        'static/images/before.png',
        'static/images/after.png',
      ],
      imageUrls: [
        { before: 'static/images/before.png', after: 'static/images/after.png', id: 1 },
        { before: 'static/images/before3.png', after: 'static/images/after3.png', id: 3 },
        { before: 'static/images/before2.png', after: 'static/images/after2.png', id: 2 },
        { before: 'static/images/before5.png', after: 'static/images/after5.png', id: 5 },
        { before: 'static/images/before4.png', after: 'static/images/after4.png', id: 4 },
        // { before: 'static/images/before6.png', after: 'static/images/after6.png', id: 6 },
      ],
      buttonArrows: {
        prew: '<',
        next: '>',
      },
      buttonText: 'Elötte-utána galéria',
      beforeAfterGalleryPath: '/galeria/elotte-utana',
    };
  },
  methods: {
    next() {
      const first = this.imageUrls.shift();
      this.imageUrls = this.imageUrls.concat(first);
    },
    previous() {
      const last = this.imageUrls.pop();
      this.imageUrls = [last].concat(this.imageUrls);
    },
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#referencies {
  background-color: #afd7d35e;
}

.carousel-view {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: 25em;
}
.slide {
  flex: 0 0 100%;
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 50%; */
  transition: transform 0.3s ease-in-out;
}

.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}

.img-responsive {
  height: 15em;
  width: 100%;
}

.mobile {
  display: none;
}

.section-title p {
  font-weight: 500;
}

@media only screen and (max-width:768px) {

  .carousel-view {
    flex-direction: column;
  }

  .slide {
    flex-direction: column;
  }

  .img-responsive {
    height: 11em;
  }

  .img-wrapper {
    margin-bottom: 20rem
  }

  .screen {
    display: none;
  }

  .mobile {
    display: block;
  }

}

</style>
