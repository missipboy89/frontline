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
    <div class="ui inverted segment">
      <form action="https://www.biblegateway.com/quicksearch/" target="_blank">
        <div class="ui fluid icon input">
          <input @input="onInput" type="text" placeholder="Search..." name="quicksearch">
          <button class="ui button">Search Bible Gateway</button>
          <a href="https://www.biblegateway.com/" title="The Bible in multiple languages, versions, and formats" ></a>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Layout',
  methods: {
    onInput: function(event) {
      this.$emit('termChange', event.target.value);
    }
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