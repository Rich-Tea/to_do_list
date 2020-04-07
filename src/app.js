import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            items: [
                { task: "Feed the cat", isDone: true},
                { task: "Tidy kitchen", isDone: false},
                { task: "Create a Vue app", isDone: true}
            ],
         newToDo: ""
        },
        methods: {
            saveNewToDo: function() {
                this.items.push({
                    task: this.newToDo,
                    isDone: false
                });
                this.newToDo = ""
            },
            doItem: function(index) {
                this.items[index].isDone = true;
            }
        }
    });
});


