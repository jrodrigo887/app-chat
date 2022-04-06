<script setup lang="ts">
import Avatar from '@/components/Avatar.vue';

defineProps({
    yself:{
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div class="flex pt-2" :class="yself ? 'justify-end' : 'justify-start'">

        <Avatar shape="retangle" class="px-2" :class="yself ? 'order-2' : 'order-1'"/>

        <div class="p-4 rounded-xl w-2/4" 
            :class="[yself ? 'order-1 bg-primary text-white' : 'order-2 bg-slate-100 text-gray-600',  ]">
            <p class="text-xs leading-5">
                Hello, my friend... do you like music, right?
                I play guitar electric
            </p>
        </div>
    </div>  
</template>