<template>
    <div class="addExpense">
        <h1>Add an expense to a job</h1>
            <h2>Create a new manager</h2>

            <form id="newManagerForm">

                <div class="form-group">
                    <label for="modelId">Model*: </label>
                    <select v-model="modelId" placeholder="Select model"/>
                </div>
                <br />

                <div class="form-group">
                    <label for="newManagerfirstName">First name*: </label>
                    <input v-model="newManagerfirstName" placeholder="Enter first name here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="date">Date*: </label>
                    <input type="date" v-model="date" placeholder="Enter date of expense here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newManagerPassword">Password*: </label>
                    <input type="password" v-model="newManagerPassword" placeholder="Enter password here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <a type="type" class="submitbutton" v-on:click="onSubmitNewManagerPressed">Submit</a>
                </div>
                <br />

                <span class="text-danger">{{ManagerMessage}}</span>
            </form>

            <br />

    </div>
</template>

<script>
    export default {
        name: "jobs",

        data() {
            return { isManager: (localStorage.getItem("isManager") === 'true') }
        },

        methods: {
            gotosite(url) {
                this.$router.push(url)
            },

            onLogoutPressed: function () {
                this.loggedIn = false;
                this.isManager = false;
                this.gotosite('/');
            },
        }
    }
</script>