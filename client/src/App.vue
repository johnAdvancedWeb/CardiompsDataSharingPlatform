<template>
  <div>
    <div>
      <Navbar :user="user" @signOut="signOut"/>
      <router-view @add-post="addPost" @delete-post="deletePost" :user="user" :posts="posts"/>
    </div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import { ref } from "vue";
import { firebaseAuthentication, firebaseFireStore, timestamp } from "@/firebase/database";
import { useRouter } from "vue-router";
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar},
  
    setup() {
      const posts = ref([
        {
          slug: "cardiomyopathy-hcm",
          title: "What are the symptoms of HCM?",
          description: "Common symptoms of HCM",
          content: `Shortness of breath, Chest pain, Palpitations, Light headedness and fainting.
             You may find that you never have any serious problems related to your condition, and with treatment, your symptoms should be controlled.
             However some people may find that their symptoms worsen or become harder to control in later life.

             The area of heart muscle that is affected by HCM and the amount of stiffening that occurs will determine how the symptoms affect you.`,
          tags: ["hcm", "hcm symptoms"],
        },
      ]);

    const user = ref(null);
    const errorSignOut = ref(null);
    const router = useRouter();

    firebaseAuthentication.onAuthStateChanged( (currentUser) => {
      if(currentUser) {
        user.value = currentUser;

        firebaseFireStore
            .collection("users")
            .doc(user.value.uid)
            .collection("posts")
            .onSnapshot((snapShot) => {
              const snapData = [];
              snapShot.forEach((doc) => {
                snapData.push({
                  slug: doc.data().slug,
                  title: doc.data().title,
                  description: doc.data().description,
                  content: doc.data().content,
                  tags: doc.data().tags.split(","),
                });
              });
              posts.value = snapData;
            });

            // if all details aren't yet stored on profile, force a fresh sign-in
            if(user.value.displayName === null) {
              signOut();
            }
      }
      else {
        user.value = null;
      }
    });

    /* get gene mutation collection */

      /* ends here */

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

    return { user, signOut, posts };
  },

  methods: {

    addPost(slug, title, description, content, tags) {
      const post = {
        slug: slug,
        title: title,
        description: description,
        content: content,
        tags: tags,
        createdAt: timestamp()
      };
      firebaseFireStore
          .collection("users")
          .doc(this.user.uid)
          .collection("posts")
          .add(post);
    },

    deletePost(slug) {
      firebaseFireStore
          .collection("users")
          .doc(this.user.uid)
          .collection("posts")
          .where("slug", "==", slug)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
            });
          });
    }
  }
}
</script>

<style>
</style>