import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Placeholder} from 'react-bootstrap';
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
	
	<Router>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
		<Suspense fallback={
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
				  <Placeholder as={Card.Title} animation="glow">
					<Placeholder xs={6} />
				  </Placeholder>
				  <Placeholder as={Card.Text} animation="glow">
					<Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
					<Placeholder xs={6} /> <Placeholder xs={8} />
				  </Placeholder>
				  <Placeholder.Button variant="primary" xs={6} />
				</Card.Body>
			  </Card>
		}>
		  <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		  </Routes>
		</Suspense>
	</Router>
);

export default App;
