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
      <div class="testimonial-carousel">
        <carousel :per-page="1"
          :mouse-drag=false
          :autoplay=true
          :loop=true>
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
        { name: 'Martina Pixy Herold', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/52407167_2697953113567774_1473487989450473472_n.jpg?_nc_cat=103&_nc_ht=scontent-vie1-1.xx&oh=1c890d51461b86881d6edea5306c9736&oe=5D361A2B', text: 'Budapestrol jarok hozza. Alapos, preciz, nyugodt, szereti amit csinal. 100%-ban megbizom benne. Orulok, hogy megtalaltuk egymast Anna �' },
        { name: 'Loretta Hibácska', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/56161624_2850119608547306_3460284124789473280_n.jpg?_nc_cat=102&_nc_ht=scontent-vie1-1.xx&oh=18d3121863d25979210507d130ceed0a&oe=5D3C025D', text: 'A környezet szép, tiszta, barátságos! A doktornő nagyon-nagyon kedves, precíz, pontos! Életemben először nem megyek gyomorgörccsel fogorvoshoz! � A legjobb választás volt! �' },
        { name: 'Hajnalka Soós', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/46257141_1998586293557570_862822929350524928_o.jpg?_nc_cat=110&_nc_ht=scontent-vie1-1.xx&oh=14d5a939b890383d671bb57bd0a997de&oe=5D446AAA', text: 'A doktornő precíz, igényes a munkájára,korrekt és nagyon kedves. Szívből ajánlom mindenkinek! :)' },
        { name: 'Anett Pinter', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/53510741_1682358558576728_3509204493780647936_n.jpg?_nc_cat=110&_nc_ht=scontent-vie1-1.xx&oh=701b430d9d928bc8e65dd6ddc764d386&oe=5D3993D6', text: 'Csodálatosan szép fehér fogakat varázsolt nekem� sok csillag !!' },
        { name: 'Szilvia Balogh-Takács', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/46945573_2258315654203048_230891480418353152_o.jpg?_nc_cat=106&_nc_ht=scontent-vie1-1.xx&oh=25cba709d7e93f4fee0fa0436a3449d4&oe=5D377B24', text: 'A 6 éves lányomat Dr. Kovács Annához vittem először, nem jart még fogorvosnál, nagyon megvolt rémülve. De sikerült megnyugtatnia és kezelni a fogait. Lelkiismeretes, precíz, nyugodt és türelmes! ����' },
        { name: 'Nóra Bencsikné Tihanyi', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/50914578_2174151939310703_7136816356829167616_n.jpg?_nc_cat=111&_nc_ht=scontent-vie1-1.xx&oh=c526ead6416f84305d4f85cc76dcdcf8&oe=5D40DC86', text: 'Nagy türelme , precíz ,szép munkája miatt minden olyan embernek - gyereknek és felnőttnek - tiszta szívből ajánlom akinek már a fogorvos szó hallatán is ökölbe szorul a gyomra a félelemtől . :(  :)' },
      ],
      heading: 'Akik már jártak nálam',
    };
  },
  computed: {
  },
};
</script>

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
