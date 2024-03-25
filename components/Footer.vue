<template>
    <div id="footer-container">
            <footer>
                <h5 class="display-3  regular">Copyright © 2025 АКТИВ ЕООД</h5>
                <div class="footer-content">
                    <p class="display-3 ">
                        Всички права запазени
                    </p>
                    <div class="small-separator-f mobile-hidden"></div>
                    <div class="footer-content2">
                        <p class="display-3 align-right-mobile">
                            Условия за ползване
                        </p>
                        <div class="small-separator-f"></div>
                        <p class="display-3 ">
                            Политика за поверителност
                        </p>
                    </div>
                </div>
            </footer>
    </div>
</template>

<style scoped>

#footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: 1px solid var(--neutral-300);
    padding: 24px 0;
}

footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    width: 100%;
    max-width: var(--max-width-medium);
    color: var(--neutral-500);
}

.small-separator-f{
    width: 1px;
    background-color: var(--neutral-400);
}

.footer-content{
    display: flex;
    gap: 4px;
}

.footer-content2{
    display: flex;
    gap: 4px;
}

@media screen and (max-width: 768px){
    .container{
        border-top: none;
        padding: 0;
    }

    footer{
        flex-direction: column;
        gap: 32px;
        justify-items: center;
        align-items: center;
    }

    .footer-content{
        flex-direction: column;
        gap: 0;
        width: 100%;
        align-items: center;
    }

    .footer-content2{
        width: 100%;
        justify-content: center;
    }
}

</style>