"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var trip_overview_1 = require("./trip-overview");
var Trip = /** @class */ (function (_super) {
    __extends(Trip, _super);
    function Trip(id, name, location, startDate, endDate, activities) {
        var _this = _super.call(this, id, name, location, startDate, endDate) || this;
        _this.activities = activities;
        return _this;
    }
    return Trip;
}(trip_overview_1.TripOverview));
exports.Trip = Trip;
