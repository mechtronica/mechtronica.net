default: serve

# Install dependencies
setup:
    npm i @11ty/eleventy markdown-it markdown-it-attrs

# Regenerate and serve the site
serve: clean
    npx @11ty/eleventy --serve

# Remove old static site content
clean: 
    rm -rf _site