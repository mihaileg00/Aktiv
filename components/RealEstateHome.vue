<template>
  <section id="real-estate">
    <h1 class="display-8 color-primary">Недвижими имоти</h1>
    <div class="spacer-24" />
    <p class="paragraph-medium color-secondary">
      Тук ще намерите нашите най-нови предложения за недвижими имоти.
    </p>
    <div class="spacer-48" />
    <div id="section-1" class="shadow-02">
      <div class="content">
        <NuxtImg
          height="64px"
          width="64px"
          src="/icons/light/Business.svg"
          alt="icon-buisness"
        />
        <div class="spacer-24" />
        <h2 class="display-6 color-primary extra-bold">Заглавие</h2>
        <div class="spacer-16" />
        <p class="paragraph-large color-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          similique, deserunt dignissimos enim dolor autem nostrum et eveniet,
          vel, inventore pariatur magni. Incidunt sapiente earum ipsum facilis
          expedita qui temporibus!
        </p>
      </div>
      <NuxtImg
        id="section-1-image"
        src="/photos/medium/photo4.webp"
        width="100%"
        height="100%"
        alt="Real Estate Image"
      />
    </div>
    <div class="spacer-24" />
    <div id="sections-container">
      <div id="section-2" class="shadow-02">
        <div class="section-2-container">
          <h2 class="diplay-6 color-primary">Заглавие</h2>
          <div class="spacer-16" />
          <p
            class="paragraph-large color-secondary"
            style="padding-right: 32px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            similique, deserunt dignissimos enim dolor autem nostrum et eveniet,
            vel, inventore pariatur magni. Incidunt sapiente earum ipsum facilis
            expedita qui temporibus!
          </p>
          <div class="spacer-40" />
          <div class="section-2-image-container">
            <NuxtImg
              class="section-2-image animate__animated"
              v-for="(img, index) in projects[0].images"
              :key="index"
              :class="
                index <= currentImage
                  ? 'animate__slideInRight'
                  : 'animate__slideOutRight'
              "
              :src="`/photos/medium/${img.src}`"
              fit="cover"
              width="100%"
              height="300px"
              :alt="img.alt"
            />
            <div id="section-2-image-nav">
              <svg
                @click="
                  () => {
                    if (currentImage > 0) currentImage--;
                  }
                "
                :style="
                  currentImage > 0
                    ? 'cursor: pointer; pointer-events : auto;'
                    : ''
                "
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.72314 15.179L2.25007 9.00011L8.72315 2.82126"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.25 9L15.75 9"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                @click="
                  () => {
                    if (currentImage < projects[0].images.length - 1)
                      currentImage++;
                  }
                "
                :style="
                  currentImage < projects[0].images.length - 1
                    ? 'cursor: pointer; pointer-events : auto;'
                    : ''
                "
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.8269 2.82129L15.2999 9.0001L8.8269 15.1789"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.2999 9L2.69995 9"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="spacer-12" />
        <div id="section-2-nav">
          <div @click="() => {}" class="button-default bg-dark">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.72314 15.179L2.25007 9.00011L8.72315 2.82126"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.25 9L15.75 9"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="button-default bg-dark">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8269 2.82129L15.2999 9.0001L8.8269 15.1789"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.2999 9L2.69995 9"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div id="section-3" class="shadow-02">
        <NuxtImg
          id="section-3-image"
          src="/photos/medium/photo8.webp"
          fit="cover"
          width="100%"
          height="300px"
          alt="Real Estate Image"
        />
        <div class="spacer-24" />
        <h2 class="diplay-6 color-primary">Заглавие</h2>
        <div class="spacer-16" />
        <p class="paragraph-large color-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          similique, deserunt dignissimos enim dolor autem nostrum et eveniet,
          vel, inventore pariatur magni. Incidunt sapiente earum ipsum facilis
          expedita qui temporibus!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#real-estate {
  text-align: center;
  width: 100%;
  max-width: var(--max-width-medium);
  padding: var(--section-padding);
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

#section-1-image {
  border-top-left-radius: 8px;
  width: 55%;
  height: 100%;
  object-fit: cover;
}

#section-1 .content {
  align-self: flex-end;
  padding: 0 32px 56px 32px;
  width: 45%;
  text-align: left;
}

#sections-container {
  display: flex;
  width: 100%;
  gap: 24px;
}

#section-2,
#section-3 {
  position: relative;
  width: 50%;
  border: 1px solid var(--neutral-400);
  border-radius: 8px;
  text-align: left;
}

#section-2 {
  padding: 32px 0px 12px 32px;
  overflow: hidden;
}

.section-2-image-container {
  overflow: hidden;
  position: relative;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 100%;
  height: 300px;
}

.section-2-image {
  position: absolute;
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  top: 0;
  left: 0;
  object-fit: cover;
}

#section-2-image-nav {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  padding: 0 12px;
  justify-content: space-between;
  margin-right: 12px;
}

#section-2-nav {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-right: 12px;
}

#section-3 {
  padding: 72px 32px 32px 32px;
}

#section-3-image {
  border-radius: 8px;
  width: 100%;
  height: 300px;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  #section-1 {
    flex-direction: column;
    height: auto;
    padding-top: 0px;
  }

  #section-1-image {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 0 0 0 0;
  }

  #section-1 .content {
    padding: 32px;
    width: 100%;
  }

  #sections-container {
    flex-direction: column;
    gap: 24px;
  }

  #section-2,
  #section-3 {
    width: 100%;
  }

  #section-2 {
    padding: 32px 0px 32px 32px;
  }

  #section-2-image-container {
    border-radius: 8px;
    width: 100%;
    height: 300px;
  }

  #section-3 {
    padding: 32px;
  }

  #section-3-image {
    border-radius: 8px;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>

<script setup>
const projects = [
  {
    title: "Заглавие",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique, deserunt dignissimos enim dolor autem nostrum et eveniet, vel, inventore pariatur magni. Incidunt sapiente earum ipsum facilis expedita qui temporibus!",
    images: [
      {
        src: "photo8.webp",
        alt: "Real Estate Image",
      },
      {
        src: "photo4.webp",
        alt: "Real Estate Image",
      },
      {
        src: "photo4.webp",
        alt: "Real Estate Image",
      },
      {
        src: "photo4.webp",
        alt: "Real Estate Image",
      },
      {
        src: "photo4.webp",
        alt: "Real Estate Image",
      },
    ],
  },
  {
    title: "Заглавие",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique, deserunt dignissimos enim dolor autem nostrum et eveniet, vel, inventore pariatur magni. Incidunt sapiente earum ipsum facilis expedita qui temporibus!",
    images: [
      {
        src: "photo8.webp",
        alt: "Real Estate Image",
      },
      {
        src: "photo8.webp",
        alt: "Real Estate Image",
      },
    ],
  },
  {
    title: "Заглавие",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique, deserunt dignissimos enim dolor autem nostrum et eveniet, vel, inventore pariatur magni. Incidunt sapiente earum ipsum facilis expedita qui temporibus!",
    images: [
      {
        src: "photo8.webp",
        alt: "Real Estate Image",
      },
      {
        src: "photo8.webp",
        alt: "Real Estate Image",
      },
    ],
  },
];

const currentSlide = useState("currentSlide", () => 0);
const currentImage = useState("currentImage", () => 0);
</script>