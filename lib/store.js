// create a store with initial values
let store = {
  //center: [40.01, -105.25], // Boulder
  center: [39.194, -106.83], // Aspen
  selectedPosition: null,
  fibers: []
}

// make it a global variable (easy for debugging in the developer's console)
global.store = store

// export it
export default store
