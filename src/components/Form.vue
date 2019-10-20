<template>

  <div class="form-content">
   <form @submit.prevent="submitForm()">
     <div class="form-img">
     <img src="../assets/img/cute.svg" alt="">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons">

     </div>
     <input type="text" 
            class="email" 
            placeholder="Email..." 
            v-model="email"
            name="email"
            v-validate = "'email'"
            />
      <transition name="alert-in">
    <p class="alert" v-if="errors.has('email')"> {{ errors.first('email') }} </p>
      </transition>
     <input type="text" 
            class="numbers" 
            placeholder="Number..."
            name="number"
            v-model="number"
            v-validate = "'integer'"
            />
        <transition name="alert-in">
     <p class="alert" v-if="errors.has('number')">The number field must be a number</p>
        </transition>

     <select name="selectedNumber" v-model="selectedNumber">
       <option value="100">100</option>
       <option value="200">200</option>
       <option value="300">300</option>
       <option value="400">400</option>
       <option value="500">500</option>
     </select>

     <div class="" style="display: flex; justify-content: center; margin-top: 30px;">
          <div class="">
          <md-button class="md-raised" type = "submit">submit</md-button>
          </div>


     </div>
      <div class="" style="display: flex; justify-content: center;">
          <img v-if="formSubmited && formIsValid" src="../assets/img/loader.svg">
          <img v-else :src="qrCodeUrl" alt="" > 
     </div>
   </form>
  </div>
</template>

<script>
import axios from 'axios';
import { email, required } from 'vuelidate/lib/validators'

export default {
  name: 'app-form',
  data() {
    return {
      formSubmited: false,
      formIsValid: false, 
      qrCodeUrl: '',
      email: '',
      number: '',
      selectedNumber:''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    number: {
      required
    }
  },
  methods: {
    submitForm() {
      let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.email}, ${this.number}, ${this.selectedNumber}`
      this.formSubmited = true; 

      //**  */ Validate and submit form  ** 
      this.$validator.validateAll()
          .then(result => {
            if(result) {
              if(this.email.trim().length > 0 && this.number.trim().length > 0 ) {
                if(this.formSubmited) {   
                  this.formIsValid = true; 
                  axios
                    .get(api)
                    .then(data => {
                        window.console.log(data.config.url); 
                        this.qrCodeUrl = data.config.url
                        this.formSubmited = false; 
                    })
                    .catch(err => {
                      window.console.log("in Err: " + err); 
                    }) 
                }
            }    
        }
    }) 
  },
    
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

/* @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";  */
body {
    font-family: 'Montserrat', sans-serif;

}
.form-content {
  display: block;
  background-color: #222642; 
  border-top: 5px solid #88CD96;
  -webkit-box-shadow: 0px 1px 5px 1px rgba(0,0,0,1);
-moz-box-shadow: 0px 1px 5px 1px rgba(0,0,0,1);
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,1);
}

.form-img {
  display: flex;
  justify-content: center;
}

img {
  /* margin-top: 15px; */
  margin: 15px 0 15px 0;
  width: 150px;
  /* height: 150px; */
}

input,select {
    width: calc(100% - 40px);
    /* width: 100%; */
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #88CD96;
    /* margin-bottom: 15px; */
  }
  select { 
    /* width: 100%; */
  }
  select:focus {
    outline: 1px solid #88CD96;

  }
  input:focus {
    outline: 1px solid #88CD96;
   
  }

  button {
    background-color: rgb(212, 44, 122); 
    border: 1px solid rgb(212, 44, 122);
    /* border-radius: 50px; */
    color: #ffff;
    width: 205px; 
    height: 55px;
    font-size: 18px; 

  }
/* 
  button:hover {
    background-color: rgb(185, 84, 133); 
    border-color: #88CD96;
    transition: .4s;
  }

  button:focus {
    outline: none; 
  }  */

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

.alert-in-enter-active {
    animation: bounce-in .5s;
  }
  
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
