const DroneSimulation = require('./DroneSimulation');

class DroneDeliveryService {
  constructor() {
    this.drones = [];
  }

  addDrone(droneId) {
    const newDrone = new DroneSimulation(droneId);
    this.drones.push(newDrone);
    console.log(`Drone ${droneId} added to the delivery service.`);
  }

  async deliverPackage(droneId, destination) {
    const drone = this.drones.find((d) => d.droneId === droneId);

    if (!drone) {
      console.error(`Drone ${droneId} not found.`);
      return;
    }

    // Simulate drone movement to the destination
    await drone.move(destination);

    // Simulate delivering the package
    drone.deliver();
  }
}

module.exports = DroneDeliveryService;
