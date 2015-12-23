Meteor.startup(function () {
  return Inject.rawModHtml('addUnresolved', function (html) {
    console.log("Injecting polymer attributes to <body>...");
    return html = html.replace('<body>', '<body unresolved class="fullbleed layout vertical">');
  });
});