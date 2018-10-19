<template>
  <div id="about-me" class="space-medium bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 image-wrapper">
          <img v-bind:src="this.aboutImageUrl" alt="" class="img-responsive">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="about-section">
            <h1>{{this.name}}</h1>
            <p v-for="line in this.aboutMe" :key="line">{{ line }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container show-mobile">
      <PhoneButton/>
    </div>
  </div>
</template>

<script>
import PhoneButton from './PhoneButton';

export default {
  name: 'About',
  components: {
    PhoneButton,
  },
  data() {
    return {
      aboutImageUrl: 'static/images/drkovacsanna.png',
      name: 'Dr. Kovács Anna',
      aboutMe: ['A Pécsi Tudományegyetem fogorvosi szakán végeztem 2016-ban. Az egyetem után édesanyám gyermekfogászati rendelöjében folytattam tudásom gyarapítását.', 'Hivatásomnak tekintem a gyermekek dentális higiéniájának javítását. Különösen fontosnak tartom a fogorvosokkal szembeni téves sztereotipiák lerombolását a gyerekekben és a felnöttekben egyaránt.'],
      preferencies: [
        'Highly skilled and experienced doctors',
        'Provide 100% Complete protection for Patient',
        'We believe in further development and new innovations',
      ],
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show-mobile {
  display: none;
}

h1 {
  font-weight: 700;
  color: #ffffff;
}

p {
  font-weight: 500;
  color: #ffffff;
}

.img-responsive {
  max-width: 70%;
  border: 1px solid #000000;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width:768px) {
  #about-me button.btn {
    font-size: 15px;
  }

  .img-responsive {
    max-width: 90%;
  }

  .show-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>
