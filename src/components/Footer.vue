<template>
  <div id="contact" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div class="footer-widget">
            <p>{{this.heading}}</p>
            <PhoneButton/>
            <div class="footer-social">
              <a v-bind:href="facebookUrl">
                <span>
                  <i class="fa fa-facebook"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class=" col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="footer-widget">
            <h3 class="footer-title">Rendelési idö</h3>
            <div class="time-schedule">
              <p class="time-schedule-text text-white">Kedd</p>
              <span>16:00 - 19:00</span>
            </div>
            <div class="time-schedule">
              <p class="time-schedule-text text-white">Csütörtök</p>
              <span>16:00 - 19:00</span>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.353546928178!2d18.412383415286516!3d47.19009222465059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f7aff2abcc1b%3A0xef0980dbdaeee56b!2zU3rDqWtlc2ZlaMOpcnbDoXIsIFTDoXZpcmRhIHUuIDMxLCA4MDAw!5e0!3m2!1sen!2shu!4v1519394519924" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneButton from './PhoneButton';

export default {
  name: 'Footer',
  components: {
    PhoneButton,
  },
  data() {
    return {
      location: 'Székesfehérvár Távirda utca 31-33.',
      heading: 'Pácienseket minden esetben csak elözetes idöpont egyeztetés után tudom fogadni.',
      facebookUrl: 'https://www.facebook.com/drkovacsanna/',
    };
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer-social {
  margin-top: 2rem;
}

@media only screen and (max-width:768px) {
}

</style>
