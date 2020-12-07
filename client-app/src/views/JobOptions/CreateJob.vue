<template>
    <div class="createjob">
        <h1>Create a job</h1>

        <form id="newJobForm">

            <div class="form-group">
                <label for="newJobCustomer">Customer*:</label>
                <input v-model="newJobCustomer" placeholder="Enter customer here" v-validate="'required|min:1|max:64'" />
            </div>
            <br />

            <div class="form-group">
                <label for="newStartDate">Start Date*:</label>
                <input type="date" v-model="newStartDate" placeholder="Enter start date here" v-validate="'required|min:1'" />
            </div>
            <br />

            <div class="form-group">
                <label for="newDaysWork">Days of work:</label>
                <input type="number" v-model="newDaysWork" placeholder="Enter days here" v-validate="'max:2147483647'" />
            </div>
            <br />

            <div class="form-group">
                <label for="newLocation">Location*:</label>
                <input v-model="newLocation" placeholder="Enter location here" v-validate="'required|max:128'" />
            </div>
            <br />

            <div class="form-group">
                <label for="newComment">Comment:</label>
                <input v-model="newComment" placeholder="Enter comment here" v-validate="'max:2000'" />
            </div>

            <br />

            <div class="form-group">
                <a type="type" class="submitbutton" v-on:click="onSubmitNewJobPressed">Submit</a>
            </div>
            <br />


            <span class="text-danger">{{NewJobMessage}}</span>
        </form>

    </div>
</template>

<script>
    export default
    {
        name: 'newJobs',

        data() {
            return {
                NewJobMessage: "",
                newJobCustomer: "",
                newStartDate: "",
                newDaysWork: 0,
                newLocation: "",
                newComment: "",
                loggedIn: localStorage.getItem("token"),
                isManager: localStorage.getItem("isManager"),
            }
        },


        methods: {
            onLogoutPressed: function () {
                this.loggedIn = false;
                this.isManager = false;
            },

            onSubmitNewJobPressed: async function () {
                if (this.newJobCustomer === "") {
                    this.NewJobMessage = "You have to specify a customer!";
                    return;
                }

                if (this.newStartDate === "") {
                    this.NewJobMessage = "You have to specify a start date!";
                    return;
                }

                if (this.newLocation === "") {
                    this.NewJobMessage = "You have to specify a location!";
                    return;
                }

                let url = "https://localhost:44368/api/Jobs";
                let objectToSend = { customer: this.newJobCustomer, startDate: this.newStartDate, days: this.newDaysWork, location: this.newLocation, comments: this.newComment };

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
                        this.newJobCustomer = "";
                        this.newStartDate = "";
                        this.newDaysWork = 0;
                        this.newLocation = "";
                        this.newComment = "";
                        this.NewJobMessage = "Job created";
                        return 0;
                    } else {
                        alert("Server returned: " + response.statusText);
                        return -1;
                    }
                } catch (err) {
                    alert("Error: " + err);
                    return -1;
                }
            },
        }
    }
</script>

<style>
    table, tr, th {
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
        cursor: pointer;
    }

        .submitbutton:hover {
            background-color: #ae0000;
        }

    .text-danger {
        color: #ff0000;
    }
</style>