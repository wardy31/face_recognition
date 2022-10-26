<template>
    <div class="mt-14">
        <div class="d-flex align-center">
                <v-btn color="primary" @click="changeBtn()" rounded small><v-icon left>arrow_back</v-icon><h4>return</h4></v-btn>
                <h2 class="ml-4">Eduardo Macabacyao Jr.</h2>
        </div>

        <div class="d-flex align-stretch mt-10">
            <v-select label="Time Frame" outlined  filled dense></v-select>
            <v-select label="Location" outlined  filled dense class="ml-2"></v-select>
            <v-btn color="primary" class="ml-2 py-5" medium text><v-icon left>filter_list</v-icon> <h4>Filter</h4></v-btn>
        </div>

        <v-simple-table class="rounded-lg elevation-6 mt-n3">
          <thead>
            <tr class="text-center">
              <th class="text-left black--text text-center">
               <h3>Name</h3>
              </th>

              <th class="text-left black--text text-center">
                <h3>Role</h3>
              </th>


              <th class="text-left black--text text-center">
                <h3>Location</h3>
              </th>

              <th class="text-left black--text text-center">
                <h3>Login Time</h3>
              </th>

              <th class="text-left black--text text-center">
                <h3>Logout Time</h3>
              </th>

              <th class="text-left black--text text-center">
                <h3>Status</h3>
              </th>

              <th class="text-left black--text text-center">
                <h3>Action</h3>
              </th>             
            </tr>
          </thead>

          <tbody>
            <tr class="text-center">
              <td>Eduardo Macabacyao</td>
              <td>Student</td>
              <td>MIS</td>
              <td>2:00 pm</td>
              <td>4:00 pm</td>
              <td><v-chip color="primary"><v-icon left>hdr_weak</v-icon> Good</v-chip></td>
              <td>
                <v-menu offset-y bottom transition="slide-y-transition" rounded="lg">
                 <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on" icon large>
                    <v-icon>menu_open</v-icon>
                </v-btn>
                </template>
                <v-list>
                    <v-list-item to="/admin/checkprofile">
                        <v-list-item-icon class="mr-4"><v-icon  color="primary">account_circle</v-icon></v-list-item-icon>
                        <v-list-item-title class="font-weight-bold"><h5>Check Profile</h5></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item @click="ward()">
                        <v-list-item-icon class="mr-4"><v-icon  color="primary">reduce_capacity</v-icon></v-list-item-icon>
                        <v-list-item-title class="font-weight-bold"><h5>View Contacts</h5></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-icon class="mr-4"><v-icon  color="primary">connect_without_contact</v-icon></v-list-item-icon>
                        <v-list-item-title class="font-weight-bold"><h5>Mark as close contact</h5></v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-pagination v-model="page" :length="4" class="float-right mt-4" @input="pageSwitch"></v-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return{
            page:1
        }
    },
    methods:{
        changeBtn(){
            this.$emit('switchs')
          }  
    }
}
</script>