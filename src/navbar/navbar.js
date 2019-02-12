import React, {Component} from 'react'
import './navbar.css'

const BChild=(props)=>{
	console.log(props.xyz)
	return(
			<div className="navbar">
					<ul>
						<li>B1</li>
						<li>B2</li>
					</ul>
				</div>
		)
}

const BParent=(props)=>{
			let navbar = {
				width: '100%',
				backgroundColor: 'green',
				height: '80px'
			}

			let leftLi = {
				display: 'inline',
				padding: '20px',
				float: 'left'
			}

			let rightLi = {
				display: 'inline',
				padding: '20px',
				float: 'right'
			}
				if(props.clickHandler===true){
	return(
				<div style={navbar}>
					<ul>
						<li style={leftLi}>A</li>
						<li style={leftLi} onClick={props.showComp}>B</li>
						<li style={leftLi}>C</li>
						<li style={leftLi}>D</li>
					</ul>
					<ul>
						<li style={rightLi}>Z</li>
						<li style={rightLi}>Y</li>
						<li style={rightLi}>X</li>
					</ul>
					<br />
					<br />
					<BChild 
					{...props} xyz="xyz"/>
				</div>
			)
	}
	else{
		return(
				<div style={navbar}>
					<ul>
						<li style={leftLi}>A</li>
						<li style={leftLi} onClick={props.showComp}>B</li>
						<li style={leftLi}>C</li>
						<li style={leftLi}>D</li>
					</ul>
					<ul>
						<li style={rightLi}>Z</li>
						<li style={rightLi}>Y</li>
						<li style={rightLi}>X</li>
					</ul>
				</div>
				)
	}
}

class NavBar extends Component{
	constructor(){
		super()
		this.state={
			clickB: false
		}
		this.childComp = null
	}

	onShowComp=()=>{
		let clickB = this.state.clickB
		clickB = true
		this.setState({
			clickB
		})
		//console.log(this.state.clickB)

		// if(clickB===true){
		// 	this.childComp = <BChild />
		// }

		console.log(this.state.clickB, this.childComp)
		

	}

	render(){
		let clickB = this.state.clickB
		
		let parentandChildDiv = <div className="navbar">
					<BParent 
					showComp={this.onShowComp} 
					clickHandler={clickB}/>
				</div>
		let parentDiv = <div className="navbar">
					<BParent 
					showComp={this.onShowComp} />
				</div>
				let viewDiv = clickB ? parentandChildDiv : parentDiv
		return viewDiv
	}
}

export default NavBar




