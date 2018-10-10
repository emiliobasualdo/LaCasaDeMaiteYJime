# LaCasaDeMaiteYJime

## What is this repository for?

It consists of a web version of a smart-house manager.

## How do I get set up? ###

### Website ###

To start using our webiste first you have to download and configure the API the page uses.
To do that follow this steps:

1. Download [Node.js](https://nodejs.org/en/) (version 8.11.1 or higher)
2. Download the repo on a temporal directory (we'll call it TEMP_DIR for the sake of simplicity)
3. Create a new directory (we'll call it DIR).  Once you are finished, the API will be installed in this directory.
4. Copy __package.json__ from TEMP_DIR to DIR 
5. Using Windows Powershell or the command line (according to your OS) go to DIR, write __npm install__ and press enter.
6. Copy the subdirectories __actions__, __config__, __deb__, __initializers__, __locales__, __node_modules__ and __public__ from TEMP_DIR to DIR. **Accept any prompt that asks you to overwrite an existing file**.
7) Using Windows Powershell or the command line, go to DIR and:
    - If you are on Windows, write: .\node_modules\.bin\actionhero link --name=ah-swagger-plugin
	- If you are on Linux/OSX, write: ./node_modules/.bin/actionhero link --name=ah-swagger-plugin
	
Once you are done installing the API you are ready to go!. Go to the __public__ directory in DIR and run index.html on the browser of your choice.

The connection with the API is made in __javascript/api.js__, you can change it by changing the baseUrl() method.

## Who do I talk to? ###
Contributors are:

* Maite Herrán
* Jimena Lozano
* Fermín Gómez
* Emilio Basualdo
