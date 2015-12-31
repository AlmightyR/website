Session.setDefault("navSelection", 0);

Template.defaultHeader.helpers({
  navSelection: function () {
    return Session.get("navSelection");
  },
  
  navItem: function () {
    return [
      {
        name: "home",
        path: "/",
        text: "Home",
        icon: "home",
        header: "header",
        content: "content",
        footer: "footer"
      },
      {
        name: "about",
        path: "/about",
        text: "About",
        icon: "face",
        header: "header",
        content: "about",
        footer: "footer"
      },
      {
        name: "contact",
        path: "/contact",
        text: "Contact",
        icon: "mail",
        header: "header",
        content: "contact",
        footer: "footer"
      }
    ];
  }
});