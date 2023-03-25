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
    rm -rf /tmp/mechtronica
    mv -f _site /tmp/mechtronica
    git checkout published_site
    for f in `ls`
    do
        rm -rf $f
    done
    for f in `ls /tmp/mechtronica`
    do
        mv /tmp/mechtronica/$f .
    done
    git add -u
    git commit -m "publish"

# Remove old static site content
clean: 
    rm -rf _sites