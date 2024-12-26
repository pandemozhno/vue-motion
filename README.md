بِسْمِ اللهِ في أَوَّلِهِ وَآخِـرِه‎
## vue-motion 

Гипотеза: Моушн дизайн в вебе необходим. Это логичное продолжение UI и необходимость для UX

# Motion Design for Web & Mobile Apps UX :star_struck:

## Elements
**v-motion** - basic animations for page elements

### :sunglasses:: Todo 
- [x] Options as array, animation names as array for some animations
- [ ] Triggers for start aniamtion (click, scroll, etc...)
- [ ] v-if, v-show directives reverse animation or other animation. 
- - [ ] Array options
- [ ] ...

### :nerd_face: Example 
```
<template>
  <Header>
    <Logo
      v-motion="{ name: 'fade-in', duration: 1500, easing: 'ease-in', fill: 'backwards' }"
    />
   <User v-motion="{
      name: ['fade-in', 'slide-left'],
      delay: 1000,
      duration: [2000, 1000],
      easing: 'ease-in'
      fill: 'backwards'
   }"/>
  </Header>
</template>
```

### :clipboard: Animations names list

**Use as 'fade-in' or ['fade-in', 'slide-down', 'etc...']**

- fade-in
- fade-out
- slide-left
- slide-right
- slide-down
- slide-up

## TEXT

**v-motion-text** - basic effects for text render

### :sunglasses:: Todo 
- [ ] Architect planing

### :nerd_face: Example 
```
<template>
  <Body>
    <h1 v-motion-text="{}">Awesome page title</h1>
  </Body>
</template>
```

### :clipboard: Text effects list

**Use as 'tween' or ['tween', 'printing', 'etc...']**

- tween

## SVG

**v-motion-svg** - basic aniamtion for svg graphics

### :sunglasses:: Todo 
- [ ] Architect planing

### :nerd_face: Example 
```
<template>
  <Body>
    <svg v-motion-svg="{}">
      <rect v-motion-svg="{}" />
    </svg>
  </Body>
</template>
```

### :clipboard: SVG animations list

**Use as 'lines' or ['tween', 'printing', 'etc...']**

- lining
