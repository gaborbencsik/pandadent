<template>
  <div id="showPhoneNumber" class="">
    <div class="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3></h3>
            <h4 class="modal-title" id="myModalLabel">
              <span>Telefon:</span>
              <span>{{this.phoneNumber}}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShowPhoneNumber',
  data() {
    return {
      phoneNumber: '',
    };
  },
  mounted() {
    fetch('/phone', {
      method: 'GET',
    }).then(response => response.json())
      .then((response) => {
        this.phoneNumber = response.phone;
      });
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.modal-dialog {
  top: 300px;
}

.modal-title {
  text-align: center;
  font-size: 3rem;
}

.modal-header .close span {
  color: #690f17;
  font-size: 3rem;
}

@media only screen and (max-width:768px) {
  .modal-title {
    display: flex;
    flex-direction: column;
  }
}

</style>
