import store from './store'
import refresh from './refresh'
import _ from 'lodash'
import geolib from 'geolib'
import $ from 'jquery'
import { NEARBY_METERS } from './constants'

import firebase from 'firebase'

//
// Action functions
//

const fb = new Firebase('naturenet-testing.firebaseio.com')

// Action to load fiber data asynchrnously
export function loadDataAsync(){

  fb.child('activities').once('value')
    .then(snapshot=>{
      console.log(snapshot.numChildren())

      store.numActivities = snapshot.numChildren()
      refresh()
  })

  fb.child('observations').once('value')
      .then(snapshot=>{
    console.log(snapshot.numChildren())

    store.numObservations = snapshot.numChildren()
    refresh()
  })

  fb.child('geo/activities').once('value')
      .then(snapshot=>{
    // console.log(snapshot.numChildren())
    store.activities = snapshot.val()
    refresh()
  })


  // $.ajax('/data/boulder.json').done(function(json) {
  //   store.geometries = json
  //
  //   let fibers = {}
  //
  //   store.fibers = _.map(json, (d) => {
  //
  //
  //     // TODO: implement the correct logic to compute the center of the geometry
  //     // hint: use geolib.getCenter()
  //
  //     // const center = {
  //     //   latitude: d.coordinates[0][1],
  //     //   longitude: d.coordinates[0][0]
  //     // }
  //
  //     let center = geolib.getCenter(d.coordinates)
  //     center.latitude += 0.01
  //
  //     return {
  //       geometry: d,
  //       center: center
  //     }
  //   })
  //
  //   refresh()
  // })
}

// Action to set a position selected by the user
export function setSelectedPosition(latlng) {
  store.selectedPosition = latlng
  console.log('hi there')

  _.forEach(store.fibers, forEachFiberSetIsSelected)

  _.forEach(store.fibers, forEachFiberSetCost)

  refresh()
}

//
// private helper function
//

// helper to set each fiber's 'isSelected' flag based on whether this fiber is
// nearby with respect to the position selected by the user
function forEachFiberSetIsSelected(fiber){

   // TODO: implement the logic to set fiber.isSelected if the fiber's geometry center
   // is within a certain distance from the selected position 'NEARBY_METERS'
   // hint: use geolib.getDistance()

  fiber.isSelected = false
}

// helper to set the cost of connecting this fiber to the selected position
function forEachFiberSetCost(fiber){

  // TODO: implement the logic to calcualte the cost of connecting from the selected
  // position to this fiber, and the distance between them.

  fiber.distance = Math.round((2000 * Math.random()))
  fiber.cost = Math.round((1000 * Math.random()))
}
