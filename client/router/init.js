var polymerReady;

polymerReady = new ReactiveVar(false);

FlowRouter.wait();

$(window).on("WebComponentsReady", function () {
  console.log("WebComponents are ready!");
  return polymerReady.set(true);
});

Meteor.startup(function () {
  return Tracker.autorun(function () {
    if (polymerReady.get()) {
//      console.log("Initializing Router!");
      return FlowRouter.initialize();
    }
  });
});