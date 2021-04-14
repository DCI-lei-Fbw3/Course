You can place your frontend project over here. By having backend and frontend in the same parent directory we can make sure that we keep the same directory structure.
This comes in handy when we want to create an npm script to automatically build the frontend, remove the old build and copy the new version to the correct backend path.

So, in your package.json you may want to add a command similar to this one:
"build-dev": "npm run build && rm -r ../backend/app/* && cp -r build/* ../backend/app/"

With && we chain multiple commands to be executed one after another.
