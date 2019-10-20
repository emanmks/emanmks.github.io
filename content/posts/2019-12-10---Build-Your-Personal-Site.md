---
title: Build A Personal Blog Using Gatsby
date: "2019-10-12T20:40:32.169Z"
template: "post"
draft: false
slug: "/posts/build-personal-blog-using-gatsby"
category: "Blog"
tags:
  - "Personal"
  - "Blog"
  - "Gatsby"
description: "Start sharing your thoughts and knowledge by writing them off and share them to the world"
# socialImage: "/media/image1.jpg"
---

Running a personal blog is my dream since many years ago. I have tried many ways but mental blockers like procrastination and overthinking have been stopped me many times as well.
In this October 2019, I decided to make this dream happen and Gatsby with Lumen Starter comes to the rescue.

Gatsby is a popular framework to build website and apps. You can maintain information for your website in a:

- CMS content, like Wordpress, Drupal, etc
- Data, like APis, Database, YAML, JSON,or even flat file like CSV.
- Markdown

The third one is my favorite. So the next step is to find a blog starter inside gatsby ecosystem that supports this markdown format to maintain the blog contents.

After doing some internet research and try some starter on my local, [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) starter is my choice.
I love the layout and the style and as it is gatsby based I don't have to think a lot about development and shipment.

## Get Started

I started the blog project by running this command:

```bash
gatsby new blog https://github.com/alxshelepenok/gatsby-starter-lumen
```

Oops, what about that `gatsby` command? Alright, that requires [nodejs](https://nodejs.org/en/download/) installed in your laptop:

```bash
// use this command to install gatsby CLI
// you'll need a npm available in your environment
npm install -g gatsby-cli
```

The command above will install gatsby CLI globally.

OK, after executing the first command, you will have a new directory inside your current directory named `blog`. If you prefer a different name you can simply replace `blog ` with your preferred name:

```bash
// replace sitename with your preferred name
gatsby new sitename https://github.com/alxshelepenok/gatsby-starter-lumen
``` 

## Run your blog for the firs time

It is easy! Run the command below:

```bash
cd sitename
gatsby develop
```

Gatsby will start a hot-reloading development environment accessible by default at http://localhost:8000
(Take a note that you have to make sure that port 8000 is not being used by other service)

Don't forget to open your browser and see the default page by lumen starter.

## The structure of your blog

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils
```

Don't worry, basically, the directories you are going to touch are:

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
```

- `media` is a directory where you place your blog assets (mostly a pictures and downloadable files)
- `posts` is a directory where you place your blog posts in a markdown file (*.md)
- `pages` is a directory contains your `about.md` and `contacts.md` files. Seems familiar?

The structure of `about.md` and `contacts.md` file is simple and written using markdown format.

```
title: "Who am I?" // This will be the title of your about page
template: "page"
socialImage: "/media/aboutme.jpg"
---

The story about you or contact information started here in a markdown format
```

For blog posts files there will be a more page params to be filled, still simple but you need to follow some rules like:

- File name must follow this format: `yyyy-dd-mm---The-title-is-here.md`
- One post one `md` file
- Use `yyyy-dd-mm` date format in the filename and `yyyy-mm-ddTH:i:s` inside the file

Use the template below for each post you want publish:
```
title: Build A Personal Blog Using Gatsby
date: "2019-10-12T20:40:32.169Z"
template: "post"
draft: false // true for draft status
slug: "/posts/build-personal-blog-using-gatsby"
category: "Blog"
tags:
  - "Personal"
  - "Blog"
  - "Gatsby"
description: "Start sharing your thoughts and knowledge by writing them off and share them to the world"
# socialImage: "/media/image1.jpg" // relative from the base path: static/

Your post started here in markdown format
```

## Using docker

Using docker is even better and cleaner, because you will have an isolated environment. You can simply do these steps:

```bash
git clone git@github.com:emanmks/emanmks.github.io.git

cd sitename
docker-compose -f docker-compose.development.yml up -d
```

And wait until the container is up and running. You will have a container running with `gatsby` installed globally and already run gatsby development environment.

**Notes**: I made a bit modification in the Dockerfile and docker-compose file so you don't have to deal with gatsby installation and run the gatsby hot reloading.

## Deploy the blog

The deployment can be delegated Netlify or host it on github page. If you want to build the site manually you can run:
```bash
npm run build
```
