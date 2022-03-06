<script setup lang="ts">
import Avatar from './Avatar.vue';
import IconButton from './IconButton.vue';

defineProps({
    name: {
        type: String,
        require: true
    },
    office: {
        type: String,
        default: ''
    },
    shape: {
        type: String,
        default: 'retangle'
    },
    time: {
        type: String,
        default: '32m'
    },
    active: {
        type: Boolean,
        default: false
    },
    src: String,
    icon: String,
});

</script>
<template>
    <!-- card -->
    <div
        class="flex items-center justify-between h-14 px-3 py-4 text-gray-500 hover:bg-slate-100 cursor-pointer"
        :class="!icon ? 'rounded-md' : ''"
    >
        <div class="flex items-center space-x-3">
            <Avatar :src="src" :shape="shape"></Avatar>
            <div class="text-xs">
                <h1 class="font-semibold leading-4 text-gray-600">{{ name }}</h1>
                <small v-if="office.length > 0">You: {{ office }}</small>
            </div>
        </div>
        <p v-if="!icon" class="text-xs">{{ time }}</p>
        <IconButton v-else :icon="icon" customClass="h-5 w-5 text-primary"></IconButton>
    </div>
</template>