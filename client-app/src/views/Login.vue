<template>
    <div class="home">
        <h1>Log in</h1>
        <h2>Email</h2>
        <input v-model="Email" placeholder="Email" />
        <h2>Password</h2>
        <input v-model="Password" type="password" />
        <br />
        <br />
        <br />
        <a class="loginbutton" v-on:click="onLoginPressed">Log in</a>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
            return {
                Email: '',
                Password: '',
            }
    },
    methods: {
        onLoginPressed: async function () {
            if (await login(this.Email, this.Password) === 0) {
                this.$root.$emit('loggedInSuccessfully')
                this.$router.push('/');
            }
        },
    },
    }

     async function login(email, password) {
        let url = "https://localhost:44368/api/account/login";
        try {
            let response = await fetch(url,
                {
                    method: "POST",
                    body: JSON.stringify({ email, password }), // Assumes data is in an object called form
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                });
            if (response.ok) {
                let answer = await response.json();
                //alert("Server returned: " + token.toString());
                localStorage.setItem("token", answer.loginToken.jwt);
                localStorage.setItem("isManager", answer.isManager);
                localStorage.setItem("loginId", answer.loginId);
                localStorage.setItem("specificId", answer.specificId);
                localStorage.setItem("email", email);
                // Change view to some other component
                // …
            } else {
                alert("Server returned: " + response.statusText);
                return -1;
            }
        } catch (err) {
            alert("Error: " + err);
            return -1;
        }
        return 0;
    }
</script>

<style>
    .loginbutton {
        background-color: #850000;
        font-weight: bold;
        color: white;
        text-align: center;
        padding: 15px;
        text-decoration: none;
    }

        .loginbutton:hover {
            background-color: #ae0000;
        }
</style>