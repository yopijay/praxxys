<template>
    <ion-menu content-id="main-content">
        <ion-content class="ion-padding">This is the menu content.</ion-content>
    </ion-menu>
    <ion-page id="main-content">
        <ion-grid :fixed="true">
            <ion-row>
                <ion-col size="2">
                    <ion-buttons>
                        <ion-menu-button auto-hide="false">
                            <div id="burger-btn">
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </ion-menu-button>
                    </ion-buttons>
                </ion-col>
                <ion-col size="10">
                    <h5>Loyalty Points</h5>
                </ion-col>
            </ion-row>
            <ion-row class="ion-padding">
                testing
            </ion-row>
        </ion-grid>
    </ion-page>
</template>

<script setup>
    import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButtons, IonMenuButton } from '@ionic/vue';
</script>

<style scoped>
    ion-buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .line {
        background-color: #d71921;
        width: 28px;
        margin: 6px 0;
        height: 6px;
        border-radius: 8px;
    }

    h5 {
        font-size: 170%;
        font-weight: bold;
        padding-left: 20px;
    }
</style>