# Image Processing API

This api process resizes the image to the user's desired size using TypeScript and Express.

## Project Description

Accessing the URL at **How to Install and Run the Project #7** resizes an image provided and save it to ./images/thumbnails on first access. The api has caching so that repeated requests to the endpoint use pre-stored images rather than regenerating a new image each time.

Tests for endpoints and image processing using Jasmine.

This Image Processing API project is for Udacity's Full Stack JavaScript Developer nanodegree program.

## How to Install and Run the Project

1. Clone the project

```bash
  git clone https://github.com/hykim-soulis/Image-Processing-API.git
```

2. Go to the project directory

```bash
  cd project-directory
```

3. Install image processing api with npm

```bash
  npm install
```

4. Start project with npm (default port: 3000)

```bash
  npm run start
```

5. Build project

```bash
  npm run build
```

6. Save image you want to resize at ./images/full directory

7. Access below endpoint with your image filename and desired width and height.<br>
   localhost:**PORT**/api/images/fileName=**FILE NAME**&width=**WIDTH PIXEL**&height=**HEIGHT PIXEL**

- Example full url: santamonica, 200X200 <br>
  [http://localhost:3000/api/images/fileName=santamonica&width=200&height=200](http://localhost:3000/api/images/fileName=santamonica&width=200&height=200)

- You can use your own images or use the ones provided in this repo
  - encenadaport
  - fjord
  - icelandwaterfall
  - palmtunnel
  - santamonica

## What I've learned

- Express
- Middleware
- Typescript
- Image processing module sharp
- Jasmine
