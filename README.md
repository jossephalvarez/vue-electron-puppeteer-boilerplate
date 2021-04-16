[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate">
    <img src="https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate/blob/master/src/images/Logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Vue + Electron + Puppeter Boilerplate</h3>

  <p align="center">
    An awesome boilerplate to start automatization using Puppeteer with deskop UI
    <br />
    <a href="https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate">View Demo</a>
    ·
    <a href="https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

 An awesome boilerplate template to start automation RPA using Puppeteer with desktop UI
 
Here's why:
* Your could start automation RPA with desktop interface

### Built With

* [Electron](https://www.electronjs.org/)
* [Vue](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/)
* [Puppeteer](https://pptr.dev/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* Chrome

* npm
  ```sh
  npm install
  ```

### Installation

1. You should use your chrome path and change on src/plugins/puppeteer.js
   
     ```sh
     executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
     ```
2. You can use serve while develop
     ```
        npm run electron:serve
     ```
3. You can build the .exe 
     ```
        npm run electron:build
     ```
    * When you run this command, you can check the .exe on :
        ```
        dist_electron\vue-electron-puppeteer-boilerplate Setup 0.1.0.exe
       ```

<!-- USAGE EXAMPLES -->
## Usage

You can use this example, adding VUEX too.

If you want to modify or add new features on this example, check the component HelloWorld.vue and src/plugins/puppeteer.js

_Example: [Screenshot Generator](https://github.com/mvaneijgen/screenshot-generator-app/)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

My Linkedin: [https://www.linkedin.com/in/jossephalvarez/](https://www.linkedin.com/in/jossephalvarez/)

Project Link: [https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate](https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate)

Gmail: jossephalvarez@gmail.com


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Electron updater](https://www.npmjs.com/package/electron-updater)
* [Electron Builder](https://www.electron.build/)
* [Electron Ipc main](https://www.electronjs.org/docs/api/ipc-main)
* [Screenshot Generator by Mitchel van Eijgen](https://github.com/mvaneijgen/screenshot-generator-app/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jossephalvarez/
[product-screenshot]: https://github.com/jossephalvarez/vue-electron-puppeteer-boilerplate/blob/master/src/images/gif.gif
