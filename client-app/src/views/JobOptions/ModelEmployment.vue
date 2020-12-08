<template>
    <div class="modelEmployment">
        <h1>Employ or dismiss a model</h1>


        <div>
            <form id="form">
                <div class="form-group">
                    <label for="jobId">Job*: </label>
                    <select v-model="jobId" placeholder="Select job">
                        <option v-for="job in jobs" :key="job.efJobId" :value="job.efJobId">At {{job.location}} for {{job.customer}}</option>
                    </select>
                </div>
                <br />

                <div class="form-group">
                    <label for="modelId">Model*: </label>
                    <select v-model="modelId" placeholder="Select model">
                        <option v-for="model in models" :key="model.efModelId" :value="model.efModelId">{{model.firstName}} {{model.lastName}}</option>
                    </select>
                </div>
                <br />
                <br />





                <div class="form-group">
                    <a class="submitbutton" v-on:click="onAddPressed">Add model to job</a>
                    <a class="submitbutton" v-on:click="onRemovePressed">Remove model from job</a>

                </div>
                <br />

                <span class="text-danger">{{Message}}</span>
            </form>
        </div>

    </div>

</template>



<script>
    export default {
        name: "AddExpense",

        data() {
            return {
                Message: "",
                isManager: (localStorage.getItem("isManager") == 'true'),
                jobs: [],
                jobId: undefined,
                models: [],
                modelId: undefined,
            }
        },

        mounted() {
            this.getJobs();
            this.getModels();
        },


        methods: {
            gotosite: function (url) {
                this.$router.push(url)
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

            getModels: async function () {
                let url = "https://localhost:44368/api/Models";
                fetch(url, {
                    method: 'GET', // Or DELETE
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                }).then(async responseJson => {
                    this.models = await responseJson.json();
                });
            },

            onAddPressed: async function () {
                let url = "https://localhost:44368/api/Jobs/" + this.jobId + "/model/" + this.modelId;
                try {
                    let response = await fetch(url, {
                        method: 'POST', // Or DELETE
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        },
                    });

                    if (response.ok) {
                        this.Message = "Added";
                        this.jobId = undefined;
                        this.modelId = undefined;
                    } else {
                        this.Message = "Failed: " + (await response.json()).title;
                    }
                } catch (err) {
                    alert("Server failed with error: " + err);
                }
            },

            onRemovePressed: async function () {
                let url = "https://localhost:44368/api/Jobs/" + this.jobId + "/model/" + this.modelId;
                try {
                    let response = await fetch(url, {
                        method: 'DELETE', // Or DELETE
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        },
                    });

                    if (response.ok) {
                        this.Message = "Removed";
                        this.jobId = undefined;
                        this.modelId = undefined;
                    } else {
                        let responseJson = (await response.json());
                        
                        if (responseJson.title === undefined) {
                            this.Message = "Failed: ";
                            for (let key in responseJson) {
                                this.Message += responseJson[key];
                                if (responseJson[key] == "jobId or modelId not found") {
                                    this.Message += "... You probably removed someone who wasn't assigned to that job already!";
                                }
                            }
                        } else {
                            this.Message = "Failed: " + responseJson.title;
                        }
                    }
                } catch (err) {
                    alert("Server failed with error: " + err);
                }

            }
        }
    }
</script>