![Longdo Map Logo](https://map.longdo.com/themes/longdo/logo.png)

# longdo-map-v3-vue
Longdo Map (API v3) component for Vue.js

![npm](https://img.shields.io/npm/v/longdo-map-vue)
![npm](https://img.shields.io/npm/dt/longdo-map-vue)
![npm](https://img.shields.io/npm/l/longdo-map-vue)

## Table of Contents
- [Getting Started](#getting-started)
  - [Requirement](#requirement)
  - [Installation](#installation)
  - [Usage](#usage)
- [Examples](#examples)
- [Components](#components)
- [Documentation](#documentation)
- [Community](#community)
- [References](#references)

## Getting Started

### Requirement
- [Vue](https://vuejs.org/)
> The current version of Longdo Map Vue does not support Vue 3.

### Installation
You can easily install by using `npm`
```cli
npm i longdo-map-v3-vue
```

### Usage
First, you need to get a [Longdo Map API key](https://map.longdo.com/docs/javascript/getapi). 

Then, after you have Longdo Map API key and component installed, you need to register it to your Vue project.

There are two ways of registering component:

#### Register component globally
This is a recommended way of registering component

In your `main.js` or similar file:
```js
import Vue from 'vue'
import LongdoMap from 'longdo-map-v3-vue'

Vue.use(LongdoMap, {
    load: {
        apiKey: 'YOUR_LONGDO_MAP_API_KEY'
    }
})
```
Then you can use `<longdo-map/>` in your component template.
```html
<template>
    <longdo-map/>
</template>
```

#### Register locally in your component
In your component file, for example `Foo.vue`:
```html
<template>
    <longdo-map/>
</template>
```
```js
import { LongdoMap } from 'longdo-map-v3-vue'
LongdoMap.init({ apiKey: 'YOUR_LONGDO_MAP_API_KEY' })

export default {
  name: 'Foo',
  components: {
      LongdoMap
  }
}
```
You can import more components if you want, for example:

`import { LongdoMap, LongdoMapMarker } from 'longdo-map-v3-vue'`

## Examples
Add a polygon to Longdo Map:

```html
<template>
    <longdo-map>
        <longdo-map-polygon
            :location="locationList"
            :lineWidth="2"
            :lineColor="'rgba(0, 0, 0, 1)'"
            :fillColor="'rgba(255, 0, 0, 0.4)'"
        />
    </longdo-map>
</template>
```
```js
export default {
    data() {
        return {
            locationList: [
                { lon: 99, lat: 14 },
                { lon: 100, lat: 13 },
                { lon: 102, lat: 13 },
                { lon: 103, lat: 14 }
            ]
        }
    }
}
```

Add multiple markers to Longdo Map:

```html
<template>
    <longdo-map :zoom="10" :lastView="false">
        <longdo-map-marker
            v-for="(item, i) in markers"
            :key="i"
            :location="item.location"
            :title="item.title"
            :detail="item.detail"
        />
    </longdo-map>
</template>
```

Using Longdo Map object:

```html
<template>
    <longdo-map @load="loadMap">
        <longdo-map-marker @add="addMarker" :location="{ lon: 99, lat: 14 }" />
    </longdo-map>
</template>
```
```js
export default {
    methods: {
        loadMap (map) {
            map.Layers.setBase(longdo.Layers.NORMAL)
        },
        addMarker (marker) {
            console.log(marker.location())
        }
    }
}
```

## Components
* [longdo-map](#map)
* [longdo-map-marker](#overlay)
* [longdo-map-dot](#geometry)
* [longdo-map-circle](#geometry)
* [longdo-map-rectangle](#geometry)
* [longdo-map-polyline](#geometry)
* [longdo-map-polycurve](#geometry)
* [longdo-map-polygon](#geometry)
* [longdo-map-menu-bar](#menu-bar)
* [longdo-map-custom-control](#custom-control)
* [longdo-map-lock-map](#lock-map)
* [longdo-map-custom-ui](#custom-ui)

### Map
- [Props](http://api.longdo.com/map/doc/ref.php#MapOptions)
- Event: `@load="Function(object)"`
```html
<longdo-map :zoom="10" :lastView="false" />
```

### Overlay
- [Props](http://api.longdo.com/map/doc/ref.php#MarkerOptions)
- Event: `@add="Function(object)"`
```html
<longdo-map>
    <longdo-map-marker :location="{ lon: 99, lat: 14 }" :title="'Home'" :detail="'My home'" />
</longdo-map>
```

### Geometry
`longdo-map-dot`, `longdo-map-circle`, `longdo-map-rectangle`,

`longdo-map-polyline`, `longdo-map-polycurve`, `longdo-map-polygon`

- [Props](http://api.longdo.com/map/doc/ref.php#GeometryOptions)
- Event: `@add="Function(object)"`
```html
<longdo-map>
    <longdo-map-polygon
        :location="[{ lon: 100.123, lat: 13.579 }, ...]"
        :lineWidth="2"
        :lineColor="'rgba(0, 0, 0, 1)'"
        :fillColor="'rgba(255, 0, 0, 0.4)'"
    />
</longdo-map>
```

### Menu Bar
- [Props](http://api.longdo.com/map/doc/ref.php#MenuBarOptions)
- Event: `@add="Function(object)"`
- Event: `@change="Function(currentMenuItem: Object, lastMenuItem: Object)"`
```html
<longdo-map>
    <longdo-map-menu-bar :button="[{ label: 'first', value: 1 }, { label: 'second', value: 2 }]" />
</longdo-map>
```
*** support button type only

### Custom Control
- [Props](http://api.longdo.com/map/doc/ref.php#CustomControlOptions)
- Event: `@add="Function(object)"`
```html
<longdo-map>
    <longdo-map-custom-control :html="'<button>button</button>'" />
</longdo-map>
```

### Custom UI
- Props: `vertical`, `horizontal` ('top', 'right', 'bottom', 'left', 'center')
```html
<longdo-map>
    <longdo-map-custom-ui :vertical="'bottom'" :horizontal="'center'">
        <div>Longdo Map</div>
    </longdo-map-custom-ui>
</longdo-map>
```

## Documentation
* [สอนการใช้ Map API ร่วมกับ Vue.js](https://map.longdo.com/blog/2019/12/03/longdo-map-api-vue-js/)

## Community
* [Longdo Map API Community - แผนที่ออนไลน์ไทย](https://www.facebook.com/groups/708165893234850)

## References
* [Longdo Map](https://map.longdo.com/products)
* [Longdo Map API Documentation](https://map.longdo.com/docs/)