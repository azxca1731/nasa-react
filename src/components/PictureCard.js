import React,{Component} from 'react';
import '../style/card.css';

class PictureCard extends Component{

	render(){
		return(
			<div>
				<div className="card text-center">
					<img className="card-img-top" src={this.props.url} alt="Text is not Ready" />
					<h5 className="card-title">{this.props.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{this.props.date_created}</h6>
					<div className="card-body">
						<p className="card-text">{this.props.desc}</p>
					</div>
				</div>
			</div>
		);	
	}
}
export default PictureCard;