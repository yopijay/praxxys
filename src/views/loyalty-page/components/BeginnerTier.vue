<template>
    <div class="sub-title-container">
        <div class="sub-title">
            <ion-img :src="CrownIcon" alt="icon" id= "icon"></ion-img>
            <p>Beginner Tier</p>
        </div>
        <div class="links-container">
            <p>View All</p>
            <ion-img :src="NextIcon" alt="icon" id="next"></ion-img>
        </div>
    </div>
    <p id= "desc">Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
    <div class="points-container">
        <p>0 / 160</p>
    </div>
</template>

<script setup>
    // Libraries
    import { IonImg } from "@ionic/vue";
    
    // Assets
    import CrownIcon from "../../../assets/images/icons/crown.png";
    import NextIcon from "../../../assets/images/icons/next.png";
</script>

<style scoped>
    #desc {
        font-family: 'Montserrat Light';
        font-size: 90%;
        color: #899197;
        padding: 0 20px;
    }

    .points-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        p {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 180px;
            height: 180px;
            border-radius: 200px;
            border: solid 20px #f7d1d3;
            font-family: 'Montserrat SemiBold';
            font-size: 150%;
        }
    }
</style>