import { RequestHandler } from 'express';
import { Trip } from '../models/trip';

export class TripController {
  private Trips: Trip[] = [];

  constructor() {
    this.initializeTrips();
  }

  create: RequestHandler = (req, res, next) => {
    const trip = (req.body as Trip);

    const previousId = this.Trips.length ? Math.max.apply(Math, this.Trips.map((trip) => trip.id)) : 0;
    trip.id = previousId + 1;
    this.Trips.push(trip);

    res.status(201).json({ message: 'Trip created', trip: trip });
  }

  get: RequestHandler = (req, res, next) => {
    res.json(this.Trips);
  }

  getById: RequestHandler = (req, res, next) => {
    const id = +req.params.id;

    const trip = this.Trips.find((trip) => trip.id === id);

    res.json(trip);
  }

  update: RequestHandler = (req, res, next) => {
    const id = +req.params.id;
    const updatedTrip = (req.body as Trip);

    var tripToBeUpdatedIndex = this.Trips.findIndex(t => t.id === id);
    if (tripToBeUpdatedIndex < 0) {
      throw new Error('Could not find trip');
    }
    this.Trips[tripToBeUpdatedIndex] = updatedTrip;

    res.status(200).json({ message: 'Trip updated', trip: updatedTrip });
  }

  delete: RequestHandler = (req, res, next) => {
    const id = +req.params.id;

    var tripIndex = this.Trips.findIndex(t => t.id === id);
    if (tripIndex < 0) {
      throw new Error('Could not find trip');
    }
    this.Trips.splice(tripIndex, 1);

    res.status(200).json({ message: 'Trip deleted' });
  }

  private initializeTrips() {
    this.Trips = [{
      id: 1,
      name: 'Trip to Paris',
      location: 'Paris',
      startDate: new Date(2018, 5, 10),
      endDate: new Date(2018, 5, 15),
      activities: []
    },
    {
      id: 2,
      name: 'Trip to Berlin',
      location: 'Berlin',
      startDate: new Date(2020, 1, 23),
      endDate: new Date(2020, 1, 30),
      activities: []
    }]
  }
}
