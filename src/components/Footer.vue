<template>
    <v-footer
    height="auto"
    color="primary lighten-1"
  >

  <v-row justify="center" align="center">
    <v-col cols="12" xs="6" sm="4" md="3" lg="3">
      &copy;{{ new Date().getFullYear() }} — <strong>This is the footer</strong>
    </v-col>
  </v-row>
  
  </v-footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>