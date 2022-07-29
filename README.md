# Image Processing API

This api process resize the image upon user's desired using TypeScript and Express.

## Project Description

Accessing the provided URL at **How to Install and Run the Project - 6** resizes an image and save it to ./images/thumbnails on first access. The api has caching so that repeated requests to the endpoint use pre-stored images rather than regenerating a new image each time.

Tests for endpoint and image processing using Jasmine.

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

3. Install natours with npm

```bash
  npm install
```

4. Start project with npm (default port: 3000)

```bash
  npm run start
```

5. Save image you want to resize at ./images/full directory

6. Access below endpoint with your filename, width and height.

http://localhost:[PORT]/api/images/fileName=[FILE_NAME]&width=[WIDTH_PIXEL]&height=[HEIGHT_PIXEL]

- Example full url: santamonica, 200X200

  [http://localhost:3000/api/images/fileName=santamonica&width=200&height=200](http://localhost:3000/api/images/fileName=santamonica&width=200&height=200)

- You can use your own images or use the ones provided in this repo
  - encenadaport
  - fjord
  - icelandwaterfall
  - palmtunnel
  - santamonica

### What I've learned

- Express
- Middleware
- Typescript
- Image processing module sharp
- Jasmine
