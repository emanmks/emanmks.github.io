<h1 align="center">My Personal Web👋</h1>
<p>
<img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
<img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
</p>

My personal website built with [Hexo]().

## Docker Image (pre development)
(MUST) Do this for the first time:
```shell script
make npx
```

## Run the server locally

```shell script
make server
```
Then, open http://localhost:4000 in your browser.


## Add new page
```shell script
make run CLI="hexo new page 'My Page Title'"
```

## Add new post
```shell script
make run CLI="hexo new post 'My new Post Title'"
```

## Generate the static files
```shell script
make generate
```
