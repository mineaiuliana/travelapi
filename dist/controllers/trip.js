"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TripController = /** @class */ (function () {
    function TripController() {
        var _this = this;
        this.Trips = [];
        this.create = function (req, res, next) {
            var trip = req.body;
            var previousId = _this.Trips.length ? Math.max.apply(Math, _this.Trips.map(function (trip) { return trip.id; })) : 0;
            trip.id = previousId + 1;
            _this.Trips.push(trip);
            res.status(201).json({ message: 'Trip created', trip: trip });
        };
        this.get = function (req, res, next) {
            res.json(_this.Trips);
        };
        this.getById = function (req, res, next) {
            var id = +req.params.id;
            var trip = _this.Trips.find(function (trip) { return trip.id === id; });
            res.json(trip);
        };
        this.update = function (req, res, next) {
            var id = +req.params.id;
            var updatedTrip = req.body;
            var tripToBeUpdatedIndex = _this.Trips.findIndex(function (t) { return t.id === id; });
            if (tripToBeUpdatedIndex < 0) {
                throw new Error('Could not find trip');
            }
            _this.Trips[tripToBeUpdatedIndex] = updatedTrip;
            res.status(200).json({ message: 'Trip updated', trip: updatedTrip });
        };
        this.delete = function (req, res, next) {
            var id = +req.params.id;
            var tripIndex = _this.Trips.findIndex(function (t) { return t.id === id; });
            if (tripIndex < 0) {
                throw new Error('Could not find trip');
            }
            _this.Trips.splice(tripIndex, 1);
            res.status(200).json({ message: 'Trip deleted' });
        };
    }
    return TripController;
}());
exports.TripController = TripController;
