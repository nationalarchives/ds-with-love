# With Love online exhibition 

## Launched on 11 Jan 2021

This exhibition is an online interpretation of our temporary onsite exhibition which was held at The National Archives. It was open to visitors from February 2020 but in March 2020, the exhibition closed due to the nationwide lockdown. When some restrictions were lifted, we decided not to re-open the exhibition to ensure the safety of our visitors and later in 2020 we worked to bring the exhibition to our online audience. It was published in January 2020. 


## How it works

* **Core technologies** - It is a simple static site written in HTML, CSS, JavaScript and a small amount of PHP (making use of include files). 

* **Frameworks** - Bootstrap 4.0 (including JQuery 3.2.1 and Popper.js) are used for the responsive grid system, media query breakpoints and some other useful features such as the responsive navbar and accessible modals.

* **Fonts** - Typekit is used to provide two custom fonts specific to the exhibition (Bely and Minion Pro). Google Fonts are used for our brand fonts (Open Sans and Roboto Mono).


## Setup 

The site has been built to be portable so should work out-of-the-box if you’re running a local Apache server. If you’re using a Mac, at the time of writing, the easiest way is to:

1. Download and install MAMP (free),
2. Download and extract the files from this repository into Applications > MAMP > htdocs,
3. Open the MAMP application and select ‘Start servers’,
4. Open your web browser and in the address bar type ‘localhost:8888’. The site should render without any further configuration


## Working with this repository

* **Main** - this should reflect what is currently live on The National Archives website. Don’t do any development directly onto this branch.
* **Develop** - this should be the collective branch that any new features are created from and merged to. Be sure to pull this branch before merging any new feature branches. Ideally pull requests should always be used to double-check work. 
* **Features** - all new development should be done using feature branches to keep any changes contained and separate. 


## Workarounds

In order to keep the site simple and portable, 3 include files have been duplicated to preserve the relative linking and to avoid any site root links which provide difficulties when deploying the site to our live environment. 

You will find two instances of *head.php*, *header.php* and *footer.php* in the folder ‘*includes*’ and ‘*includes > root-level*’. The only differences are that links to some of the CSS, Javascript, images and <a> tags are prepended with a ‘*..*’ in the href attribute so the relative link paths don’t break. Although the duplication isn’t ideal, it keeps things simple given that the site is only 2 levels. You will need to remember that if you make a change to one of these 3 PHP include files, it will need to be replicated its doppelganger. 


## Deployment

Although the relative linking makes the site almost 100% portable between local and live environments, we found when deploying to live that the links to the background video and audio files which are written into the HTML using the file ‘*js > script.js*’ need to be absolute links. This is something you need to remember when this is being deployed to live. 


## Analytics

There is some custom tracking for Google Analytics so we can monitor how useful some of our audio content is for visitors. The implementation of this can be found in the [Google Tag Manager repository](https://github.com/nationalarchives/tna-google-tag-manager-scripts). 
