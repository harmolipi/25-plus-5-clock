# 25plus5 Clock

Created as part of [freeCodeCamp](https://www.freecodecamp.org) curriculum.

View on [Github](https://github.com/harmolipi/25-plus-5-clock).

## Functionality

This is the [25plus5 Clock](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock) project, where I make a Pomodoro technique-style timer that counts down alternating periods of work and breaks.

## Thoughts

This project was a good chance to practice separating concerns between different components. In this case, the main components were TimeSet and Timer. TimeSet to handle setting the length of the work and breaks, and Timer to actually count down for each of them. The main design question that arose was where to keep the logic, and I ended up extracting it from either of those components, and keeping it within App itself.

God bless.

-Niko Birbilis
