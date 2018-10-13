<template>
  <div class="space-medium bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="section-title">
            <h1>{{this.heading}}</h1>
          </div>
        </div>
      </div>
      <!--<div id="review-container"></div>-->
      <div class="testimonial-carousel">
        <carousel :per-page="1"
          :navigate-to="someLocalProperty"
          mouse-drag="false"
          :autoplay="true"
          :loop="true">
          <slide v-for="review in this.testimonials" v-bind:key="review.name">
            <div class="col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-12 col-xs-12">
              <div class="">
                <div class="testimonial-content">
                  <p class="testimonial-text">“{{review.text}}”</p>
                  <div class="">
                    <div class="testimonial-pic">
                      <img v-bind:src="review.tumbnailUrl"
                        v-bind:alt="review.name"
                        class="img-circle">
                    </div>
                    <div class="testimonial-meta">
                      <span>-{{review.name}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Testimonials',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      testimonials: [
        { name: 'Martina Pixy Herold', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/39976800_2305568352806254_8659795761237590016_n.jpg?_nc_cat=102&oh=663bda3c0e8f4b79f5b02e9b79684e59&oe=5C5866BA', text: 'Budapestrol jarok hozza. Alapos, preciz, nyugodt, szereti amit csinal. 100%-ban megbizom benne. Orulok, hogy megtalaltuk egymast Anna �' },
        { name: 'Loretta Hibácska', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/42651940_2694719034087365_2005048006885244928_n.jpg?_nc_cat=101&oh=721e9258cb121268fe9dc5deaa0d9ce9&oe=5C47317A', text: 'A környezet szép, tiszta, barátságos! A doktornő nagyon-nagyon kedves, precíz, pontos! Életemben először nem megyek gyomorgörccsel fogorvoshoz! � A legjobb választás volt! �' },
        { name: 'Hajnalka Soós', tumbnailUrl: 'https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/26056110_1563565447059659_2862500798697551636_n.jpg?_nc_cat=0&_nc_eui2=AeHKKuCK6_f3mH4eDGIweis-t7xJkPHsEdDvAeAUSDyd_uUFWsu5JkUrfkkJd4br59RkAEVAw1YLKF8Fu8Qmmo54p3c6qSl5Xp3Frf7TihAzbQ&oh=fb73761b2d3282bc983bccaf1766cfe9&oe=5BC37A5D', text: 'A doktornő precíz, igényes a munkájára,korrekt és nagyon kedves. Szívből ajánlom mindenkinek! :)' },
        { name: 'Anett Pinter', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-1/26994236_1319707628175158_8362611114669316830_n.jpg?_nc_cat=102&oh=937959cc2113d05c0f59c443a0cc5695&oe=5C48C453', text: 'Csodálatosan szép fehér fogakat varázsolt nekem� sok csillag !!' },
        { name: 'Szilvia Balogh-Takács', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/26024152_1821371451230806_7248335639308178671_o.jpg?_nc_cat=100&oh=4d30c675264303b1e411755b72adefda&oe=5C5E4565', text: 'A 6 éves lányomat Dr. Kovács Annához vittem először, nem jart még fogorvosnál, nagyon megvolt rémülve. De sikerült megnyugtatnia és kezelni a fogait. Lelkiismeretes, precíz, nyugodt és türelmes! ����' },
        { name: 'Nóra Bencsikné Tihanyi', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/41642449_1983279935064572_1599519342280572928_n.jpg?_nc_cat=105&oh=156d9ed4d47024ab073af11badf9c699&oe=5C54C510', text: 'Nagy türelme , precíz ,szép munkája miatt minden olyan embernek - gyereknek és felnőttnek - tiszta szívből ajánlom akinek már a fogorvos szó hallatán is ökölbe szorul a gyomra a félelemtől . :(  :)' },
      ],
      heading: 'Akik már jártak nálam',
    };
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.testimonial-pic img {
  width: 6rem;
}

.romw .romw-text {
  font-size: 24px;
  font-style: italic;
  /* color: #7d7a79; */
  color: #484646;
  line-height: 42px;
  font-weight: 400;
}


@media only screen and (max-width:768px) {
}

</style>
