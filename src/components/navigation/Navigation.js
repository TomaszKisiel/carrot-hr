import React from 'react'
import { Navbar, Button } from 'react-bootstrap'

const Navigation = ( props ) => {
	return (<>
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Button className="mr-2 mr-lg-4 mt-2 mt-lg-0" variant="outline-warning" onClick={ () => { } } ><b> Ustawienia </b></Button>
				<Button className="mr-2 mt-2 mt-lg-0" variant="outline-dark" onClick={ () => { } }><b> Zapisz </b></Button>
				<Button className="mr-2 mr-lg-4 mt-2 mt-lg-0" variant="outline-dark" type="input" onClick={ () => { } }><b> Wczytaj </b></Button>
				<Button className="mr-2 mt-2 mt-lg-0" variant="outline-success" onClick={ () => { } }><b> Generuj </b></Button>
				<Button className="mr-2 mr-lg-4 mt-2 mt-lg-0" variant="outline-danger" onClick={ () => { } }><b> Wyczyść </b></Button>
				<Button className="mr-2 mt-2 mt-lg-0 text-nowrap" variant="outline-info" onClick={ () => { } }><b> Pokaż absencje</b></Button>
				<Button className="mr-2 mr-lg-4 mt-2 mt-lg-0 text-nowrap" variant="outline-info" onClick={ () => { } }><b> Pokaż czas</b></Button>
			</Navbar.Collapse>
		</Navbar>
	</>)
}

export default Navigation
