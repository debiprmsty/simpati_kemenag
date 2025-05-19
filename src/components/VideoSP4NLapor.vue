<template>
  <div class="max-w-full mx-auto py-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="video in videos"
        :key="video.id"
        class="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg"
      >
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          :src="`https://www.youtube.com/embed/${video.id}`"
          :title="video.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YoutubeGrid",
  data() {
    return {
      videos: [
        { id: "zOQ0pte5ir0", title: "Video 1" },
        {
          id: "pVJlNv0Zgd0",
          title: "Video 2",
        },
      ],
    };
  },
};
</script>
