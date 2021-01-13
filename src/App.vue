<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn @click="testPuppeteer()">
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import puppeteer from 'puppeteer-core';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
  methods:{
    async testPuppeteer(){
      console.log('testPuppeteer3');
      const promiseExample= new Promise((resolve) => {
        resolve('Hola')
      });
      try{
        // TODO https://stackoverflow.com/questions/61770784/typeerror-err-invalid-arg-type-the-original-argument-must-be-of-type-functi
        await promiseExample.then((r)=> console.log(r))
        let exPath2='C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'

        let launchOptions = { headless: false,
          executablePath: exPath2,
          args: ['--start-maximized'] };

        const browser = await puppeteer.launch(launchOptions);

//launches started popup
        const page = await browser.newPage();
        // set viewport and user agent (just in case for nice viewing)
        await page.setViewport({width: 1366, height: 768});
        await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

        await page.goto('https://mvaneijgen.nl/');
        await page.screenshot({ path: './image.jpg', type: 'jpeg' });
        return promiseExample;
      } catch (e) {
        console.error(e);
      }
    },
  },

  data: () => ({
    //
  }),
};
</script>
