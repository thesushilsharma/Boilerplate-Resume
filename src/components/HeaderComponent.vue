<script setup lang="ts">
import { RouterLink} from 'vue-router'
function toggleMenu(menuElement: HTMLElement) {
  menuElement.classList.toggle('hidden');
  menuElement.classList.toggle('w-full');
  menuElement.classList.toggle('h-screen');
}

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => toggleMenu(menu));
  } else {
    console.error('Menu button or menu not found');
  }
});

</script>

<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav
        class=" fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse lg:flex-wrap">
            <!-- <img src="../assets/sushil.jpg" class="h-8" alt="">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">Sushil
                            Sharma</span> -->

            <svg viewBox="0 0 840 60" class="sitelogo w-full h-auto font-normal mr-3 sm:h-9">
              <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="50%" dy=".35em">
                  &lt;The Sushil Sharma/&gt;
                </text>
              </symbol>
              <use xlink:href="#s-text" class="sitelogotext"></use>
              <use xlink:href="#s-text" class="sitelogotext"></use>
              <use xlink:href="#s-text" class="sitelogotext"></use>
              <use xlink:href="#s-text" class="sitelogotext"></use>
              <use xlink:href="#s-text" class="sitelogotext"></use>
            </svg>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a :href="`https://thesushilsharma.github.io/Portfolio/`"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Showcase</a>
            <button type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              id="menu-button">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="menu">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:py-0 lg:self-center">
              <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
                <RouterLink :to="{ name: 'Home' }"
                  class="text-sm font-medium text-gray-900 hover:text-blue-600"
                  aria-current="page">
                  Home
                </RouterLink>
              </li>
              <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
                <RouterLink :to="{ name: 'Facts' }"
                  class="text-sm font-medium text-gray-900 hover:text-blue-600">
                  Facts
                </RouterLink>
              </li>
              <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
                <RouterLink :to="{ name: 'TechStack' }"
                  class="text-sm font-medium text-gray-900 hover:text-blue-600">
                  Tech-Stack
                </RouterLink>
              </li>
              <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
                <RouterLink :to="{ name: 'Projects' }"
                  class="text-sm font-medium text-gray-900 hover:text-blue-600">
                  Projects
                </RouterLink>
              </li>
              <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
                <RouterLink :to="{ name: 'Journal' }"
                  class="text-sm font-medium text-gray-900 hover:text-blue-600">
                  Journal
                </RouterLink>
              </li>
              <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
                <RouterLink :to="{ name: 'Contact' }"
                  class="text-sm font-medium text-gray-900 hover:text-blue-600">
                  Contact-Us
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.sitelogo {
  /* width: 100%; */
  /* height: auto; */
  font-family: "Playpen Sans", cursive;
  /* font-weight: 400; */
}

.sitelogotext {
  fill: none;
  stroke-width: 2px;
  stroke-linejoin: round;
  stroke-dasharray: 70px;
  stroke-dashoffset: 0;
  -webkit-animation: stroke 6s linear infinite;
  -moz-animation: stroke 6s linear infinite;
  animation: stroke 6s linear infinite;
  font-size: 4em;
  text-transform: uppercase;
}

.sitelogotext:nth-child(5n + 1) {
  stroke: #228cdb;
  -webkit-animation-delay: -1.2s;
  -moz-animation-delay: -1.2s;
  animation-delay: -1.2s;
}

.sitelogotext:nth-child(5n + 2) {
  stroke: #FA7921;
  -webkit-animation-delay: -2.4s;
  -moz-animation-delay: -2.4s;
  animation-delay: -2.4s;
}

.sitelogotext:nth-child(5n + 3) {
  stroke: #F72585;;
  -webkit-animation-delay: -3.6s;
  -moz-animation-delay: -3.6s;
  animation-delay: -3.6s;
}

.sitelogotext:nth-child(5n + 4) {
  stroke: #7CB518;
  -webkit-animation-delay: -4.8s;
  -moz-animation-delay: -4.8s;
  animation-delay: -4.8s;
}

.text:nth-child(5n + 5) {
  stroke: #7B2FF2;
  -webkit-animation-delay: -6s;
  -moz-animation-delay: -6s;
  animation-delay: -6s;
}

@-webkit-keyframes stroke {
  to {
    stroke-dashoffset: -400;
  }
}

@-moz-keyframes stroke {
  to {
    stroke-dashoffset: -400;
  }
}

@keyframes stroke {
  to {
    stroke-dashoffset: -400;
  }
}
</style>
