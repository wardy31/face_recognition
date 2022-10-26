<template>
    <v-app>
        <v-main class="bg">
            <v-container class="ml-10">
            <div class="mt-12">
                <h2 class="font-weight-bold">Edit Personal Profile</h2>
            </div>
            <div class="my-8">
                <v-avatar color="primary" size="90" class="white--text" tile><h3>A</h3></v-avatar>
            </div>

            
            <v-divider></v-divider>
            <div class="mb-2 mt-5">
                <h3 class="gray--text mb-2">Personal Information</h3>
                <v-btn color="primary" outlined small class="mb-5"><v-icon left>edit</v-icon> Edit Profile</v-btn>
            </div>

            <div class="d-flex mb-2">
                <h4>Name:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Eduardo Talon MAcabacyao Jr</h4>
            </div>

            <div class="d-flex mb-3">
                <h4>Age:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">21</h4>
            </div>

            <div class="d-flex mb-3">
                <h4>Gender:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Male</h4>
            </div>

            <div class="d-flex mb-3">
                <h4>Address:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Brgy. 71 Naga-Naga Tacloban City</h4>
            </div>
            
            <div class="d-flex mb-3">
                <h4>Contact Number:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">09270334321</h4>
            </div>

            <div class="d-flex mb-3">
                <h4>Email:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">warded858@gmail.com</h4>
            </div>

            <div class="d-flex mb-3">
                <h4>Role:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Student</h4>
            </div>
            <div class="d-flex mb-3">
                <h4>Vaccination Status:</h4>
                <h4 class="ml-2 font-weight-bold primary--text">Fully Vaccinated</h4>
            </div>

            <v-divider class="mt-8"></v-divider>
            <div class="mb-6 mt-6">
                <h3 class="gray--text mb-2">Change Security Password</h3>
            </div>

            <div>
                <v-card color="transparent" flat width="320">
                    <v-text-field outlined label="Current Password" type="password" dense filled></v-text-field>
                    <v-text-field outlined label="New Password" type="password" dense filled class="mt-n3"></v-text-field>
                    <v-text-field outlined label="Confirm New Password" type="password" dense filled class="mt-n3"></v-text-field>
                    
                    <div class="mt-n2 d-flex justify-end">
                        <v-btn class="primary"><h5>Update</h5></v-btn>
                    </div>
                  

                </v-card>
            </div>

            <v-divider class="mt-8"></v-divider>
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