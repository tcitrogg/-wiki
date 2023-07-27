---
title: Downloading a website with wget
description: How to download a website to work offline | locally on a PC using wget.
author: bnierimi~linuxjournal
thumbnail: ""
date: 'Tue 11 Jul 2023 01∶16∶43 AM WAT'
published: true
contact:
  - https://twitter.com/bnierimi
  - https://instagram.com/bnierimi
  - https://threads.com/bnierimi
categories:
  - wget
  - web
---

```bash
wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --restrict-file-names=windows \
https://www.material-tailwind.com/docs/html/installation
```

This command downloads the Web site www.website.org/tutorials/html/.

The options are:

    --recursive: download the entire Web site.

    --domains website.org: don't follow links outside website.org.

    --no-parent: don't follow links outside the directory tutorials/html/.

    --page-requisites: get all the elements that compose the page (images, CSS and so on).

    --html-extension: save files with the .html extension.

    --convert-links: convert links so that they work locally, off-line.

    --restrict-file-names=windows: modify filenames so that they will work in Windows as well.

    --no-clobber: don't overwrite any existing files (used in case the download is interrupted and resumed).


https://www.linuxjournal.com/content/downloading-entire-web-site-wget

- Contact:
    - https://github.com/bnierimi
    - https://twitter.com/bnierimi
    - https://t-wiki.vercel.app/bnierimi