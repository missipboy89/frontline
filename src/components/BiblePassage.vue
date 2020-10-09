<template>
    <div>
        <div class="ui inverted segment">
            <form action="https://www.biblegateway.com/quicksearch/" target="_blank">
            <div class="ui fluid icon input"><input @input="onInput" type="text" placeholder="Search..." name="quicksearch">
            <button class="ui button">Search Bible Gateway</button>
            <a href="https://www.biblegateway.com/" title="The Bible in multiple languages, versions, and formats" >
            </a>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BiblePassage'
}
</script>t