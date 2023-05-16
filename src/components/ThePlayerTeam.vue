<script setup >
import { useGameStore } from "@stores/game";

const domGameStore = useGameStore();

const flag = {
  "FRA" : "🇫🇷",
  "ESP" : "🇪🇸",
  "DEU" : "🇩🇪",
  "ITA" : "🇮🇹",
  "USA" : "🇺🇸",
}
</script>

<template>
  <div class="ThePlayerTeam">
    <img v-if="domGameStore.playerCountry === 'BZH'" src="../../public/assets/images/BZH.png" alt="" />
    <span v-else >{{ flag[domGameStore.playerCountry] }}</span>
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.ThePlayerTeam {
  position: absolute;
  top: 95px;
  padding: 16px;
  background-color: $light-camel;
  border-radius: 0 100px 100px 0;

  img {
    width: 24px;
  }

  span {
    font-size: 26px;
  }
}
</style>