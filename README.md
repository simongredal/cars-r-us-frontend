# Cars 'R' Us Frontend

This is the frontend for my Cars 'R' Us project

Features implemented so far

- Everything from startcode
- Get all cars from backend and render as table
- Login
- Add Car

Stuff works ,but there's visual feedback if anything fails so telling
the difference is sometimes pretty hard.

I made a separate api.js that handles the fetching part to make the
js-for-pages code cleaner. Server url is also factored into its own config.js

I'm using async-await in a lot of places, but i'm not handling any errors.