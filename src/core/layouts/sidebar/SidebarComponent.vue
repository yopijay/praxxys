<template>
    <ion-menu content-id="main-content">
        <div class="sidebar-container ion-padding">
            <Profile />
            <Navs />
            <p id="logout-btn">Logout</p>
        </div>
    </ion-menu>
</template>

<script setup>
    import { IonMenu } from "@ionic/vue";

    // Components
    import Profile from "./components/ProfileComponent.vue";
    import Navs from "./components/NavComponent.vue";
</script>

<style>
    .sidebar-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        width: 100%;
        height: 100%;

        #logout-btn {
            text-align: center;
            font-family: 'Montserrat SemiBold';
            background-color: #d71921;
            color: #ffffff;
            padding: 12px 0;
            border-radius: 12px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
                background-color: #b8161e;
            }
        }
    }
</style>