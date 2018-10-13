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
            <div class="about-list">
              <ul class="angle angle-right mb30">
                <!-- <li v-for="preference in preferencies" v-bind:key="preference">
                  {{preference}}
                </li> -->
              </ul>
            </div>
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
      // aboutImageUrl: 'static/images/about-pic.jpg',
      aboutImageUrl: 'static/images/kovacsanna.jpg',
      name: 'Dr. Kovács Anna',
      aboutMe: ['A Pécsi Tudományegyetem fogorvosi szakán végeztem 2016-ban. Fogászat iránti szeretetemet és szenvedélyemet édesanyámtól örököltem, aki szintén fogorvos.', 'Hivatásomnak tekintem a gyermekek dentális higiéniájának a javítását. Anyaként különösen fontosnak tartom, hogy a gyerekekben, felnöttekben a fogászattal szembeni rossz sztereotípiák lerombolását.'],
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
