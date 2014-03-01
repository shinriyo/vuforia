/**
 * DictionaryController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */

  //http://stackoverflow.com/questions/19293657/how-do-i-use-search-sails-js-models-using-rest-without-shortcuts-blueprint
  getJapanese: function (req, res) {
    var english = req.param('english');
    Dictionary.findByEnglish(english).done(function (err, japanese) {
    if (err) return res.send(err,500);
      res.json({ japanese: japanese });
    });
  }
  

};
