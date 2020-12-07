<template>
    <div class="accounts">
        <h1>Welcome to the account management page!</h1>
        <div v-if="isManager">
            <h2>Create a new manager</h2>

            <form id="newManagerForm">

                <div class="form-group">
                    <label for="newManagerEmail">Email*: </label>
                    <input type="email" v-model="newManagerEmail" placeholder="Enter email here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newManagerfirstName">First name*: </label>
                    <input v-model="newManagerfirstName" placeholder="Enter first name here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newManagerlastName">Last name*: </label>
                    <input v-model="newManagerlastName" placeholder="Enter last name here" v-validate="'required|min:1|max:40'" />
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

        <div v-if="isManager">
            <h2>Create a new model</h2>

            <form id="newModelForm">

                <div class="form-group">
                    <label for="newModelEmail">Email*: </label>
                    <input type="email" v-model="newModelEmail" placeholder="Enter email here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelFirstName">First name*: </label>
                    <input v-model="newModelFirstName" placeholder="Enter first name here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelLastName">Last name*: </label>
                    <input v-model="newModelLastName" placeholder="Enter last name here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelPassword">Password*: </label>
                    <input type="password" v-model="newModelPassword" placeholder="Enter password here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelPhoneNo">Phone-number: </label>
                    <input v-model="newModelPhoneNo" placeholder="Enter phone-number here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelAddrLineOne">Address line 1: </label>
                    <input v-model="newModelAddrLineOne" placeholder="Enter address line 1 here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelAddrLineTwo">Address line 2: </label>
                    <input v-model="newModelAddrLineTwo" placeholder="Enter address line 2 here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelZip">Zip code: </label>
                    <input v-model="newModelZip" placeholder="Enter zip code here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelCity">City: </label>
                    <input v-model="newModelCity" placeholder="Enter city here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelBirthdate">Birthdate: </label>
                    <input type="date" v-model="newModelBirthdate" placeholder="Enter birthdate here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelNationality">Nationality: </label>
                    <input v-model="newModelNationality" placeholder="Enter nationality here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelHeight">Height: </label>
                    <input v-model="newModelHeight" type="number" placeholder="Enter height here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelShoeSize">Shoe size: </label>
                    <input v-model="newModelShoeSize" type="number" placeholder="Enter shoe size here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelHairColor">Hair color: </label>
                    <input v-model="newModelHairColor" placeholder="Enter hair color here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelEyeColor">Eye color: </label>
                    <input v-model="newModelEyeColor" placeholder="Enter eye color here" v-validate="'required|min:1|max:40'" />
                </div>
                <br />

                <div class="form-group">
                    <label for="newModelComments">Comments: </label>
                    <input v-model="newModelComments" placeholder="Enter comments here" v-validate="'required|min:1|max:500'" />
                </div>
                <br />

                <div class="form-group">
                    <a type="type" class="submitbutton" v-on:click="onSubmitNewModelPressed">Submit</a>
                </div>
                <br />

                <span class="text-danger">{{ModelMessage}}</span>
            </form>

            <br />

        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    //import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'accounts',

        data() {
            return {
                ManagerMessage: "",
                newManagerEmail: "",
                newManagerfirstName: "",
                newManagerlastName: "",
                newManagerPassword: "",
                loggedIn: localStorage.getItem("token"),
                isManager: localStorage.getItem("isManager"),


                newModelEmail: "",
                newModelFirstName: "",
                newModelLastName: "",
                newModelPhoneNo: "",
                newModelAddrLineOne: "",
                newModelAddrLineTwo: "",
                newModelZip: "",
                newModelCity: "",
                newModelCountry: "",
                newModelBirthdate: "",
                newModelNationality: "",
                newModelHeight: 0,
                newModelShoeSize: 0,
                newModelHairColor: "",
                newModelEyeColor: "",
                newModelComments: "",
                newModelPassword: "",

            }
        },

        mounted() {
            this.$root.$on('loggedInSuccessfully', () => {
                this.loggedIn = true;
                this.isManager = (localStorage.getItem("isManager") === 'true');
            });
        },

        methods: {
            onLogoutPressed: function () {
                this.loggedIn = false;
                this.isManager = false;
            },

            onSubmitNewManagerPressed: async function () {
                if (this.newManagerEmail === "") {
                    this.ManagerMessage = "You have to fill in an email!";
                    return;
                }

                if (this.newManagerfirstName === "") {
                    this.ManagerMessage = "You have to fill in a first name!";
                    return;
                }

                if (this.newManagerlastName === "") {
                    this.ManagerMessage = "You have to fill in a last name!";
                    return;
                }

                if (this.newManagerPassword === "") {
                    this.ManagerMessage = "You have to fill in a password!";
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
                        this.newManagerEmail = "";
                        this.newManagerfirstName = "";
                        this.newManagerlastName = "";
                        this.newManagerPassword = "";
                        this.ManagerMessage = "Manager created";
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

            onSubmitNewModelPressed: async function () {
                if (this.newModelEmail === "") {
                    this.ModelMessage = "You have to fill in an email!";
                    return;
                }

                if (this.newModelfirstName === "") {
                    this.ModelMessage = "You have to fill in a first name!";
                    return;
                }

                if (this.newModellastName === "") {
                    this.ModelMessage = "You have to fill in a last name!";
                    return;
                }

                if (this.newModelPassword === "") {
                    this.ModelMessage = "You have to fill in a password!";
                    return;
                }

                let url = "https://localhost:44368/api/Models";
                let objectToSend = { firstName: this.newModelFirstName, lastName: this.newModelLastName, email: this.newModelEmail, password: this.newModelPassword, phoneNo: this.newModelPhoneNo, addresLine1: this.newModelAddrLineOne, addresLine2: this.newModelAddrLineTwo, zip: this.newModelZip, city: this.newModelCity, country: this.newModelCountry, birthDate: this.newModelBirthdate, nationality: this.newModelNationality, height: parseFloat(this.newModelHeight), shoeSize: parseFloat(this.newModelShoeSize), hairColor: this.newModelHairColor, eyeColor: this.newModelEyeColor, comments: this.newModelComments };

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
                        this.newModelEmail = "";
                        this.newModelFirstName = "";
                        this.newModelLastName = "";
                        this.newModelPhoneNo = "";
                        this.newModelAddrLineOne = "";
                        this.newModelAddrLineTwo = "";
                        this.newModelZip = "";
                        this.newModelCity = "";
                        this.newModelCountry = "";
                        this.newModelBirthdate = "";
                        this.newModelNationality = "";
                        this.newModelHeight = 0;
                        this.newModelShoeSize = 0;
                        this.newModelHairColor = "";
                        this.newModelEyeColor = "";
                        this.newModelComments = "";
                        this.newModelPassword = "";
                        this.ModelMessage = "Model created";
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
    }</script>

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