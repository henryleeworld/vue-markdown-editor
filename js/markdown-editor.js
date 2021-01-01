const app = Vue.createApp({
    data() {
        return {
            input: '# Vue Markdown 編輯器'
        }
    },
    computed: {
        compiledMarkdown() {
            return marked(this.input, {
                sanitize: true
            });
        }
    },
    methods: {
        update: _.debounce(function(e) {
            this.input = e.target.value;
        }, 300)
    }
})

app.mount('#editor')