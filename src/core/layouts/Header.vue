<template>
    <div id="custom-header">
        <ion-buttons>
            <ion-menu-button auto-hide="false">
                <div id="burger-btn">
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </ion-menu-button>
        </ion-buttons>
        <h5>Loyalty Points</h5>
    </div>
</template>

<script setup>
    import { IonButtons, IonMenuButton } from "@ionic/vue";
</script>

<style scoped>
    #custom-header {
            display:  flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100vw;
            align-items: center;
            padding: 16px 8px;
            position: fixed;
            background-color: #ffffff;

            .line {
                background-color: #cb2d2c;
                width: 28px;
                margin: 6px 0;
                height: 6px;
                border-radius: 8px;
            }
        }

        h5 {
            font-size: 170%;
            font-weight: bold;
            padding-left: 20px;
        }
</style>