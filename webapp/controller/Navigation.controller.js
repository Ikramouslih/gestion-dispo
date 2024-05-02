sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/Device"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("gestiondispo.controller.Navigation", {
      onInit: function () {},
      onAvatarPressed: function () {
        console.log("Avatar pressed!");
      },
      onLogoPressed: function () {
        MessageToast.show("Logo pressed!");
      },
      onCollapseExpandPress() {
        const oSideNavigation = this.byId("sideNavigation"),
            bExpanded = oSideNavigation.getExpanded();

        oSideNavigation.setExpanded(!bExpanded);
    },

    onHideShowWalkedPress() {
        const oNavListItem = this.byId("walked");
        oNavListItem.setVisible(!oNavListItem.getVisible());
    }
    });
  }
);
