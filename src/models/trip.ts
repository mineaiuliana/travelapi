import { TripOverview } from './trip-overview';
import { Activity } from './activity';

export class Trip extends TripOverview {
  public activities: Activity[];
  constructor(id: number, name: string, location: string, startDate: Date, endDate: Date, activities: Activity[]) {
    super(id, name, location, startDate, endDate);
    this.activities = activities;
  }
}