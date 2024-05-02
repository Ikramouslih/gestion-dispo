sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/Device","sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"],
	
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
      "use strict";
  
      return Controller.extend("gestiondispo.controller.ConsultantTable", {
        onInit: function () {},
        onFilterPosts: function (oEvent) {
          // build filter array
          var aFilter = [];
          var sQuery = oEvent.getParameter("query");
          if (sQuery) {
            aFilter.push(new Filter("Title", FilterOperator.Contains, sQuery));
          }
    
          // filter binding
          var oTable = this.byId("table");
          var oBinding = oTable.getBinding("items");
          oBinding.filter(aFilter);
        }
    
      });
    }
  );
  