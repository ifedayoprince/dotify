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
						<NavLeft>
							<Link
								panelOpen="left"
								iconMaterial="menu"
							/>
						</NavLeft>
						<NavTitle sliding>Books</NavTitle>
						<NavRight>
							<Link
								searchbarEnable=".books-searchbar"
								iconMaterial="search"
							/>
							<Link
								sortableToggle=".sortable"
								iconMaterial="numbers"
							/>
						</NavRight>
						<NavTitleLarge>Books</NavTitleLarge>
						<Searchbar
							className="books-searchbar"
							searchContainer=".books"
							searchIn=".item-text,.item-title"
							expandable
						/>
					</Navbar>
					
				</Page>
			</View>
		</App >
	)
}

export default AppMain
