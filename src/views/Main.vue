<script setup lang="ts">
import Page from '../components/Page.vue';
import { ref } from 'vue';
import MenuAside from '@/views/MenuAside.vue';
import Icons from '@/components/icons';

import IconButton from '@/components/IconButton.vue';
import Avatar from '@/components/Avatar.vue';
import UserCard from '@/components/UserCard.vue';

// temporario imagens
import ayo from '@/assets/images/ayo.jpg'
import charles from '@/assets/images/charles.jpg'
import josep from '@/assets/images/josep.jpg'
import houcine from '@/assets/images/houcineI.jpg'
import Mensagem from '@/components/Mensagem.vue';

const out = ref(false);
const active = ref(false)

</script>
<template>
    <Page class="mx-auto xl:max-w-7xl" :hidden="true">
        <div class="flex my-10 h-[90%] border-2 min-w-max bg-white shadow-sm rounded-lg">
            <!-- MENU LATERAL -->
            <div class="h-full w-[4.625rem]" :class="{ 'w-40': out }">
                <MenuAside class="border-r"></MenuAside>
            </div>

            <div class="w-full flex flex-col justify-items-stretch">
                <!-- MENU DO TOPO -->
                <nav class="border-b h-[4.75rem] flex justify-between px-5">
                    <div class="flex items-center">
                        <IconButton class="text-primary" :icon="Icons.Chat"></IconButton>
                        <p class="font-semibold text-sm text-gray-600 ml-4">Messages</p>
                    </div>

                    <!-- Search -->
                    <section class="flex items-center space-x-5">
                        <div class="relative">
                            <input type="text" placeholder="Search" class="h-8 w-[7.25rem] text-sm" />
                            <IconButton
                                class="absolute right-2 top-2 h-4 w-4"
                                :icon="Icons.LupSearch"
                            ></IconButton>
                        </div>
                        <IconButton :icon="Icons.Bell"></IconButton>
                        <Avatar></Avatar>
                    </section>
                </nav>

                <!-- CONTEUDO -->
                <div class="w-full flex flex-row h-full overflow-hidden">
                    <!-- 1° colum -->
                    <section class="w-69.5 border-r divide-dashed">
                        <div class="relative flex flex-col h-full">
                            <div class="bg-white px-5">
                                <header class="flex justify-between px-2 pt-6 mb-5">
                                    <p class="text-xs text-gray-600 font-semibold">Chats</p>

                                    <div class="flex space-x-2">
                                        <IconButton class="h-4 w-4 mr-4" :icon="Icons.LupSearch"></IconButton>
                                        <IconButton class="h-4 w-4" :icon="Icons.Add"></IconButton>
                                    </div>
                                </header>

                                <!-- Grupo de botões -->
                                <div class="space-x-2 px-2 mb-5">
                                    <button
                                        class="text-xs bg-blue-100 text-blue-600 rounded-md shadow-sm px-3 py-2"
                                    >Open</button>
                                    <button
                                        class="text-xs bg-blue-100 text-blue-600 rounded-md shadow-sm px-3 py-2"
                                    >Done</button>
                                    <button
                                        class="text-xs bg-white text-gray-500 opacity-80 border border-dashed border-gray-500 border-opacity-80 rounded-md shadow-sm px-3 py-2"
                                    >Unread</button>
                                </div>
                            </div>

                            <!-- lista de cards -->
                            <div class="overflow-y-auto light-scroll">
                                <div class="px-5 space-y-5">
                                    <!-- card -->
                                    <UserCard
                                        name="Leslie Laurens"
                                        office="UX Consulting"
                                        :active="true"
                                        time="11m"
                                    ></UserCard>
                                    <UserCard
                                        :src="josep"
                                        name="Leslie Laurens"
                                        office="UX Consulting"
                                        :active="true"
                                        time="23m"
                                    ></UserCard>
                                    <UserCard
                                        :src="ayo"
                                        name="Leslie Laurens"
                                        office="UX Consulting"
                                        :active="true"
                                        time="1h30"
                                    ></UserCard>
                                    <UserCard
                                        :src="charles"
                                        name="Leslie Laurens"
                                        office="UX Consulting"
                                        time="2h43"
                                    ></UserCard>
                                    <UserCard
                                        :src="houcine"
                                        name="Leslie Laurens"
                                        office="UX Consulting"
                                        time="3h22m"
                                    ></UserCard>
                                    <UserCard
                                        name="Leslie Laurens"
                                        office="UX Consulting"
                                        time="4h"
                                    ></UserCard>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 2° colum -->
                    <div class="flex-1 w-full h-full flex flex-col">
                        <div>
                            <h1 class="py-7 pl-5 text-gray-600 font-bold">Scouting Group</h1>

                            <div class="w-full bg-slate-100 pl-5">
                                <p class="w-72 px-1 py-2 text-xs text-primary">
                                    <span
                                        class="font-semibold leading-6 opacity-90"
                                    >Welcome to the Streamline scouting chat</span>
                                    <br />We can no freely collaborate regarding our current Demand.
                                    Any questions about the documentation or the project,
                                    please feel free to get in contact us.
                                </p>
                            </div>
                            <!-- data da última mensagem -->
                            <p class="text-xs text-gray-400 py-6 text-center">
                                Tuesday, Apbril 7th at 1:21PM
                            </p>
                        </div>
                        <!-- Messages -->
                        <div>
                            <Mensagem />
                            <Mensagem />

                            <Mensagem :yself="true" />
                        </div>
                    </div>

                    <!-- 3° colum -->
                    <div class="border-l divide-dashed w-[17.25rem] h-full">
                        <!-- Botões -->
                        <div class="h-12 flex text-xs">
                            <button
                                @click="active = !active"
                                class="flex-1 font-semibold outline-none"
                                :class="!active ? 'outline border-t-0 border-r-0 border-l-0 text-primary border-4 border-b border-primary' : 'text-gray-400'"
                            >Chat Members</button>
                            <button
                                @click="active = !active"
                                class="flex-1 font-semibold outline-none"
                                :class="active ? 'outline border-t-0 border-r-0 border-l-0 text-primary border-4 border-b border-primary' : 'text-gray-400'"
                            >Shared File</button>
                        </div>
                        <!-- Body -->
                        <section class="flex flex-col pt-3 h-full">
                            <!-- membros -->
                            <div class="pl-5 h-2/5">
                                <p class="text-[0.65rem] text-gray-600 font-medium">MEMBERS</p>
                                <!-- Cards -->
                                <div class="overflow-y-auto h-full divide-y light-scroll">
                                    <UserCard
                                        :src="houcine"
                                        name="Maia"
                                        office="CTO"
                                        :icon="Icons.Chat"
                                    ></UserCard>
                                    <UserCard
                                        :src="houcine"
                                        name="Maia"
                                        office="CTO"
                                        :icon="Icons.Chat"
                                    ></UserCard>
                                    <UserCard
                                        :src="houcine"
                                        name="Maia"
                                        office="CTO"
                                        :icon="Icons.Chat"
                                    ></UserCard>
                                    <UserCard
                                        :src="houcine"
                                        name="Maia"
                                        office="CTO"
                                        :icon="Icons.Chat"
                                    ></UserCard>
                                    <UserCard
                                        :src="houcine"
                                        name="Maia"
                                        office="CTO"
                                        :icon="Icons.Chat"
                                    ></UserCard>
                                </div>
                            </div>

                            <!-- admins -->
                            <div class="pl-5 pt-5 h-2/5 overflow-hidden">
                                <p class="text-[0.65rem] text-gray-600 font-medium">ADMINS</p>

                                <!-- Cards -->
                                <div class="overflow-y-auto h-full divide-y light-scroll">
                                    <UserCard
                                        :src="ayo"
                                        name="Maia I"
                                        office="CTO"
                                        :icon="Icons.Chat"
                                        colorIcon="text-primary"
                                    ></UserCard>
                                    <UserCard
                                        :src="ayo"
                                        name="Maia II"
                                        office="CTO"
                                        :icon="Icons.Chat"
                                    ></UserCard>
                                    <UserCard
                                        :src="ayo"
                                        name="Maia III"
                                        office="CTO"
                                        :icon="Icons.Chat"
                                    ></UserCard>
                                    <UserCard
                                        :src="ayo"
                                        name="Maia IV"
                                        office="CTO"
                                        :icon="Icons.Chat"
                                    ></UserCard>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </Page>
</template>