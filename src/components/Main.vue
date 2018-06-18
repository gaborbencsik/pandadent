<template>
  <div id="main">
    <Hero/>
    <About/>
    <Treatments/>
    <Referencies/>
    <Pricing/>
    <Testimonials/>
    <ShowPhoneNumber/>
  </div>
</template>

<script>
import Hero from './Hero';
import About from './About';
import Treatments from './Treatments';
import Referencies from './Referencies';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Copyright from './Copyright';
import ShowPhoneNumber from './ShowPhoneNumber';

export default {
  name: 'Main',
  components: {
    Hero,
    About,
    Treatments,
    Referencies,
    Pricing,
    Testimonials,
    Footer,
    Copyright,
    ShowPhoneNumber,
  },
};
</script>

<style>

</style>
