<template>
  <div>
    <Navbar v-bind:user="user" @signOut="signOut"/>
    <router-view :user="user" @signOut="signOut"/>
  </div>
</template>

<script>
import { ref } from "vue";
import { firebaseAuthentication } from "@/firebase/database";
import { useRouter } from "vue-router";
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar },
  
  setup() {
    const user = ref(null);
    const errorSignOut = ref(null);
    const router = useRouter();

    firebaseAuthentication.onAuthStateChanged( (currentUser) => {
      if(currentUser) {
        user.value = currentUser;
      }
      else {
        user.value == null;
      }
    });

    function signOut() {
      firebaseAuthentication.signOut().then(
        () => {
          user.value = null;
          router.push("sign-in");
        },
        (error) => {
          errorSignOut.value = error.message;
        }
      );
    }

    return { user, signOut };
  },
};
</script>

<style>
</style>