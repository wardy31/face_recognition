<template>
    <v-app>
        <v-main class="bg">
           <v-container class="ml-10">

            <div class="mt-12">
                <div class="py-1 mb-5">
                    <v-btn color="primary" rounded text to="/admin/trace"><v-icon left>arrow_back_ios</v-icon><h4>Return</h4></v-btn>
                </div>
                <h2 class="font-weight-bold">View <b class="primary--text">Eduardo's </b> Profile</h2>
            </div>
            <div class="mb-8 mt-6">
                <v-avatar color="primary" size="90" class="white--text" tile><h3>A</h3></v-avatar>
            </div>
            
            <v-divider></v-divider>
            <div class="d-flex mb-4 mt-4">
                <h4>Name:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Eduardo Talon MAcabacyao Jr</h4>
            </div>

            <div class="d-flex mb-4">
                <h4>Age:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">21</h4>
            </div>

            <div class="d-flex mb-4">
                <h4>Gender:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Male</h4>
            </div>

            <div class="d-flex mb-4">
                <h4>Address:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Brgy. 71 Naga-Naga Tacloban City</h4>
            </div>
            
            <div class="d-flex mb-4">
                <h4>Contact Number:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">09270334321</h4>
            </div>

            <div class="d-flex mb-4">
                <h4>Email:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">warded858@gmail.com</h4>
            </div>

            <div class="d-flex mb-4">
                <h4>Role:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Student</h4>
            </div>
            <div class="d-flex mb-4">
                <h4>Vaccination Status:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Fully Vaccinated</h4>
            </div>
           </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.bg{
  background-color: #f8f0f0;
}
.adj{
  width: 280px;
}
</style>