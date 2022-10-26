<template>
  <v-app>
    <v-main class="bg">
      <div class="ma-16">
        <h2 class="primary--text font-weight-bold mt-12 mb-12">Dashboard</h2>

        <v-container>
          <v-row justify="start">
            <v-col cols="6">
              <v-card class="rounded-lg">
                <v-card-title class="font-weight-bold">Covid Information</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col>
                      <div class="d-flex">
                          <h3 class="error--text mr-4 ">0</h3>
                          <h3>Confirmed Cases</h3>
                      </div> 
                    </v-col>
                  </v-row>                  
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
            
            <h4 class="mt-12 mb-4">Pending Authorize Personnel Approvals</h4>

             <v-simple-table class="rounded-lg elevation-6">
          <thead>
            <tr class="text-center">
              <th class="text-left black--text text-center">
                Name
              </th>

              <th class="text-left black--text text-center">
                Approval Status
              </th>

              <th class="text-left black--text text-center">
                Actions
              </th>       
            </tr>
          </thead>

          <tbody>
            <tr class="text-center">
              <td>Eduardo Macabacyao</td>
              <td>Vaccinated</td>
              <td class="d-flex align-center justify-center">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" class="mr-2" dark v-bind="attrs" v-on="on" small ><v-icon left>thumb_up</v-icon> <h4>Approve</h4></v-btn>
                    </template>
                      <span>Approve</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="#D32F2F" dark v-bind="attrs" v-on="on" small><v-icon left>thumb_down</v-icon><h4>Disapprove</h4></v-btn>
                    </template>
                      <span>Disapprove</span>
                  </v-tooltip>
              </td>
            </tr>
          </tbody>
        </v-simple-table>                   
            </v-col>  
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.bg{
  background-color: #f8f0f0;
}
</style>
