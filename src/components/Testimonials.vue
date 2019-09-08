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
        { name: 'Martina Pixy Herold', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/67979149_3127806857249062_7977893497392857088_n.jpg?_nc_cat=110&_nc_oc=AQmU7aBA21Cw936Je7xIb8QzKeL8ARwDWb-ett-u6Cil-Pemqq17Nw_l016TAhVFjrtcZ0jv6WOAfvZJOLbSWLhE&_nc_ht=scontent-vie1-1.xx&oh=d5bddda66d3fdff5bc867c8d9a59349d&oe=5E071BA9', text: 'Budapestrol jarok hozza. Alapos, preciz, nyugodt, szereti amit csinal. 100%-ban megbizom benne. Orulok, hogy megtalaltuk egymast Anna �' },
        { name: 'Loretta Hibácska', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/56161624_2850119608547306_3460284124789473280_n.jpg?_nc_cat=102&_nc_oc=AQlczGqtkrJLJwen4cwTwKPZW8NSDEKQR377LiGNMy4yJ1tAFzXAoeQ_wKw5xF_0dDnyP2GOZ1GRlIlULsHgki6G&_nc_ht=scontent-vie1-1.xx&oh=2faf0a7b19e7b5c43872ef2896847d91&oe=5E01C35D', text: 'A környezet szép, tiszta, barátságos! A doktornő nagyon-nagyon kedves, precíz, pontos! Életemben először nem megyek gyomorgörccsel fogorvoshoz! � A legjobb választás volt! �' },
        { name: 'Hajnalka Soós', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/69355477_2460034597412735_4759798107363868672_o.jpg?_nc_cat=103&_nc_oc=AQkng2t82fbJyoEJKTqxh36_9yyrk-aVJPTGcgoTI_jNe4mxvc1G9cevZ-jrxNRx0D4ooGD7OrqnSjpuiayKTln9&_nc_ht=scontent-vie1-1.xx&oh=fa85397cfcab17a5d0d300de003f5645&oe=5E1667D2', text: 'A doktornő precíz, igényes a munkájára,korrekt és nagyon kedves. Szívből ajánlom mindenkinek! :)' },
        { name: 'Anett Pinter', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/53510741_1682358558576728_3509204493780647936_n.jpg?_nc_cat=110&_nc_oc=AQmfVW5pmDwIleTKxSzXn7uzSaGUxOUjXwM1T8gBNF-drBIh5E7HpPIXU4IT9-MnmOt7pjPuJpGDb4N_SoGfPQDL&_nc_ht=scontent-vie1-1.xx&oh=03282d62aef3a4ba0ca4052dabe31b60&oe=5DFF54D6', text: 'Csodálatosan szép fehér fogakat varázsolt nekem� sok csillag !!' },
        { name: 'Szilvia Balogh-Takács', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/46945573_2258315654203048_230891480418353152_o.jpg?_nc_cat=106&_nc_oc=AQmVoQnJ6t3D-bk6kDQCjHnuy_n069VnkhvfBJFsK7YiN8znlsG1VD_zwzLPb_R0Il1RXK1U5O0piPwqYNGYithm&_nc_ht=scontent-vie1-1.xx&oh=682cfb205db7a2a7f744275f92a6fddc&oe=5DFD3C24', text: 'A 6 éves lányomat Dr. Kovács Annához vittem először, nem jart még fogorvosnál, nagyon megvolt rémülve. De sikerült megnyugtatnia és kezelni a fogait. Lelkiismeretes, precíz, nyugodt és türelmes! ����' },
        { name: 'Nóra Bencsikné Tihanyi', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/67890543_2484053991653828_3566643372057690112_n.jpg?_nc_cat=101&_nc_oc=AQkwTVEhAS4lqC2VOzAdSOf1CYU6caKD_y5-CUP4JGLYfyCHsJSvtnL8aclnD8ya3eskaPF2m1ht2Xgm_-VMybXl&_nc_ht=scontent-vie1-1.xx&oh=d9164e8d8db8a153b9abceb7dce2dcaf&oe=5E0BB4FB', text: 'Nagy türelme , precíz ,szép munkája miatt minden olyan embernek - gyereknek és felnőttnek - tiszta szívből ajánlom akinek már a fogorvos szó hallatán is ökölbe szorul a gyomra a félelemtől . :(  :)' },
        { name: 'Mihályi-Lampek Karina Julianna', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/69628298_2843545638993279_4133950733009551360_o.jpg?_nc_cat=108&_nc_oc=AQkKcGu_Hns0m6GDioW1tA07V5djhfNEIGbZ21ccBDj62MSvmZxIM8nj6Xt4eFAhM2rk0AELwpeIRQ3-GvQIsxY5&_nc_ht=scontent-vie1-1.xx&oh=924993a1a007d662979440bfb14183ad&oe=5E101A1C', text: 'A legjobb hely az egész városban! Köszönjük a végtelen kedves ellátást. Kisfiam élvezte, nagyon boldog, hogy ilyen szuper helyen jártunk!' },
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
