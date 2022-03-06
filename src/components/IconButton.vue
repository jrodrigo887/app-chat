
<script setup lang="ts">
import Icons, { 
    IconFolderShared, 
    IconGridViewMenu, 
    IconMenu,
    IconChatBubble,
    IconLupSearch,
    IconPasteContentSearch,
    IconPasteSearch,
    IconStatistic,
    IconTextSms,
    IconTooling,
    IconWallet,
    IconBell,
    IconChat,
    IconAdd  } from '@/components/icons';

    const componentIcons: { [key: string]: string } = { 
    IconFolderShared, 
    IconGridViewMenu, 
    IconMenu,IconChatBubble,
    IconLupSearch,
    IconPasteContentSearch,
    IconPasteSearch,
    IconStatistic,
    IconTextSms,
    IconTooling,
    IconWallet,
    IconBell,
    IconChat,
    IconAdd
    }

interface Props {
    icon: string;
}

withDefaults(defineProps<Props>(), {
    icon: Icons.Menu,
});

</script>
<template>
    <button @click="$emit('pressed')">
        <div class="">
            <component :is="componentIcons[icon]" ></component>
        </div>
    </button>
</template>