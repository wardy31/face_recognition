<template>
    <v-app-bar app color="transparent" flat dark>
        <v-app-bar-nav-icon color="primary"></v-app-bar-nav-icon>
        
        <v-spacer></v-spacer>
        <h5 class="black--text mr-4">Welcome, Admin</h5>
        <v-menu offset-y bottom transition="slide-y-transition" rounded="lg">
                 <template v-slot:activator="{ on, attrs }">
                <v-avatar color="primary" v-bind="attrs" v-on="on" size="40">A</v-avatar>
                </template>
                <v-list>
                    <v-list-item to="/admin/editprofile">
                        <v-list-item-icon class="mr-4"><v-icon  color="primary">account_circle</v-icon></v-list-item-icon>
                        <v-list-item-title class="font-weight-bold"><h5>Edit Profile</h5></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item to="/">
                        <v-list-item-icon class="mr-4"><v-icon  color="primary">logout</v-icon></v-list-item-icon>
                        <v-list-item-title class="font-weight-bold"><h5>Logout</h5></v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
    </v-app-bar>
</template>