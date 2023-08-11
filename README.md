# radiantaihealth.github.io

Built using webflow + web3forms <3 
Tracking by Google Analytics. 
Deployed using vercel

Webflow site: https://radiantai-health-4.webflow.io/

# Hacky Instructions (deploying from webflow to prod)
## Webflow
1. Publish site to webflow domain
2. Grab index.html, style.css and script.js from webflow site. 
3. follow instructions in this tutorial: https://bootcamp.uxdesign.cc/how-to-export-code-from-webflow-for-free-f708ace1a113

## Google Analytics 
1. Paste this google analytics into the page

```js
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-ZYZTR6ZVX6"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-ZYZTR6ZVX6");
    </script>
```

## Web3forms integration:
Replace the dmform-wrapper with this block:
- https://github.com/radiantaihealth/radiantaihealth.github.io/commit/4c863d5afbc74a4783e53b684632a4ac5ecee761

# Vercel deployment
Finally:
1. Move everything to `public` folder

# Todo:
1. add product demo
2. move to web3forms
3. move to framer.ai


