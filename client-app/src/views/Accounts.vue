<template>
    <div class="accounts">
        <h1>Welcome to the account management page!</h1>
        <div v-if="isManager">
            <h2>Create a new manager</h2>

            <form id="newManagerForm">

                <div class="form-group">
                    <label for="newManagerEmail">Email: </label>
                    <input type="email" v-model="newManagerEmail" placeholder="Enter email here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newManagerfirstName">First name: </label>
                    <input v-model="newManagerfirstName" placeholder="Enter first name here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newManagerlastName">Last name: </label>
                    <input v-model="newManagerlastName" placeholder="Enter last name here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newManagerPassword">Password: </label>
                    <input type="password" v-model="newManagerPassword" placeholder="Enter password here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <a type="type" class="submitbutton" v-on:click="onSubmitNewManagerPressed">Submit</a>
                </div>
                <br />

                <span class="text-danger">{{message}}</span>
            </form>

        <br />

    </div>
        

    </div>
</template>

<script>// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'accounts',

        data() {
            return {
                message: "",
                newManagerEmail: "",
                newManagerfirstName: "",
                newManagerlastName: "",
                newManagerPassword: "",
                loggedIn: localStorage.getItem("token"),
                isManager: localStorage.getItem("isManager")
            }
        },

        mounted() {
            this.$root.$on('loggedInSuccessfully', () => {
                this.loggedIn = true;
                this.isManager = localStorage.getItem("isManager");
            });
        },

        methods: {
            onLogoutPressed: function () {
                this.loggedIn = false;
                this.isManager = false;
            },

            onSubmitNewManagerPressed: async function () {
                if (this.newManagerEmail === "") {
                    this.message = "You have to fill in an email!";
                    return;
                }

                if (this.newManagerfirstName === "") {
                    this.message = "You have to fill in a first name!";
                    return;
                }

                if (this.newManagerlastName === "") {
                    this.message = "You have to fill in a last name!";
                    return;
                }

                if (this.newManagerPassword === "") {
                    this.message = "You have to fill in a password!";
                    return;
                }

                let url = "https://localhost:44368/api/Managers";
                let objectToSend = { firstName: this.newManagerfirstName, lastName: this.newManagerlastName, email: this.newManagerEmail, password: this.newManagerPassword };
                try {
                    let response = await fetch(url,
                        {
                            method: "POST",
                            body: JSON.stringify(objectToSend), // Assumes data is in an object called form
                            credentials: 'include',
                            headers: new Headers({
                                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                                "Content-Type": "application/json"
                            })
                        });
                    if (response.ok) {
                        return 0;
                    } else {
                        alert("Server returned: " + response.statusText);
                        return -1;
                    }
                } catch (err) {
                    alert("Error: " + err);
                }
            },
        }
}</script>

<style>
    table, tr, th{
        border: 1px solid black;
        margin-left: auto;
        margin-right: auto;
    }
    .submitbutton {
        background-color: #850000;
        font-weight: bold;
        color: white;
        text-align: center;
        padding: 15px;
        text-decoration: none;
    }

        .submitbutton:hover {
            background-color: #ae0000;
        }

        .text-danger{
            color: #ff0000;
        }

</style>