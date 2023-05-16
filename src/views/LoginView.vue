<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router';
import VButton from './../components/Inputs/VButton.vue';
import TheLogo from './../components/TheLogo.vue';

const selectedCountry = ref('BZH')
let allBtn

onMounted(()=>{
  allBtn = document.querySelectorAll('.Pays-item')
})

const selectCountry = (id) => {
  selectedCountry.value = id
  allBtn.forEach(btn => {
    if(btn.id === id){
      btn.classList.add('select')
    } else {
      btn.classList.remove('select')
    }
  });
}

const login = () => {
  console.log('Login Country : ' + selectedCountry.value);
  router.push('/game');
}

</script>

<template>
	<div class="Login-container">
		<TheLogo />
		<div class="Pays-container">
			<div id="BZH" class="Pays-item select" @click="selectCountry('BZH')"><span><img src="../../public/assets/images/BZH.png" alt="" /></span> <p>BZH</p></div>
			<div id="FRA" class="Pays-item" @click="selectCountry('FRA')"><span>🇫🇷</span> <p>FRA</p></div>
			<div id="ESP" class="Pays-item" @click="selectCountry('ESP')"><span>🇪🇸</span> <p>ESP</p></div>
			<div id="DEU" class="Pays-item" @click="selectCountry('DEU')"><span>🇩🇪</span> <p>DEU</p></div>
			<div id="ITA" class="Pays-item" @click="selectCountry('ITA')"><span>🇮🇹</span> <p>ITA</p></div>
			<div id="USA" class="Pays-item" @click="selectCountry('USA')"><span>🇺🇸</span> <p>USA</p></div>
		</div>
		<VButton @click="login()">Confirmer le pays</VButton>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.Login-container {
	background-color: $white;
	height: 100vh;
}

.Pays-container {
	display: flex;
  flex-wrap: wrap;
	justify-content: center;
	align-items: center;
  gap: 12px;
	height: 100vh;
  width: 100vw;
  padding: 60% 0;
	.Pays-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;
    margin: 20px;

    font-family: 'Paris 24';

    &.select{
      background-color: $light-camel;
      border-radius: 12px;
      border: solid $gold;
    }
    
		img {
			width: 30px;
      transform: translate(0, -3px);
		}

    span {
      font-size: 35px ;
    }

    p {
      transform: translate(0, -10px);
    }
	}
}
</style>
