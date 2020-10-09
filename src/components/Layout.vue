<template>
  <div>

    <b-navbar toggleable="lg" type="dark" variant="dark" sticky=true>
      <b-navbar-brand tag="h1" class="platoon" href="/">FRONTLINE SOC</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/">Mission</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <img class="ui centered huge image" src="../assets/unnamed.jpg">
    <div class="ui horizontial divider"></div>
    <div>
      <Parallax></Parallax>
    </div>

  </div>
</template>

<script>
import Parallax from './Parallax'

export default {
  name: 'Layout',
  components: {
    Parallax
  }
}
</script>

<style>
@font-face {
  font-family: PLATOoN;
  src: local("PLATOoN"), 
  url(../fonts/PLATOoN.ttf) format("truetype");
}

.platoon {
  font-family: "PLATOoN";
  font-size: 120px;
  color: solid black;
  text-align: center;
  margin: auto;
}
</style>