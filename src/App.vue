<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script>
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import Referencies from './components/Referencies';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
// import ShowPhoneNumber from './components/ShowPhoneNumber';

export default {
  name: 'App',
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
    // ShowPhoneNumber,
  },
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */

  font-family: 'Montserrat Alternates', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app h1, h2, h3 {
  font-family: 'Montserrat Alternates', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
