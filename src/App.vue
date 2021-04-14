<template>
  <div id="app">
    <Appbar/>
    <div id="main">
      <Navbar class="navigation"/>
      <main class="App__main">
        <transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
          <router-view></router-view>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Appbar from "./components/Appbar";

export default {
  name: "App",
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods:{
    beforeLeave(element){
      this.prevHeight = getComputedStyle(element).height;
    },
  enter(element){
    const { height } = getComputedStyle(element);
    element.style.height = this.prevHeight;
    setTimeout(() =>{
    element.style.height = height;
    });
  },
    afterEnter(element){
    element.style.height='auto';
    },
  },
  components: {
    Navbar,
    Appbar,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", sans-serif;
}

#main {
  display: flex;
  flex-direction: row;
}

.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;

}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
