<template>
  <div id="treatments" class="space-medium">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="section-title">
            <h1>{{this.title}}</h1>
            <p>{{this.motto}}</p>
          </div>
        </div>
      </div>
      <div class="row" v-for="chunk in treatmentsInChunks" v-bind:key="chunk.title">
        <div v-for="content in chunk" v-bind:key="content.title">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="service-block">
              <div class="service-icon">
                <i v-bind:class="content.icon"></i> </div>
              <div class="">
                <h3>{{content.title}}
                </h3>
                <p v-if="showDetails">{{content.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Treatments',
  data() {
    return {
      title: 'Fogászati kezelések',
      motto: '',
      showDetails: false,
      treatments: [
        {
          content: 'A rendelöben végzett fogfehérítés nagyjából 1-2 órát vesz igénybe és általálában egy ülésben elvégezhetö',
          title: 'Fogfehérítés',
          href: '/fogfeherites',
          icon: 'icon-036-tooth-4',
        },
        {
          content: 'A gyökérkezelés célja azon fogak megmentése, melyeknek a gyökere már valamilyen okból elhalt.',
          title: 'Gyökérkezelés',
          href: '/gyokerkezeles',
          icon: 'icon-017-tooth-9',
        },
        {
          content: 'Simple dummy conetnt viverra scelerisque molve nise nunc laoreet.',
          title: 'Fogpótlás',
          href: '/fogpotlas',
          icon: 'icon-024-tooth-6',
        },
        {
          content: 'Conetent viverra scelerisques vel nec nuc sagittis laoreet sit amet id.',
          title: 'Gyermekfogászat',
          href: '/gyermekfogaszat',
          icon: 'icon-001-dentist',
        },
        {
          content: 'Simple dummy conetnt viverra scelerisque molve nise nunc laoreet.',
          title: 'Konzerváló fogászat',
          href: '/konzervalo-fogaszat',
          icon: 'icon-016-tooth-10',
        },
        {
          content: 'Conetent viverra scelerisques vel nec nuc sagittis laoreet sit amet id.',
          title: 'Fogeltávolítás',
          href: '/fogeltavlitas',
          icon: 'icon-023-tooth-7',
        },
      ],
    };
  },
  computed: {
    treatmentsInChunks() {
      return _.chunk(this.treatments, 3);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section-title p {
  font-weight: 500;
}

.service-block.service-icon i {
  color: #e85e7863;
}

@media only screen and (max-width:768px) {
}

</style>
