<template>
    <div id="footer-container">
            <footer>
                <h3 class="display-3  regular">Copyright © 2003 АКТИВ ЕООД</h3>
                <div class="footer-content">
                    <p class="display-3">
                        Всички права запазени
                    </p>
                    <div class="small-separator-f mobile-hidden"></div>
                    <div class="footer-content2">
                        <a  href="https://www.termsofservicegenerator.net/live.php?token=G7YQ7VXO8pyNpizDBMdTG2AvnycnYvSU" class="display-3 display-2-mobile align- right" target="_blank">
                            Условия за ползване
                        </a>
                        <div class="small-separator-f"></div>
                        <a href="https://www.termsfeed.com/live/d6d1ef3a-6a2d-447c-b22a-c9a3f73d6ef6" class="display-3 display-2-mobile align-left" target="_blank">
                            Поверителност
                        </a>
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
    color: var(--neutral-600);
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
        justify-content: space-between;
    }

    .footer-content2 a{
        display: block;
        width: 50%;
    }
}

</style>