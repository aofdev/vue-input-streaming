<template>
  <v-layout row wrap>
    <v-flex xs4>
    </v-flex>
    <v-flex xs4 class="text-xs-center">
      <v-text-field label="TextInput" v-model="text" @focus="inFocus()" @blur="outFocus()" dark></v-text-field>
      </br>
    </v-flex>
    <v-flex xs4>
    </v-flex>
    <v-flex xs12>
      <transition name="slide">
        <div v-show="focusStreaming" class="text-xs-center">
  
          <v-layout row wrap>
            <v-flex xs3>
            </v-flex>
            <v-flex xs6>
              <SyncLoader></SyncLoader>
            </v-flex>
            <v-flex xs3>
            </v-flex>
          </v-layout>
          <br>
        </div>
      </transition>
         <transition name="slide">
        <div class="text-xs-center">
  
          <v-layout row wrap>
            <v-flex xs3>
            </v-flex>
            <v-flex xs6>
              <v-card class="blue-grey darken-2 white--text">
                       <v-card-title primary-title>
                <div class="headline"></div>
                <div>{{textShow}}</div>
              </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs3>
            </v-flex>
          </v-layout>
          <br>
        </div>
      </transition>
  
  
  
    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios'
  import Pusher from 'pusher-js'
  const SyncLoader = () => import ('./SyncLoader.vue');
  const pusher = new Pusher('', {
    cluster: '',
    encrypted: true
  });
  const channel = pusher.subscribe('inputStreaming');
  export default {
    data() {
      return {
        focusStreaming: false,
        text:'',
        textShow:''
      }
    },
    watch: {
      text: function (newText) {
          axios.post('http://localhost:5000/inputStreaming/text', {
          text: newText
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    methods: {
      inFocus() {
        axios.get('http://localhost:5000/inputInStreaming')
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      outFocus() {
        axios.get('http://localhost:5000/inputOutStreaming')
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      loadFocus() {
        channel.bind('focusInStreaming', data => {
          console.log(data.message);
          this.focusStreaming = true;
        })
        channel.bind('focusOutStreaming', data => {
          console.log(data.message);
          this.focusStreaming = false;
        })
        channel.bind('focusTextStreaming', data => {
          this.textShow = data.message;
        })
      }
    },
    mounted() {
      this.loadFocus();
    },
    components: {
      SyncLoader
    }
  }
</script>


<style>
   .slide-enter {
    opacity: 0;
  }
  
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  
  .slide-move {
    transition: transform 1s;
  }
  
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
