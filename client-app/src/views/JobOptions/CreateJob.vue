<template>
    <div class="createjob">
        <h1>Create a job</h1>

        <form id="newJobForm">

            <div class="form-group">
                <label for="newJobCustomer">Customer*:</label>
                <input v-model="newJobCustomer" placeholder="Enter customer here" v-validate="'required|min:1|max:64'" />
            </div>
            <br/>



        </form>

    </div>


</template>