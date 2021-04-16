<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          🤖 Vue Electron + Vuetify + Puppeter Boilerplate 🤖
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other developers want build automation bots using UI
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <v-btn color="info" @click="testPuppeteer()">
            <span class="mr-2">Test me!</span>
            <!--<v-icon color="blue darken-2">mdi-dialpad</v-icon>-->
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {ipcRenderer} from "electron";

  export default {
    name: 'HelloWorld',

    data: () => ({ }),
    methods:{
      testPuppeteer(){
        console.log('testPuppeteer .... checking');
        ipcRenderer.send("puppeteer");
      },
    },
  }
</script>
