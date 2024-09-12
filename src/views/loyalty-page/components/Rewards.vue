<template>
    <div class="sub-title-container">
        <div class="sub-title">
            <p>Rewards</p>
        </div>
        <div class="links-container">
            <p>How it works</p>
            <ion-img :src="NextIcon" alt="icon" id="next"></ion-img>
        </div>
    </div>
    <div class="tabs-container">
        <p class="active">All</p>
        <p>Beginner</p>
        <p>Intermediate</p>
        <p>Loyal</p>
    </div>
    <div class= "purchased-container">
        <div class="purchased-item" v-for="(item, index) in purchased" :key="index">
            <ion-img :src="item.image" alt="food" id="foodimg"></ion-img>
            <div class="purchased-item-desc">
                <p id="food">{{ item.name }}</p>
                <p id="category">{{ item.category }}</p>
                <p id="points">
                    <ion-img :src="CrownIcon" alt="icon"></ion-img>
                    {{ item.points }} points
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    // Libraries
    import { IonImg } from "@ionic/vue";

    // Assets
    import Food1 from "../../../assets/images/food1.png";
    import CrownIcon from "../../../assets/images/icons/crown.png";
    import NextIcon from "../../../assets/images/icons/next.png";

    const purchased = [
        { 
            image: Food1,
            name: 'Food 1',
            category: 'Category1',
            points: 20
        }
    ]
</script>

<style scoped>
    .tabs-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0 20px;
        
        p {
            flex-grow: 1;
            font-family: 'Montserrat SemiBold';
            font-size: 80%;
            text-align: center;
            background-color: #dee2e6;
            color: #7a828a;
            margin: 0 4px;
            padding: 12px 0;
            border-radius: 20px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            
            &:hover {
                background-color: #d71921;
                color: #ffffff;
            }

            &.active {
                background-color: #d71921;
                color: #ffffff;
            }
        }
    }

    .purchased-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding: 20px;

        .purchased-item {
            background-color: #e9ecef;
            padding: 16px;      
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            #foodimg {
                width: 120px;
                height: 120px;
            }

            .purchased-item-desc {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: stretch;
                padding: 0 20px;

                #food {
                    font-family: 'Montserrat SemiBold';
                    font-size: 105%;
                }

                #category {
                    font-family: 'Montserrat Thin';
                    font-size: 90%;
                    margin-top: -12px;
                }

                #points {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin-top: 0;
                    font-family: 'Montserrat SemiBold';
                    color: #d71921;

                    ion-img {
                        width: 30px;
                        height: 30px;
                        margin-right: 12px;
                    }
                }
            }
        }
    }
</style>