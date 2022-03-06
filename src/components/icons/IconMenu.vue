<script setup lang="ts">
defineProps({
  customClass: {
    type: String,
    default: 'h-5 w-5 text-gray-400'
  }
});
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="customClass" width="28" height="28" fill="currentColor"  version="1.1" viewBox="0 0 512 512" xml:space="preserve" >

    <g>
	<g>
	<path class="st0" d="M381,190.9H131c-11,0-20-9-20-20s9-20,20-20h250c11,0,20,9,20,20S392,190.9,381,190.9z"/>
	</g>

	<g>
		<path class="st0" d="M381,361.1H131c-11,0-20-9-20-20s9-20,20-20h250c11,0,20,9,20,20S392,361.1,381,361.1z"/>
	</g>

	<g>
		<path class="st0" d="M381,276H131c-11,0-20-9-20-20s9-20,20-20h250c11,0,20,9,20,20S392,276,381,276z"/>
	</g>
</g>
  </svg>
</template>