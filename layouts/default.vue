<template>
  <div>
    <ClientOnly>
      <Cookies />
    </ClientOnly>
    <Nav />
    <slot />
    <Footer />
  </div>
</template>