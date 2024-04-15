<template>
    <section id="real-estate">
        <h1>Недвижими имоти</h1>
        <p>Тук ще намерите нашите най-нови предложения за недвижими имоти.</p>
        <div id="section-1" class="shadow-02">
            <div class="content">
                <NuxtImg
            height="64px"
            width="64px"
            src="/icons/light/Business.svg"
            class="mobile-hidden"
            alt="icon-buisness"
          />
                <h2>Заглавие</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique, deserunt dignissimos enim dolor autem nostrum et eveniet, vel, inventore pariatur magni. Incidunt sapiente earum ipsum facilis expedita qui temporibus!</p>
            </div>
            <NuxtImg id="section-1-image" src="/photos/medium/photo4.webp" width="55%" height="100%" alt="Real Estate Image" />
        </div>
        <div id="sections-container">
            <div id="section-2">
                <h2>Заглавие</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique, deserunt dignissimos enim dolor autem nostrum et eveniet, vel, inventore pariatur magni. Incidunt sapiente earum ipsum facilis expedita qui temporibus!</p>
                <NuxtImg src="/photos/mediun/photo5.webp" alt="Real Estate Image" />
            </div>
            <div id="section-3">
                <NuxtImg src="/photos/mediun/photo6.webp" alt="Real Estate Image" />
                <h2>Заглавие</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique, deserunt dignissimos enim dolor autem nostrum et eveniet, vel, inventore pariatur magni. Incidunt sapiente earum ipsum facilis expedita qui temporibus!</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

#real-estate {
    text-align: center;
    width: 100%;
    max-width: var(--max-width-medium);
}

#section-1 {
    display: flex;
    width: 100%;
    height: 464px;
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    overflow: hidden;
    padding-top: 56px;
}

#section-1-image{
    border-top-left-radius: 8px;
}


</style>