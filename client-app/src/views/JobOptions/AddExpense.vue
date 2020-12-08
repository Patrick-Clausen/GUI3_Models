<template>
    <div class="addExpense">
        <h1>Add an expense to a job</h1>

        <form id="expenseform">

            <div class="form-group">
                <label for="jobId">Job*: </label>
                <select v-model="jobId" placeholder="Select job">
                    <option v-for="test in jobs" :key="test" :value="test.efJobId">At {{test.location}} for {{test.customer}}</option>
                </select>
            </div>
            <br />

            <div class="form-group">
                <label for="date">Date*: </label>
                <input type="date" v-model="date" placeholder="Enter date of expense here" />
            </div>
            <br />

            <div class="form-group">
                <label for="text">Expense text*: </label>
                <input v-model="text" placeholder="Enter expense text here" />
            </div>
            <br />

            <div class="form-group">
                <label for="amount">Expenditure amount*: </label>
                <input type="number" v-model="amount" placeholder="Enter expenditure amount here" />
            </div>
            <br />

            <div class="form-group">
                <a type="type" class="submitbutton" v-on:click="onSubmitPressed">Submit</a>
            </div>
            <br />

            <span class="text-danger">{{Message}}</span>
          
        </form>

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
                date: undefined,
                amount: undefined,
                text: "",
            }
        },

        mounted() {
            this.getJobs();
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

            onSubmitPressed: async function () {
                let url = "https://localhost:44368/api/Expenses";
                try {
                    let response = await fetch(url, {
                        method: 'POST', // Or DELETE
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "modelId": parseInt(localStorage.getItem("specificId")),
                            jobId: this.jobId,
                            date: this.date,
                            text: this.text,
                            amount: parseFloat(this.amount),
                        }),
                    });

                    if (response.ok) {
                        this.Message = "Expense created";
                        this.jobId = undefined;
                        this.date = undefined;
                        this.amount = undefined;
                        this.text = "";
                    } else {
                        this.Message = "Failed!";
                    }
                } catch (err) {
                    alert("Server failed with error: " + err);
                }
                

                
            }
        }
    }
</script>