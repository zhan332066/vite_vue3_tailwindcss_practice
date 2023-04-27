<script setup>
  import { reactive, ref, watch } from "vue";

  const menuclick = ref(false);

  const navList = {
    news: "NEWS & EVENTS",
    moto: "摩托車",
    refit: "配件",
    clothes: "服飾精品",
    dealer: "經銷商",
    about: "關於TRIUMPH",
    warranty: "售後服務",
  };

  const menuList = ref(null);

  const handlerMenuEvent = () => {
    menuclick.value = !menuclick.value;

    // $refs('menuList')
  };

  const boardImgList = ["boardList_1.png", "boardList_2.png", "boardList_3.png"];
  const boardIndex = ref(0);

  const runBoardIndex = (value = 0) => {
    let num = value == 0 ? 1 : value;
    boardIndex.value =
      boardIndex.value == 0 ? boardImgList.length - 1 : boardIndex.value + num;
    boardIndex.value = boardIndex.value % boardImgList.length;
  };

  setInterval(() => {
    runBoardIndex();
  }, 10000);

  const NewProductList = [
    "HONDA | CB650R",
    "HONDA | CB300R",
    "HONDA | CB350",
    "HONDA | CB650F",
    "HONDA | CB150R",
    "HONDA | CB1000R",
  ];

  const discountProductList = [
    { name: "Lorem, ipsum dolor.", price: 33000, discount: 31500 },
    { name: "Lorem ipsum dolor sit amet.", price: 1980, discount: 1680 },
    { name: "Lorem ipsum dolor sit.", price: 5040, discount: 3200 },
    {
      name: "Lorem ipsum dolor sit amet consectetur.",
      price: 2776,
      discount: 2680,
    },
    { name: "Lorem ipsum dolor sit.", price: 12800, discount: 9800 },
    { name: "Lorem ipsum dolor sit amet.", price: 3990, discount: 2990 },
  ];

  const changeStyle = ref(false);
</script>

<template>
  <!-- nav -->
  <div class="h-16 w-full bg-gray-800 flex justify-between items-center">
    <p class="ml-2 font-[Trattatello] text-gray-200 text-3xl">RustRunner</p>

    <div class=" w-6 h-6 sm:hidden flex flex-col gap-1 justify-center items-center  text-white relative">
      <p
        class="text-2xl mr-4 hover:text-gray-300 "
        @click="handlerMenuEvent"
      >
        <font-awesome-icon
          class=" transition  active:animate-spin   ease-in-out delay-700"
          :icon="!menuclick?['fa','list']:['fa','x']"
        />
      </p>
      <ol
        ref="menuList"
        :class=" `absolute ${!menuclick?'opacity-0':'opacity-100'}  right-0 top-12 w-40 bg-slate-400 p-4  active:fadein`"
      >
        <li
          class=" transition hover:underline underline-offset-4 hover:italic hover:text-black"
          v-for="value,key in navList "
          :key="key"
        >
          <a class="">{{ value }}</a>
        </li>
      </ol>
    </div>

  </div>
  <!-- boardList -->
  <div :class="`z-0 w-full h-[650px] bg-center bg-cover bg-[url(public/${boardImgList[boardIndex]})] flex flex-col justify-center pb-2 gap-2 `">
    <div class="flex-1 flex justify-between items-center text-6xl font-[Trattatello] pl-4 pr-4">
      <div
        class="text-white/40 hover:text-white/60 hover:cursor-pointer font-bold"
        @click="runBoardIndex(-1)"
      >&lt;</div>

      <div
        class="text-white/40 hover:text-white/60 hover:cursor-pointer font-bold"
        @click="runBoardIndex(1)"
      >&gt;</div>
    </div>
    <div class="flex justify-center items-end gap-2">
      <div
        v-for="(link,idx) in boardImgList"
        :key="idx"
        :class=" `w-2 h-2 rounded-full z-10 ${idx === boardIndex? 'bg-gray-500':'bg-gray-400'}`"
      >
      </div>
    </div>
  </div>
  <!-- AD -->
  <div class="w-full h-[485px] bg-red-300 overflow-hidden">
    <img
      class="h-full object-cover"
      src="boardList_1.png"
      alt=""
    >
  </div>
  <!-- New Product -->
  <div>
    <p class=" p-8 text-center text-3xl font-bold tracking-[0.5rem]">新品上架</p>
    <div :class="`p-2 z-0 w-full h-[465px] `">
      <img
        class="object-cover h-full"
        :src="boardImgList[boardIndex]"
        alt=""
      >
    </div>
    <ul class="p-2">
      <li
        class="flex justify-between pl-6 pr-4 bg-gray-100 mb-2 h-16 items-center transition-colors hover:cursor-pointer hover:bg-gray-800 hover:text-white"
        v-for="(str,idx) in NewProductList"
        :key="idx"
      >
        <p>{{ str }}</p>
        <button class="border-2 border-slate-500 p-2 text-xs">SHOP NOW</button>
      </li>
    </ul>
  </div>
  <!-- Discount -->
  <div>
    <p class="p-8 text-center text-3xl font-bold tracking-[0.5rem] text-red-700">精選折扣</p>
    <p
      class="border-2 border-slate-600 w-fit mt-2 mb-2 mr-4 ml-4 pl-1 pr-1 rounded-md hover:cursor-pointer"
      @click="changeStyle=!changeStyle"
    ><font-awesome-icon :icon="changeStyle?['fa', 'list']:['fa','table']" /></p>
    <div :class="`flex ${changeStyle?'flex-col':''} flex-wrap gap-2 justify-center items-start`">
      <div
        v-for="(product,idx) in discountProductList"
        :class="`${changeStyle?'w-full pl-4 pr-4':'w-56'}`"
        :key="idx"
      >
        <img
          :class="`${changeStyle?'':'w-56 h-56 object-cover'}`"
          src="boardList_1.png"
        >
        <p class="mt-2 whitespace-pre-wrap">{{ product.name }}</p>
        <div class="text-sm font-light">建議售價 <p class=" inline-block line-through">NT${{product.price}}</p>

        </div>
        <p class="font-normal">NT$ {{product.discount}}</p>
        <button class="pt-1 pb-1 pr-2 pl-2 rounded-md text-sm w-28 border-[1px] border-slate-800 mt-2">加入購物車</button>
      </div>

    </div>
  </div>
  <!-- Hito Topic -->
  <div>

  </div>
</template>

<style scoped>
  .fadein {
    animation: fadeinText 1s ease-in-out 2s;
  }
  @keyframes fadeinText {
    from {
      transform: translateX(50px);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>
