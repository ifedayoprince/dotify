import {
	App,
	Link,
	NavLeft,
	NavRight,
	NavTitle,
	NavTitleLarge,
	Navbar, Page, Searchbar,
	View
} from 'framework7-react';

import AppRoutes from '../AppRoutes';

let appConfig = {
	name: "Dotify",
	colors: {
		primary: "#00ff0f"
	},
	routes: AppRoutes,
	dark: true,
	theme:"md",
	popup: { closeOnEscape: true },
	sheet: { closeOnEscape: true },
	popover: { closeOnEscape: true },
	actions: { closeOnEscape: true }
}


const AppMain = () => {

	return (
		<App {...appConfig}>
			<View main>
				<Page>
					<Navbar large transparent sliding={false} >

						<NavTitle sliding>Books</NavTitle>
						<NavRight>
													<Searchbar
														className="books-searchbar"
														searchContainer=".books"
														searchIn=".item-text,.item-title"
														
													/>
							<Link
								iconMaterial="numbers"
							/>
														<Link
								iconMaterial="numbers"
							/>
						</NavRight>
						<NavTitleLarge>Books</NavTitleLarge>
						
					</Navbar>
					
				</Page>
			</View>
		</App >
	)
}

export default AppMain
