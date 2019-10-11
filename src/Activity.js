const UserRepository = require('../src/UserRepository');

class Activity {
  constructor(activity) {
    this.userId = activity.userID;
    this.date = activity.date;
    this.steps = activity.numSteps;
    this.minutesActive = activity.minutesActive;
    this.flightsOfStairs = activity.flightsOfStairs;
    this.milesWalked = 0;
    this.minutesActiveRecord = [];
    this.stepsRecord = [];
    this.stairsRecord = [];
    this.reachedStepGoal = false;
    this.accomplishedDays = []; //will hold dates where they exceeded step goal
    this.topClimbingDay = '';
  }
  walk() {

  }
  climb() {

  }
  calculateMiles(userRepository) {
    let walkingUser = userRepository.users.find(user => {
      return user.id === this.userId;
    });
    return Math.round(this.steps * walkingUser.strideLength / 5280);
  }
  findAccomplishedDays() {

  }
  updateTopClimbingDay() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
