@extends('templates.template')

@section('content')
<header class="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 w-[80vw] gap-8 mx-auto border-2">
  <div class="flex flex-col gap-4 text-[var(--navy)]">
    <h1 class="font-serif font-bold text-5xl md:text-5xl lg:text-6xl">
      Dessing<br/>Vis & Traiteur
    </h1>
    <h3 class="font-sans max-w-md text-sm sm:text-base md:text-lg lg:text-xl mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cupiditate dolores quod corporis ea et.
    </h3>
    <button class="bg-[var(--navy)] text-[var(--white)] px-4 py-2 self-start text-xs sm:text-sm md:text-base lg:text-lg">
      Bekijk ons aanbod
    </button>
  </div>
  <div class="max-w-base min-w-[280px] w-[30vw] border-2">
    <img class="w-full" src="header.png" alt="Visfoto's" class="w-full h-auto">
  </div>
</header>

@endsection
