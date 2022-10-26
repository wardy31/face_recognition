<template>
<v-navigation-drawer app width="240" color="primary" flat dark>

       <div class="text-left mb-10 mt-4 d-flex align-center">
          <v-avatar size="70" class="elevation-8 ml-4 "><img src="../assets/unitracelogo.png" alt="" srcset=""></v-avatar>
          <h2 class="ml-3 white--text">Unitrace</h2>
       </div>
      <v-list
        dense
        nav
      >
        <v-list-item-group mandatory color="warning">
            <v-list-item to="/admin/dashboard" class="py-1">
                <v-list-item-icon>
                    <v-icon>dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-item to="/admin/trace" class="py-1"> 
              <v-list-item-icon><v-icon>account_tree</v-icon></v-list-item-icon>
              <v-list-item-title>Manage Contacts</v-list-item-title>
            </v-list-item>
            
            <v-list-group :value="false" no-action color="warning" class="py-1">
              <template v-slot:activator>
                <v-list-item-icon><v-icon>history_edu</v-icon></v-list-item-icon>
                <v-list-item-title>Records</v-list-item-title>
              </template>

              <v-list-item to="/admin/logrecords" class="py-1">
                <v-list-item-title>Log Records</v-list-item-title>
              </v-list-item>

              <v-list-item to="/admin/declarationform" class="py-1">
                <v-list-item-title>Health Declaration <br> Records</v-list-item-title>
              </v-list-item>
            </v-list-group>
            
            <v-list-item to="/admin/personnels" class="py-1"> 
              <v-list-item-icon><v-icon>badge</v-icon></v-list-item-icon>
              <v-list-item-title>Authorized Personnels</v-list-item-title>
            </v-list-item>
        
            <v-list-item to="/admin/reportgeneration">
                <v-list-item-icon>
                    <v-icon>file_copy</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Generate Reports</v-list-item-title>
            </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    name:'SideBar',
    data(){
      return{
        model: 1
      }
    }
}
</script>