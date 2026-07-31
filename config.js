/* ============================================================
   FIREBASE SYNC CONFIG — The Weekly Board

   This file holds your real Firebase project credentials and your
   household's private sync ID. It's loaded by index.html via:
     <script src="config.js"></script>

   Keeping it separate means every time you get an updated index.html
   from Claude, you just overwrite that one file — config.js stays put
   with your real values already in place.

   SETUP (one-time):
   1. Go to https://console.firebase.google.com -> "Add project" (free, no card needed).
   2. In the project: Build > Realtime Database > Create Database > start in TEST MODE.
   3. Project settings (gear icon, top left) > General tab > "Your apps" > click the
      </> (web) icon > register an app (nickname doesn't matter, skip hosting).
   4. It will show you a firebaseConfig object — copy it and paste it in below,
      replacing the placeholder object.
   5. Change HOUSEHOLD_ID below to any private string only the two of you know.
      Test-mode rules are open to anyone with your database URL, so this string
      is what keeps your data separate from a random stranger poking the same URL.
   6. IMPORTANT: test-mode rules auto-expire after 30 days. Before that, go to
      Realtime Database > Rules and set:
        { "rules": { ".read": true, ".write": true } }
      (fine for a private two-person tool — don't share the config publicly).

   Until you fill in real values below, the app runs fine using localStorage
   only (no cross-device sync).

   ⚠️ This repo should be PRIVATE on GitHub. HOUSEHOLD_ID below is effectively
   a shared secret gating who can read/write your grocery checklist.
   ============================================================ */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCsadWL7Hk4TfEWRm5D1rcVT0yL_90ZwXM",

  authDomain: "family-weekly-meal-plan.firebaseapp.com",

  databaseURL: "https://family-weekly-meal-plan-default-rtdb.firebaseio.com",

  projectId: "family-weekly-meal-plan",

  storageBucket: "family-weekly-meal-plan.firebasestorage.app",

  messagingSenderId: "416643598511",

  appId: "1:416643598511:web:7016bcf32215d35312ac5a",

  measurementId: "G-SETRSWBVW8"

};

const HOUSEHOLD_ID = "123";
