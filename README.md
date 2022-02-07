# Description
iTunes search WEB using VueJS.

## Installation
```bash
npm install
```

## Running the WEB

First of all, it is required to have the API running in `http://localhost:3000`

Then, execute:

```bash
npm run serve
```

The web will be served in `http://localhost:8080`

### Run your unit tests
```
npm run test:unit
```

# Explanations and Justifications

I've used Vue 2 because it was the default version at the time this project was made.

This project does not use any kind of Routing because it was not necessary for the given requirements.

## Usage of Vuetify

In my opinion, its highly recommended to use a component library because it saves a lot of development time. Additionally, those components are continuously tested by the community and fully customizables.

Since I'm used to work with Material design, I decided to use [Vuetify](https://vuetifyjs.com/en/).

I added this library using vue cli:

```bash
vue add vuetify
```

It is also prepared for unit testing. The only requirement is to instantiate Vuetify to make it work

```ts
// ./tests/unit/app.spec.ts
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)
```

## Class-styled components

There is no special reason to use Class-styled components. Since I'm used to ReactJS, I feel more confortable with this sytax. I also like to use decorators.

## useSWRV

When developing projects with ReactJS, I like to use [SWR](https://swr.vercel.app/) for data fetching. This way to stream data allows me to have much less code to mantain since it makes the Redux library unnecesary. I just call the React Hook to fetch the data and this library will call the endpoint only if needed.

This library allowed me to delete tons of lines of code and forget about Redux

[SWRV](https://github.com/Kong/swrv) is the implementation for VueJS of the stale-while-revalidate pattern

I decided to use it instead of any other Flux inspired library like Vuex

```ts
// ./src/components/AlbumList.vue
const url = `http://localhost:3000/music/${artist}`
const { data, error, isValidating } = useSWRV<Album[]>(url, undefined, { revalidateOnFocus: false })
```

To make SWRV work, it is required to use Composition API plugin for Vue 2

```js
"@vue/composition-api": "^1.4.5",
```

