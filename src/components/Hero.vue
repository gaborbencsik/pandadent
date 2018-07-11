<template>
  <div class="hero">
    <div class="slider">
      <div class="owl-carousel slider">
        <div class="item">
          <div class="slider-img">
            <img v-bind:src="this.backgroundImageUrl" alt="">
          </div>
          <div class="container">
            <div class="row hero-section">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div class="slider-captions">
                  <div class="slider-content">
                    <h1 class="slider-title">{{this.title}}</h1>
                    <p class="slider-text hidden-xs">{{this.motto}}</p>
                    <div class="hidden-sm hidden-xs">
                      <PhoneButton/>
                    </div>
                  </div>
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
import PhoneButton from './PhoneButton';

export default {
  name: 'Hero',
  components: {
    PhoneButton,
  },
  data() {
    return {
      title: '"Kis fogak, nagy mosoly."',
      motto: 'Türelmes hozzáállás, biztonságos légkör, prevenció és tanácsadás, esztétikai fogászat, fogfehérítés.',
      buttonTexts: {
        appointment: 'Idöpont kérés',
        about: 'Bemutatkozás',
      },
      backgroundImageUrl: 'static/images/slider-image3.png',
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.slider {
  display: block;
}

.hero-section {
  /* display: flex; */
}

.hero-image {
  border: 1px solid black;
  width: 200px;
}

.slider-captions {
  display: flex;
}

@media only screen and (max-width:768px) {
}

</style>
