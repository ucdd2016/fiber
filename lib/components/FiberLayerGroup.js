import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path } from 'react-leaflet'
import _ from 'lodash'

import FiberGeometry from './FiberGeometry'
import FiberCenter from './FiberCenter'

export default class FiberLayerGroup extends Component {

  render(){

    // Q: How does each property get provided?
    const { map, fibers, selectedPosition, activities } = this.props

    const centerElements = _.map(activities, (activity,i) => {

      console.log(activity)
      const center = {
        latitude: activity.l[0],
        longitude: activity.l[1]
      }
      return <FiberCenter center={center} key={i} map={map}/>
    })

    return <LayerGroup map={map}>

      { centerElements }
    </LayerGroup>
  }

}
