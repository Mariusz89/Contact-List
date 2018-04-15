import React, {Component} from 'react';
<<<<<<< fa6055315d7995eb663be54c3d43bbfb71f583bb
import MoviesList from './components/MoviesList';
=======
import Contacts from './components/Contacts';
>>>>>>> delete_contactForm
import data from './data/data'
import './style.css';

class App extends Component {
	render() {		
		return (			
			<div>
<<<<<<< fa6055315d7995eb663be54c3d43bbfb71f583bb
				<div><MoviesList data={data}/></div>
=======
				<h1>Contact List</h1>
				<div className= {'input-group'}>
					<Contacts data={data}/>
				</div>
>>>>>>> delete_contactForm
			</div>		
		)
	}
}

export default App;