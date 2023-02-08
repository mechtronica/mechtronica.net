# Regenerate and serve the site
serve: clean
    npx @11ty/eleventy --serve

# Remove old static site content
clean: 
    rm -rf _site