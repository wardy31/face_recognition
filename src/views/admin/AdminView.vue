<template>
    <v-app>
        <app-bar/>
        <router-view/>
        <side-bar/>
    </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import SideBar from '@/components/SideBar.vue'
export default {
    components:{AppBar,SideBar}
}
</script>