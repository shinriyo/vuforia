# vuforia
### a Sails application

sails generate controller home index
sails generate model Dictionary
sails generate controller dictionary

# show
http://nantokaworks.com/p1101/

# modified
config/adapters.js

npm install sails-mongo@0.9

# mongo client
switched to db vuforia
db.addUser("okazaki", "vuforia")
db.dictionary.save({english:"dog",japanese:"犬"})
db.dictionary.save({english:"cat",japanese:"猫"})

# why can't?
http://localhost:1337/dictionary/create?english_key=dog&japanese=犬

# controller
http://sailsjs.org/#!documentation/routes

# access
http://localhost:1337/dictionary/getJapanese?english=dog
