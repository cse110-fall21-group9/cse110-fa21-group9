# ADR - 009: Deployment

* Status: Accepted, proceeding with development as planned
* Date: 11/13/2021

## Context and Problem Statement

It is known that we will be creating a single-page app that stores all of its data locally. What is the best deployment method for this application form?

## Decision Drivers 

* We have to use web technologies.
* We are likely wanting to store files on the disk.
* If the application can be windowed, that is a plus.
* We want to avoid as much extra time spent as possible given our tight schedule.

## Considered Options

1. Just use the index.html file as the "executable"
2. Host it as a website anyways, and make the user upload their files to view.
3. Use Electron.js

## Decision Outcome

Chosen option: use Electron.js, and keep the other two as possible backups if Electron fails.  
Electron.js will allow a SPA to run inside a native window as a desktop app through an executable file. By packaging a full copy of Chromium with it, we can just write all of our DOM manipulation scripts and web components as usual, and hook everything up to the Electron.js & Node.js libraries wither gradually or all at once towards the end. Moreover, Electron.js provides us with devleoper privileges that in-browser apps do not, such as filesystem calls.  
Finally, it is possible for us to quickly convert our app to one of the other options (particularly hosting it as a website) if Electron fails at the last moment (which, based on my research, seems rather unlikely).


### Positive Consequences 

* We can use Web tech to write a desktop app!
* Storing things locally will be possible, same goes for file I/O to disk.
* Improves the uniqueness of our app
* We can still use an SPA and web components

### Negative Consequences

* This will take extra time and introduce a possible failure point. 
* The researcher into Electron (i.e. me [Zane]) will have to give our frontend engineers a crash course in using its most relevant APIs to keep our bus factor as high as possible, despite only having a cursory knowledge of it.
* We will have to be vigilant and avoid putting things off until the last minute.