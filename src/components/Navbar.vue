<template>
    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
            <img class="logo" src="@/assets/logo.png" width="30px" alt="logo">
            <span>Template</span>
            <span class="font-weight-light"> Fullstack App</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <router-link v-for="navItem in navBarItems" :to="navItem.path" v-bind:key='navItem.index' 
        class="navItem" @click.native="changeUnderlining(navItem.index)" 
        v-bind:class="{ selected: navItem.index == currentMenuOnDisplay }">
            {{ navItem.title }}
        </router-link>
    </v-app-bar>
</template>

<script>
import store from '@/store'

    export default {
        name: 'Navbar',
        data() {
            return {
                navBarItems: [],
                currentMenuOnDisplay: 1,
                userNavBar: [
                    {
                        title: 'Home',
                        path: '/',
                        index: 1
                    },
                    {
                        title: 'Logout',
                        path: '/logout',
                        index: 3
                    }
                ],
                visitorNavBar: [
                    {
                        title: 'Home',
                        path: '/',
                        index: 1
                    },
                    {
                        title: 'Login',
                        path: '/login',
                        index: 2
                    }
                ]
            }
        },
        created() {
            this.updateNavBarItems()
        },
        methods: {
            changeUnderlining(newIndex) {
                this.currentMenuOnDisplay = newIndex
            },
            updateNavBarItems() {
                if(store.getters.isLoggedIn) {
                    this.navBarItems = this.userNavBar
                }
                else {
                    this.navBarItems = this.visitorNavBar
                }
            }
        },
        watch: {
            // Change navbar items if user is authenticated
            '$store.getters.isLoggedIn': function() {
                this.updateNavBarItems()
            }
        }
    }
</script>

<style scoped>

    .logo {
        margin: 0 10px 0 0;
    }
    .navItem {
        margin-right: 25px;
        text-decoration: none;
        color: black;
    }
    .selected {
        color: grey;
    }

</style>