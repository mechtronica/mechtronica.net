default: serve

# Install dependencies
setup:
    npm i @11ty/eleventy markdown-it markdown-it-attrs

# Regenerate and serve the site
serve: clean
    npx @11ty/eleventy --serve

# Publish the website from the current state
publish:
    #!/usr/bin/env bash
    set -euxo pipefail
    mv -f _site /tmp/mechtronica_site
    git checkout published_site
    for f in `ls`
    do
        rm -rf $f
    done
    mv /tmp/mechtronica_site/* .
    git add *
    git commit -m "publish"

# Remove old static site content
clean: 
    rm -rf _site