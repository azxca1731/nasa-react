import React, { Component } from 'react';
import PictureCard from '../components/PictureCard';
import { connect } from 'react-redux';
class PictureList extends Component{
	
	constructor(props) {
		super(props);
	
		this.state = {
        	items:[]
    	};
	}
	
	componentDidMount() {
    	window.addEventListener('scroll', this.onScroll, false);
  	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}

	
	componentDidUpdate(prevProps) {
		if(prevProps.maps.length===0){
			this.handlePicture();
		}else if(prevProps.maps!==this.props.maps){
			this.setState({items:[]});
			this.handlePicture();
		}
	}
	
	onScroll = () => {
		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
			this.handlePicture();
		}
  	}

	handlePicture = () => {
		//item에 더 추가한다
		const {maps}=this.props;
		const {items}=this.state;
		if(maps.length===0){
			return;
		}else if(items.length+10>=maps[0].collection.items.length){
			this.setState({items:maps[0].collection.items});
		}
		else{
			this.setState((prevState)=>({
				items:prevState.items.concat(maps[0].collection.items.slice(prevState.items.length,prevState.items.length+10))
			}));
		}
	}
	
	handleCreateList = (items) => {
		return items.map((map,i) =>(
			<PictureCard
				url={map.links[0].href}
				data_created={map.data[0].data_created} 
				title={map.data[0].title} 
				desc={map.data[0].description} 
				key={i}
			/>
		));
	};
	
	render(){
		const {handleCreateList} =this;
		const {items} = this.state;
		return(
			<div>
				<div className="card-group">
					{handleCreateList(items)}
				</div>
			</div>
		);	
	};
}

function mapStateToProps({ maps }) {
    return { maps };
}

export default connect(mapStateToProps)(PictureList);