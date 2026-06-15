### 1.
Add

```
repository: yourusername/your-repo-name
```


to _config.yml

### 2.

Create a Gemfile in the root directory with content

```
source "https://rubygems.org"

gem 'github-pages', group: :jekyll_plugins

```

### 3.

Execute
```
docker run --rm -it -v "%cd%":/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve --watch
```

and open `http://localhost:4000/`
