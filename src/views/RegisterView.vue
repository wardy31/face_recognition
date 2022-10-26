<template>
    <v-app>
        <v-card class="ma-auto rounded-lg elevation-6">
            <v-card-title class="primary--text"><h4>Create Account</h4></v-card-title>
            <h5 class="mx-4">* create an account as authorize personnel.</h5>

            <v-form class=" mx-8 my-8">
                <h5 class="mb-1">First Name</h5>
                <v-text-field outlined dense></v-text-field>

                <h5 class="mb-1 mt-n2">Middle Name</h5>
                <v-text-field outlined dense></v-text-field>

                <h5 class="mb-1 mt-n2">Last Name</h5>
                <v-text-field outlined dense></v-text-field>

                <h5 class="mb-1 mt-n2">Gender</h5>
                <v-select outlined dense :items="gender" item-value="value" item-text="label"></v-select>

                <h5 class="mb-1 mt-n2">Address</h5>
                <v-text-field outlined dense></v-text-field>

                <h5 class="mb-1 mt-n2">Contact Number</h5>
                <v-text-field type="number" outlined dense></v-text-field>

                <h5 class="mb-1 mt-n2">Email</h5>
                <v-text-field outlined dense></v-text-field>

                <h5 class="mb-1 mt-n2">Password</h5>
                <v-text-field :type="show1 ? 'text' : 'password' " outlined dense :append-icon="show1 ? 'visibility' : 'visibility_off'"  @click:append="show1 = !show1"></v-text-field>

                <h5 class="mb-1 mt-n2">Confirm Password</h5>
                <v-text-field :type="show2 ? 'text' : 'password' " outlined dense :append-icon="show2 ? 'visibility' : 'visibility_off'"  @click:append="show2 = !show2"></v-text-field>

                <v-btn color="primary" block><h4>Register</h4></v-btn>
                <v-btn text block class="mt-2" to="/"><h4>Back</h4></v-btn>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            show1:false,
            show2:false,
            gender:[{value:'male',label:'Male'},{value:'female',label:'Female'}]
        }
    }
}
</script>