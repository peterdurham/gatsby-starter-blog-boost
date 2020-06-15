# Gatsby Starter Blog Boost

Blog Starter for a Gatsby project, built using Netlify CMS.

[Example Hosted App](https://cocky-williams-9d49bd.netlify.app/)

Features:

- Templates for **Articles**, **Topics**, **Tags**, and **Archive Pages**
- Utilizes **Gatsby Image** and **GraphQL**
- **Netlify CMS** configured to publish
- **Mobile** and **Desktop** Styling
- **Email Subscribe** Module ready to connect
- **SEO Component** for Serverside Rendering
- **Topics** stored in JSON format
- **React Icons** for icon set

## Setup Instructions

First either **fork** this project or **clone** and deploy to github

```bash
git clone https://github.com/peterdurham/gatsby-starter-blog-boost.git
```

Login to Netlify and choose `New site from Git` to deploy.

## Setup Authentication

There are 2 main options to setup auth for your Netlify CMS blog. Both options allow for multiple authors but Github also allows for _Open Authoring_ (lets other submit git pull requests via the CMS).
<br />
Netlify CMS Settings are in `/static/admin/config.yml`

### Git Gateway Auth

Git gateway is setup by default. To use this feature, goto your Netlify settings for the recently deployed site. In the Identity section choose `Enable Identity` and register your login by visiting `/admin` of your hosted app. Also make sure to set your registration preferences in the settings so it is not open publicly.

### Github Auth

This option allows you to login to the CMS with your Github login. Find more details about this setup in the Netlify CMS docs [here](https://www.netlifycms.org/docs/github-backend/). The feature _Open Authoring_ is only available to Github authentication and provides extra workflow options.

## Making Adjustments

All the styles are in `.styles.css` and the code is mostly self-contained. Feel free to use this starter to make your own blog with whatever changes are necessary. I tried to keep the blog simple enough while also utilizing all of the best features Gatsby has to offer.

## Common Issues

Making changes in the CMS will add new image and markdown files to your repo. Make sure to pull your changes locally when you add these files.

```bash
git pull origin master
```

Also, if you run into `childImageSharp` errors. It can often occur when Gatsby isn't accurately keeping track of images. Delete your _cache_ and _public_ folders before reloading the project. In this project the images live in the `/static/images/`. Make sure whatever images you're trying to load are in your project and spelled correctly.
