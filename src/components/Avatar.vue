
<script setup lang="ts">
import houcine from '@/assets/images/houcine.jpg';

interface Props {
    src: string;
    shape: 'circle' | 'retangle';
    
}

// withDefaults(defineProps<Props>(), {
//     src: houcine,
//     shape: 'circle'
// })

defineProps({
    src: {
        type:String,
        default: houcine
    },
    shape: {
        type: String,
        default: 'circle'
    }
})
</script>
<template>
    <div>
        <img class="h-8 w-8 bg-transparent bg-primary bg-cover bg-no-repeat" 
        :class="shape === 'circle' ? 'rounded-full' : 'rounded-lg'"
        :src="src" alt="profile">
    </div>
</template>