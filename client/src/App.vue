<template>
  <div>
    <Navbar v-bind:user="user" @signOut="signOut"/>
    <router-view @add-post="addPost" :user="user" @signOut="signOut"/>
  </div>


<script>
import { ref } from "vue";
import { firebaseAuthentication } from "@/firebase/database";
import { useRouter } from "vue-router";
import Navbar from "@/components/Navbar";
import { firebaseFireStore } from "@/firebase/database";

export default {
  components: {Navbar},
  
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

  data() {
    return {
      posts: [
        {
          slug: "cardiomyopathyhcm",
          title: "What are the symptoms of HCM?",
          description: "Common symptoms of HCM",
          content: `Shortness of breath, Chest pain, Palpitations, Light headedness and fainting.
             You may find that you never have any serious problems related to your condition, and with treatment, your symptoms should be controlled.
             However some people may find that their symptoms worsen or become harder to control in later life.

             The area of heart muscle that is affected by HCM and the amount of stiffening that occurs will determine how the symptoms affect you.`,
          tags: ["hcm", "hcm symptoms"],
        },
        {
          slug: "cardiomyopathydcm",
          title: "What are the symptoms of DCM?",
          description: "Common symptoms of DCM",
          content: `In most cases, DCM develops slowly, so some people can have quite severe symptoms before they are diagnosed. The most common symptoms are:
            shortness of breath, swelling of the ankles and abdomen, excessive tiredness and palpitations.`,
          tags: ["dcm", "dcm symptoms"],
        },
      ]
    }
  },

  methods: {
    addPost(slug, title, description, content, tags) {
      const post = {
        slug: slug,
        title: title,
        description: description,
        content: content,
        tags: tags
      };

      // const post = {
      //   slug: "slug",
      //   title: "title",
      //   description: "description",
      //   content: "content",
      //   tags: "tags"
      // };

      firebaseFireStore
          .collection("users")
          .doc("dnlsk9Mskeg8DO1L1OQcHq3hnF92")
          .collection("posts")
          .add(post);
    }
  }
}
</script>

<style>
</style>