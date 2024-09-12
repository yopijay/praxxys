<template>
    <div class="profile-container">
        <div class="points-container">
            <ion-img :src="ProfilePic" alt="profile-pic" id="profile-pic"></ion-img>
            <div class="points">
                <img :src="CrownIcon" alt="icon" id="crown" />
                <p>0 Points</p>
                <img :src="NextIcon" alt="icon" id="next" />
            </div>
        </div>
        <div class="info-container">
            <p>Paul John Judan</p>
            <p>+63 050 209 9508</p>
        </div>
    </div>
</template>

<script setup>
    // Libraries
    import { IonImg } from "@ionic/vue";
    
    // Assets
    import ProfilePic from "../../../../assets/images/profile.jpg";
    import CrownIcon from "../../../../assets/images/icons/crown.png";
    import NextIcon from "../../../../assets/images/icons/next.png";
</script>

<style scoped>
    .profile-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;

        .points-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            ion-img {
                width: 70px;
                height: 70px;
                border-radius: 200px;
                overflow: hidden;
            }

            .points {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;

                #crown {
                    width: 30px;
                    height: 30px;
                }

                p {
                    font-family: 'Montserrat SemiBold';
                    font-size: 90%;
                    padding: 0 12px;
                }

                #next {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .info-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;

            p {
                &:first-child {
                    font-family: 'Montserrat SemiBold';
                    font-size: 120%;
                }

                &:last-child {
                    font-family: 'Montserrat Light';
                    font-size: 80%;
                    margin-top: -16px;
                }
            }
        }
    }
</style>