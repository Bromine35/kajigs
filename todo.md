according to applefreak:

- ~~parse links and actually link them - viewer~~ new md parser does this
- search bar to search for names, because "dont tell me to use CTRL+F you fuck" also "add a square or something behind the [name] with some transparency" - main page
- make name text bigger - main page
- credit the skid who made the kajig - viewer/data, need to scrape all owners now

also:

- ~~replace markdown parser (markdown-js, probably with showdown or markedjs) because 1. its unmaintained, old (6 YEARS?? of not maintained) 2. "doesn't handle newlines properly" (??)~~ replaced with marked (I still don't know what doesn't handle newlines properly means)
- add back button, better navigation
- ~~fix issue with site breaking when you use the site by going to index.html (site tries to grab kajigs archive at `index.htmldata/`)~~
- ~~better favicon because its so damn small~~
- ~~fix whatever issue some anonymous user had (redirects to # instead of the viewer)~~
- parse discord ID format and change to link to user
- link the kajig to TN channel
- add creation date (great more "manual computer labor")
- (automatically) format the first message posts archive into something that can actually be modified semi easily
- ~~automatically create a blob with the specific instructions, name of the creator, and title of the kajig in json format for ppl to download as raw. "localkajig"~~ done; this was dumb, just made it txt format and parsed html to formatted txt instead

easier fuckin said than done

if mods wants the kajigs locked down to TN only:

- instead of adding user authentication, do a cryptosmite legacy (encrypt the archives and require a decryption password that will be shared within TN)
