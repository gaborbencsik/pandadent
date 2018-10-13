<template>
  <div class="header-element">
    <div class="header-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2 col-sm-12 col-xs-12">
            <a href="/"><img v-bind:src="this.logoUrl" alt=""></a>
          </div>
          <div class="col-lg-9 col-md-10 col-sm-12 col-xs-12">
            <div class="navigation">
              <div id="navigation" class="small-screen">
                <div id="menu-button" @click="showMenu()">
                  <span>Menu</span>
                </div>
                <ul v-if="isMenuVisible">
                  <li v-for="menuItem in menu" v-bind:key="menuItem.content">
                    <a v-bind:href="menuItem.href"
                    v-bind:title="menuItem.title" @click="showMenu()">{{menuItem.content}}</a>
                  </li>
                </ul>
                <ul class="menu-big-screen" v-else>
                  <li v-for="menuItem in menu" v-bind:key="menuItem.content">
                    <a v-bind:href="menuItem.href"
                    v-bind:title="menuItem.title">{{menuItem.content}}</a>
                  </li>
                </ul>
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
  name: 'Header',
  props: ['menu'],
  data() {
    return {
      phoneNumber: '(000)-123-4567',
      email: 'info@dentalcare.com',
      facebookUrl: '#',
      isMenuVisible: false,
      logoUrl: 'static/images/pandadent_logo.png',
    };
  },
  methods: {
    showMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#navigation > ul > li:last-child > a:after {
  display: none;
}

#navigation.small-screen {
  display: block;
}

#navigation.small-screen .menu-big-screen {
  flex-direction: row;
  text-align: center;
}

#navigation > ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#navigation.small-screen #menu-button {
  display: none;
}

#navigation.small-screen ul li {
  background-color: transparent;
}

#navigation.small-screen ul li {
  border-top: none;
}

@media only screen and (max-width:768px) {

  #navigation {
    float: none;
  }

  #navigation.small-screen .menu-big-screen {
    display: none;
  }

  #navigation > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #navigation > ul > li > a:after {
    display: none;
  }

  #navigation.small-screen #menu-button {
    display: block;
    background-color: #ffffff;
    border: 1px solid #558396;
    color: #558396;
  }

  #navigation.small-screen #menu-button:before {
    background-color: #558396;
  }

  #navigation.small-screen #menu-button:after {
    border-top: 2px solid #558396;
    border-bottom: 2px solid #558396;
  }

  #navigation.small-screen ul li {
    background-color: #558396;
  }

  #navigation.small-screen ul li a,
  #navigation.small-screen ul ul li a {
    background-color: #ffffff;
    border-bottom: 1px solid #558396;
    border-left: 1px solid #558396;
    border-right: 1px solid #558396;

  }
}

</style>
