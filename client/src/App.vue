<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
//import { ref } from "vue";
//import { firebaseAuthentication } from "@/firebase/database";
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar },
  
  /*setup() {
    const user = ref(null);

    firebaseAuthentication.onAuthStateChanged( (currentUser) => {
      if(currentUser) {
        user.value = currentUser.email;
      }
      else {
        user.value == null;
      }
    });

    return { user };
  }*/
};
</script>

<style>
</style>