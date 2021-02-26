<template>
  <div>
    <Navbar :user="user" @signOut="signOut"/>
    <router-view @add-experimental-data="addExperimentalData" @delete-experimental-data="deleteExperimentalData" :user="user" @signOut="signOut" :experimental-data="experimentalData"/>
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
      const experimentalData = ref([{
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
                  createdAt: doc.data().createdAt,
                  xAxis: doc.data().xAxis,
                  yColumns: doc.data().yColumns,
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
    addExperimentalData(title, description, xAxis, yColumns, y1Axis, y2Axis, y3Axis) {
      const experimentalData = {
        title: title,
        description: description,
        xAxis: xAxis,
        yColumns: yColumns,
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

    deleteExperimentalData(owner) {
      firebaseFireStore
          .collection("experimental-data")
          .where("postedBy", "==", owner)
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
