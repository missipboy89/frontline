<template>
  <div>

    <div class="ui inverted segment">
      <div class="ui inverted secondary menu">
        <a href="/" class="red item active">Home</a>
        <a href="/" class="red item active">Mission</a>
        <a href="/" class="red item active">Calendar</a>
        <a href="/" class="red item active">Contact</a>
        <div class="right menu">
          <a href="/" class="red item active">Login</a>
        </div>
      </div>
    </div>
    <h1 class="platoon">
        FRONTLINE SOC
    </h1>
    <div class="ui horizontial divider"></div>

  </div>
</template>

<script>
export default {
  name: 'Layout'
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
}
</style>