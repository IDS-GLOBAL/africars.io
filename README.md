Packages Used For This App Are The Following And Information of how they were installed and maybe what they do a little.

## Signals 

Signals is a performant state management library with two primary goals

Make it as easy as possible to write business logic for small up to complex apps. No matter how complex your logic is, your app updates should stay fast without you needing to think about it. Signals automatically optimize state updates behind the scenes to trigger the fewest updates necessary. They are lazy by default and automatically skip signals that no one listens to.
Integrate into frameworks as if they were native built-in primitives. You don't need any selectors, wrapper functions, or anything else. Signals can be accessed directly and your component will automatically re-render when the signal's value changes

Read More: https://classic.yarnpkg.com/en/package/@preact/signals-react
Tutorial: https://www.youtube.com/watch?v=SO8lBVWF2Y8

    yarn add @preact/signals-react or npm i @preaact/signals-react
    npm i @preaact/signals-react-native


    import { signal, computed } from "@preact/signals-react";

    const name = signal("WebGoonie")
    console.log(name)

    setInterval(() => {
        name.value = Math.random()
    }, 500)

Best way to return a value for siginal setting
    return JSON.parse(value)

To Use it key effect is 
    effect(() => {

        // Set Your signal state here
    })

    useSignal(() => {

        // Set Your signal state here
    })

    useSignalEffect(() => {

        // Set Your signal state here
    })

    const completedTodosCount = computed(() => {
        return todos.value.filter(todo => todo.complted).length
    })


    return(
        <div>
            {/* Note .value holds now updated from an effect using computed */}
            Completed {completedTodosCount.value}
        </div>
    )


## Prisma

With Prisma you have to use npx to get the built in features of prisma yarn or npm commands don't prompt powerful optional features prompted from terminal.


    npx yarn prisma
    npx prisma studio

    npx init
    npx prisma db pull or yarn prisma db pull


    yarn prisma migrate dev or npx prisma migrate dev --name init

When using mysql this is how the .env is prompted for the proper values the <> are actually strings no syntax at all.\

    DATABASE_URL="mysql://<dbusername>:<dbpassword>@localhost:<dbport>/<dbdbname>"

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

## In how to descripe file stuctures in text.

```sh

        ProjectRoot
        ├── src
        │   ├── main
        │   │   ├── java
        │   │   │   ├── com
        │   │   │   │   ├── example
        │   │   │   │   │   ├── MyClass.java
        │   │   │   │   │   ├── AnotherClass.java
        │   │   │   │   │   └── ...
        │   │   └── resources
        │   │       ├── config.properties
        │   │       └── ...
        │   └── test
        │       ├── java
        │       │   ├── com
        │       │   │   ├── example
        │       │   │   │   ├── TestMyClass.java
        │       │   │   │   └── ...
        │       └── resources
        │           └── testConfig.properties
        └── ...

```
