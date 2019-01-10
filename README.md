# VueSSRWorkshop

This workshop demonstrates how Vue SSR works using Matt Brophy's [vue-ssr-build](https://github.com/brophdawg11/vue-ssr-build).

## Starting Your Environment

1. Make sure you have Node 8 installed.

2. Run `npm install` to install the app.

3. Run `npm run dev` to start the development server.

4. Navigate to [http://localhost:3000](http://localhost:3000) to see your app.

## Excercise

While the full solution is found in `master`, checking out the `workshop` branch in this repository will set the repo to a state before all the logic is in place for the simple cat image app. The goal of the workshop is to teach the user to fetch data server side and render a component server side with the fetched data. The app should still be reactive after the application has been hydrated with the store data from the server.

### Steps to Completion

1. Create an action in `store.js` that uses `axios.get` to fetch a cat image from [https://aws.random.cat/meow](https://aws.random.cat/meow).

2. Create a mutation that stores the results of step 1 in the store.

4. Write a getter that fetches all the images that are in the store.

4. In `Cats.vue` use `fetchData` to call the action from Step 1 and fetch the data when the component is loaded.

5. Write a computed property in `Cats.vue` that calls the getter from Step 4.

6. Use the computed property from Step 5 in a `v-for` to render all the images from the store.

7. Write a method in `Cats.vue` that is called from a `@click` action on a button. This method will dispatch the action from Step 1 to get more cat images.

8. Add some styles!
