FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render('stardardLayout', {header: "defaultHeader", content: "notFound", footer: "defaultFooter"});
  }
};

//@TODO: Generate these routes automatically.
FlowRouter.route('/', {
  action: function () {
    //@TODO: Function to get index by name (?)
    Session.set("navSelection",0);
    BlazeLayout.render("stardardLayout", {header: "defaultHeader", content: "home", footer: "defaultFooter"});
  }
});

FlowRouter.route('/about', {
  action: function () {
    Session.set("navSelection",1);
    BlazeLayout.render("stardardLayout", {header: "defaultHeader", content: "about", footer: "defaultFooter"});
  }
});

FlowRouter.route('/contact', {
  action: function () {
    Session.set("navSelection",2);
    BlazeLayout.render("stardardLayout", {header: "defaultHeader", content: "contact", footer: "defaultFooter"});
  }
});