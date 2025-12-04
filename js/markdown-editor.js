const markedLib = window.marked;

const app = Vue.createApp({
    data() {
        return {
            input: '# Vue 3 Markdown 編輯器'
        };
    },
    computed: {
        compiledMarkdown() {
            return markedLib.parse(this.input);
        }
    },
    methods: {
        update: _.debounce(function(e) {
            this.input = e.target.value;
        }, 300)
    }
});

app.mount('#editor');