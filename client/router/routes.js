FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render('stardardLayout', {header: "header", content: "notFound", footer: "footer"});
  }
};

FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render("stardardLayout", {header: "header", content: "content", footer: "footer"});
  }
});