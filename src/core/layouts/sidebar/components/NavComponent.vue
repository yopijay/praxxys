<template>
    <div class="nav-container">
        <div class="navs">
            <p v-for="(nav, index) of mainnav" :key="index">
                <span>
                    <ion-icon :name="nav.icon" size="large" aria-hidden="true"></ion-icon>
                    {{ nav.label }}
                </span>
                <ion-badge v-if="nav.badge !== undefined">{{ nav.badge }}</ion-badge>
            </p>
        </div>
        <div id="divider" />
        <div class="navs">
            <p v-for="(sub, index) of subnav" :key="index">
                <span>
                    <ion-icon :name="sub.icon" size="large" aria-hidden="true"></ion-icon>
                    {{ sub.label }}
                </span>
                <ion-badge v-if="sub.badge !== undefined">{{ sub.badge }}</ion-badge>
            </p>
        </div>
    </div>
</template>

<script setup>
    import { IonIcon, IonBadge } from "@ionic/vue";

    const mainnav = [
        { icon: 'logo-icon', label: 'Home', isActive: true },
        { icon: 'grid', label: 'Order Now!' },
        { icon: 'notifications', label: 'Notifications', badge: 4 },
        { icon: 'storefront', label: 'Store Locator' },
        { icon: 'help-cricle', label: `FAQ's` },
    ];

    const subnav = [
        { icon: 'receipt', label: 'My Orders', badge: 2 },
        { icon: 'person', label: 'My Account' },
        { icon: 'bookmark', label: 'My Favorites' },
        { icon: 'analytics', label: 'Order Tracker' },
        { icon: 'refresh', label: 'Order History' },
    ];
</script>

<style scoped>
    .nav-container {
        flex-grow: 1;
        padding: 20px 0;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;

        &::-webkit-scrollbar {
            display: none;
        }

        .navs {
            flex-grow: 1;

            p {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                span {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    font-family: 'Gilroy Light';
                    font-size: 95%;
                    font-weight: bold;
                }

                ion-badge {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    border-radius: 100px;
                    background-color: #edbe4c;
                    color: #ffffff;
                    width: 24px;
                    height: 24px;
                }
            }
        }

        #divider {
            width: 100%;
            height: 1px;
            background-color: #e6e9ec;
            margin: 28px 0;
        }
    }
</style>