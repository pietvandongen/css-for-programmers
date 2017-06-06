# CSS for programmers

Developers seem to be irrationally afraid of CSS, somehow. They try to offload the 'creative work' to 'creative people', like frontend developers or designers. That's unnecessary or even harmful, since you're depriving yourself of essential knowledge.

This repository aims to show you how to get the most results doing the least amount of styling work. You don't even have to do alpha-stuff, like talking about your feelings or holding a coloring pencil. 

## Requirements

Besideds a half-decent workstation and any OS, you'll need:
 
- [NPM][1].
- [Gulp][2].
- Your favorite IDE.

## How to start

To get the project up and running:

- [Clone][3] this project.
- Open your terminal and go to its location (e.g. `cd ~/Repository/css-for-programmers`).
- Run `npm install`, which installs all dependencies.
- Run `gulp`, which will compile everything and deploy it.

Your browser should now open <http://localhost:3000/>. If it doesn't, point it to that URL.

## Developing

Open the project in your IDE while the application is running. All source code can be found under the [src](src) folder:

- [src](src): contains the markup files (at root level).
- [src/scss](src/scss): contains all stylesheets.

When editing and saving one of the source files, the application will be automatically reloaded in your browser, so you can see your changes immediately.

## Debugging

There is a [Browsersync][4] debug assistant available at <http://localhost:3001/>, which enables you to:
 
- [Outline CSS][5].
- [Add a grid][5].
- [Synchronize with other devices][6].

And [much more][4].

There is also a [Bootstrap][7] test page available at <http://localhost:3000/test.html>.

[1]: https://docs.npmjs.com/getting-started/installing-node
[2]: http://gulpjs.com/
[3]: https://git-scm.com/docs/git-clone
[4]: https://www.browsersync.io/
[5]: http://localhost:3001/remote-debug
[6]: http://localhost:3001/sync-options
[7]: https://v4-alpha.getbootstrap.com/
