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
        { name: 'Martina Pixy Herold', tumbnailUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/28467877_2013507425345683_5985625025969470571_n.jpg?_nc_cat=0&oh=34415f23bef124098d5b0d3fd5cf02c1&oe=5BABF5D3', text: 'Budapestrol jarok hozza. Alapos, preciz, nyugodt, szereti amit csinal. 100%-ban megbizom benne. Orulok, hogy megtalaltuk egymast Anna �' },
        { name: 'Loretta Hibácska', tumbnailUrl: 'https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/33601963_2569381493287787_8190313143809867776_o.jpg?_nc_cat=0&_nc_eui2=AeGsFncxibTEgRWamiFTjWjS-MqPtsSSY2UzMKYs-IuQzXcavgpOjVp2B6lL5LWzZApyV6-wUl4FvGdAMxI4dfX1SaclI_o80NRV99yIlscrTQ&oh=c339933ee352ab12373d1e55cf0dce84&oe=5B76ACCF', text: 'A környezet szép, tiszta, barátságos! A doktornő nagyon-nagyon kedves, precíz, pontos! Életemben először nem megyek gyomorgörccsel fogorvoshoz! � A legjobb választás volt! �' },
        { name: 'Hajnalka Soós', tumbnailUrl: 'https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/26056110_1563565447059659_2862500798697551636_n.jpg?_nc_cat=0&_nc_eui2=AeHKKuCK6_f3mH4eDGIweis-t7xJkPHsEdDvAeAUSDyd_uUFWsu5JkUrfkkJd4br59RkAEVAw1YLKF8Fu8Qmmo54p3c6qSl5Xp3Frf7TihAzbQ&oh=fb73761b2d3282bc983bccaf1766cfe9&oe=5BC37A5D', text: 'A doktornő precíz, igényes a munkájára,korrekt és nagyon kedves. Szívből ajánlom mindenkinek! :)' },
        { name: 'Anett Pinter', tumbnailUrl: 'https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-1/26994236_1319707628175158_8362611114669316830_n.jpg?_nc_cat=0&_nc_eui2=AeEwQ7eELp7GXrO67EYvHD5bES5TOwmm2Bp2eXlPobhKKtVh13B3Vkf4YKeoEEPeMMScgxHDhLmGLFNsji-W19xA82qQm92mZLufq84QxUFWCg&oh=a4d351087b85b62ff496684a95449478&oe=5BAA9053', text: 'Csodálatosan szép fehér fogakat varázsolt nekem� sok csillag !!' },
        { name: 'Szilvia Balogh-Takács', tumbnailUrl: 'https://scontent.fiev1-1.fna.fbcdn.net/v/t31.0-8/26024152_1821371451230806_7248335639308178671_o.jpg?_nc_cat=0&_nc_eui2=AeENmNNIdpPRYEo4sgKoTxUAdZNeHrqOamWnmbfgPnaRqUx0aYcu-awfjfzFRd9-5sUF3-oTNnZJ7fraB6iQ_PXLaL8ocl202vkzlbScK8Ma5A&oh=cfb67ee14a35a452eab516be29c82d26&oe=5BC01165', text: 'A 6 éves lányomat Dr. Kovács Annához vittem először, nem jart még fogorvosnál, nagyon megvolt rémülve. De sikerült megnyugtatnia és kezelni a fogait. Lelkiismeretes, precíz, nyugodt és türelmes! ����' },
        { name: 'Nóra Bencsikné Tihanyi', tumbnailUrl: 'https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-1/28058881_1724357414290160_1279855737618029445_n.jpg?_nc_cat=0&_nc_eui2=AeEmWtnE0xHjbePvzul-4A41FaQfRZcMND2Cv41qUlxesNbQumDRdXnG_BdvUpLCpXj-FBfV63QQHDW2YqywAsIIZ21HvrKCRvwt5aSs-yoadQ&oh=6fdeb78ab69627f3ac2f861f4c73b090&oe=5BB58030', text: 'Nagy türelme , precíz ,szép munkája miatt minden olyan embernek - gyereknek és felnőttnek - tiszta szívből ajánlom akinek már a fogorvos szó hallatán is ökölbe szorul a gyomra a félelemtől . :(  :)' },
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

@media only screen and (max-width:768px) {
}

</style>
