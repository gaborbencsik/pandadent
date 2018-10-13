<template>
  <div id="main">
    <Header :menu="menuItems"/>
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
import Header from './Header';
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
    Header,
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
  data() {
    return {
      menuItems: [
        { content: 'Bemutatkozás', title: 'AboutMe', href: '#about-me' },
        { content: 'Kezelések', title: 'Treatments', href: '#treatments' },
        { content: 'Referenciák', title: 'Referencies', href: '#referencies' },
        { content: 'Árlista', title: 'Prices', href: '#prices' },
        { content: 'Elérhetöség', title: 'Contact', href: '#contact' },
      ],
    };
  },
};
</script>

<style>

</style>
