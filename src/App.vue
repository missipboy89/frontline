<template>
  <div>
    <Layout></Layout>
    <BiblePassage></BiblePassage>
  </div>
</template>

<script>
import Layout from './components/Layout';
import BiblePassage from './components/BiblePassage';

export default {
  name: 'App',
  components: {
    Layout,
    BiblePassage
  }
}
</script>