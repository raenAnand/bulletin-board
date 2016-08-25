### Leapfrog Bulletin Board

A channel through which Leapfrog updates it's employees with its on-going activities related to projects, various events, individuals and technologies.


### Features

- Embed Google slide
- Queue YouTube videos
- Embed websites


### Requirements

- Python
- pip


### Installation

```bash
$ cd LF-Bulletin-board
$ python3 -m venv venv
$ source venv/
$ source venv/bin/activate
$ pip install -r requirements.txt
$ python3 manage.py makemigrations
$ python3 manage.py migrate
```


### Usage

```bash
$ python3 manage.py runserver
```


#### How to embed Google Slide

- Create slide using Google Slide
- Goto File -> Publish to the web
- Goto Embed tab
- Choose _Start slideshow as soon as the player loads_ and _Restart the slideshow after the last slide_
- Click on publish, HTML embed appears
- Just copy src of the <iframe> tag (Eg. https://docs.google.com/presentation/d/1ETZi4bNQov9M5UEEnJEJgj3s40vZ_ORsddaeisUUcamE5kW0/embed?start=true&loop=true&delayms=3000)
- Login to Leapfrog bulletin board
- Click on Kiosks
- Click on ADD KIOSK
- Paste the URL and click on Save


#### How to embed Website

- Login to Leapfrog bulletin board
- Click on Kiosks
- Click on ADD KIOSK
- Type URL and click on Save


#### How to embed YouTube videos

- Login to Leapfrog bulletin board
- Click on YouTubes
- Click on ADD YOUTUBE
- Paste YouTube video URL
- Click on save
Repeat the steps to add more videos in play list