# OEVK

Base content for simple site content for Enikő Tompa

## Prerequisites:
The following applications has to be installed on your machine:
- Node.JS v22+
- Yarn v1.22.10+

## Installation
To install all dependencies:
```yarn install```

## Edit resources locally:
Run the following command to have a constant watcher while editing stylesheet & html content:
```yarn run```

## Build application
To have a production-ready compiled site run the following command:
```yarn build```
The results can be found in the `dist` directory:
- index.html
- oevk.[hash].css
- oevek[hash].js
The map files are not required to have a working application. Please note: due to browser security restrictions javascript files cannot be accessed by simply opening the result document.

## Technical information
The application uses Bootstrap toolkit. Please get more information about available utilities at https://getbootstrap.com/ site.
