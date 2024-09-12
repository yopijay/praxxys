<template>
    <Sidebar />
    <ion-page id="main-content">
        <Header />
        <ion-content>
            <BeginnerTier />
            <Rewards />
        </ion-content>
    </ion-page>
</template>

<script setup>
    // Libraries
    import { IonPage, IonContent } from '@ionic/vue';

    // Layouts
    import Header from "../../core/layouts/header/HeaderComponent.vue";
    import Sidebar from "../../core/layouts/sidebar/SidebarComponent.vue";

    // Components
    import BeginnerTier from "./components/BeginnerTier.vue";
    import Rewards from "./components/Rewards.vue";
</script>

<style>
    ion-content {
        z-index: -1;

        .sub-title-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;

            &:first-child {
                margin-top: 90px;

                .sub-title p {
                    font-size: 110%;
                }
            }

            .sub-title {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                p {
                    font-size: 150%;
                    font-family: 'Montserrat SemiBold'
                }

                #icon {
                    width: 50px;
                    height: 50px;
                    margin-right: 16px;
                }
            }

            .links-container {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;

                p {
                    font-family: 'Montserrat SemiBold';
                    font-size: 90%;
                    color: #cb2d2c;
                }

                #next {
                    width: 20px;
                    height: 20px;
                    margin-left: 12px;
                }
            }
        }
    }
</style>