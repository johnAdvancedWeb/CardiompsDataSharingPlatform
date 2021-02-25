<template>
  <div>
    <Navbar :user="user" @signOut="signOut"/>
    <router-view @add-experimental-data="addExperimentalData" @delete-post="deletePost" :user="user" @signOut="signOut" :experimental-data="experimentalData"/>
<!--    <button @click="addCsvData">Test button for inserting data</button>-->
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
      const experimentalData = ref([
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
            .collection("experimental-data")
            .onSnapshot((snapShot) => {
              const snapData = [];
              snapShot.forEach((doc) => {
                snapData.push({
                  title: doc.data().title,
                  description: doc.data().description,
                  postedBy: doc.data().postedBy,
                  xAxis: doc.data().xAxis,
                  y1Axis: doc.data().y1Axis,
                  y2Axis: doc.data().y2Axis,
                  y3Axis: doc.data().y3Axis,
                });
              });
              experimentalData.value = snapData;
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

    return { user, signOut, experimentalData };
  },

  methods: {
    addExperimentalData(title, description, xAxis, y1Axis, y2Axis, y3Axis) {
      const experimentalData = {
        title: title,
        description: description,
        xAxis: xAxis,
        y1Axis: y1Axis,
        y2Axis: y2Axis,
        y3Axis: y3Axis,
        createdAt: timestamp(),
        postedBy: this.user.email
      };
      firebaseFireStore
          .collection("experimental-data")
          .add(experimentalData);
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
    },

    addCsvData() {
      firebaseFireStore.collection("groups").doc("MYBPC3velocityCalcium").set({
        title: "Sarcomere Length vs Time",
        description: "None defined",
        xAxis: "0.1, 0.2, 0.3, 0.4, 0.5, 0.6",
        yAxis: "0, 7.8565, 2.9038, 1.3811, 0.7305, 0.1927, 0",
        yAxis2: "0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0",
      })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
    }
  }
}
</script>

<style>
</style>
