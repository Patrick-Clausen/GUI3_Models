<template>
    <div class="jobs">
        <h1>Welcome to the Job management page!</h1>
            <div class="center">
                <div class="button-grp" v-if="isManager">
                    <a v-on:click="gotosite('createjob')">Create new Job</a>
                </div>

                <div class="button-grp" v-if="isManager">
                    <a v-on:click="gotosite('modelemployment')">Model Employment</a>
                </div>

                <div class="button-grp">
                    <a v-on:click="gotosite('joblist')">List of Jobs</a>
                </div>

                <div class="button-grp" v-if="!isManager">
                    <a v-on:click="gotosite('addexpense')">Add Expense</a>
                </div>
             </div>
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
            },
        }
    }
</script>

<style>

    .button-grp:hover {
        background-color: #ae0000;
    }

    .text-danger {
        color: #ff0000;
    }

    .button-grp {
        background-color: #850000;
        font-weight: bold;
        color: white;
        text-align: center;
        padding: 10px;
        width: 150px;
        cursor: pointer;
        float: left;
        margin-left: 20px;
    }

    .center {
        margin: 0;
        position: absolute;
        top: 40%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>