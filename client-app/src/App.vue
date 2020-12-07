<template>
  <div id="app">
    <div id="topnav" class="topnav">
        <div class="leftnav">
            <router-link to="/">Home</router-link>
            <router-link v-if="loggedIn" to="/accounts">Accounts</router-link>
            <router-link v-if="loggedIn" to="/jobs">Jobs</router-link>
        </div>
        <div class="rightnav">
            <router-link v-if="!loggedIn" to="/login">Login</router-link>
            <a v-if="loggedIn" v-on:click="onLogoutPressed">Logout</a>
            <router-link v-if="loggedIn" to="/accountsettings">{{accountName}}</router-link>
        </div>
      
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                loggedIn: localStorage.getItem("token"),
                accountName: localStorage.getItem("email")
            }
        },

        mounted() {
            this.$root.$on('loggedInSuccessfully', () => {
                this.loggedIn = true;
                this.accountName = localStorage.getItem("email");
            });
        },

        methods: {
            onLogoutPressed: function () {
                this.loggedIn = false;
                this.accountName = "";
                localStorage.removeItem("token");
                localStorage.removeItem("email");
            }
        }
    }



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

    .topnav {
        background-color: #850000;
        overflow: hidden;
    }

        .topnav a {
            font-weight: bold;
            color: white;
            text-align: center;
            padding: 15px;
            text-decoration: none;
        }

    .topnav a:hover{
        background-color: #ae0000;
    }

    .leftnav a{
        float: left;
        
    }

    .rightnav a {
        float: right;
    }
</style>
