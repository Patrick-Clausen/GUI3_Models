<template>
    <div class="joblist">
        <h1>Job List</h1>
        <div class="center">
            <ul id="list" style="list-style-type:none;" v-if="isManager">
                <li v-for="job in jobs" :key="job" class="item">
                    <a v-on:click="gotosite('modelemployment')">
                        At {{job.location}} for {{job.customer}}
                    </a>
                </li>
            </ul>

            <ul id="list" style="list-style-type:none;" v-if="!isManager">
                <li v-for="job in jobs" :key="job" class="item">
                    <a v-on:click="gotosite('addexpense')">
                        At {{job.location}} for {{job.customer}}
                     </a>
                </li>
            </ul>
        </div>

    </div>


</template>


<script>
    export default {
        name: "JobList",

        data() {
            return {
                isManager: (localStorage.getItem("isManager") == 'true'),
                jobs: [],
            }
        },


        mounted() {
            this.getJobs();
        },


        methods: {
            gotosite: function (url) {
                this.$router.push(url);
            },

            getJobs: async function () {
                let url = "https://localhost:44368/api/Jobs";
                fetch(url, {
                    method: 'GET', // Or DELETE
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                }).then(async responseJson => {
                    this.jobs = await responseJson.json();
                });
            },
        }
    }
</script>

<style>
    .center {
        margin: 0;
        position: absolute;
        top: 30%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .item {
        background-color: #850000;
        font-weight: bold;
        color: white;
        text-align: center;
        max-width: 600px;
        margin-top: 5px;
        cursor: pointer;
    }

    .item:hover {
        background-color: #ae0000;
    }
</style>