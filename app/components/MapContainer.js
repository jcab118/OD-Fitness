export default class MapContainer extends Component{

	contructor(props) {
		this.state = {
			markers:{
				position: {
				lat:40.778794,
				lng:-73.98206829999998,	
				}
			}
		}
	}
}

render() {
	return (
		<div style = {{height: "100%"}}>
		  <google
			containerElement={
				<div style = {{height: "100%"}}/>
			}
			mapElement={
				<div style = {{height: "100%"}}/>
			}
			markers={this.state.markers}
		   />
		   </div>
		)
	}