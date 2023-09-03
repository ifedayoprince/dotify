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

import LeftPanel from '../components/LeftPanel';
import Boards from '../components/Boards';
import AppRoutes from '../AppRoutes';

let appConfig = {
	name: "Teem",
	colors: {
		primary: "#00ff0f"
	},
	routes: AppRoutes,
	dark: true,
	theme:"ios",
	popup: { closeOnEscape: true },
	sheet: { closeOnEscape: true },
	popover: { closeOnEscape: true },
	actions: { closeOnEscape: true }
}


const AppMain = () => {

	return (
		<App {...appConfig}>
			<LeftPanel />
			<View main>
				<Page>
					<Navbar large transparent sliding={false} >
						<NavLeft>
							<Link
								panelOpen="left"
								iconMaterial="menu"
							/>
						</NavLeft>
						<NavTitle sliding>Boards</NavTitle>
						<NavRight>
							<Link
								searchbarEnable=".boards-searchbar"
								iconMaterial="search"
							/>
							<Link
								sortableToggle=".sortable"
								iconMaterial="numbers"
							/>
						</NavRight>
						<NavTitleLarge>Boards</NavTitleLarge>
						<Searchbar
							className="boards-searchbar"
							searchContainer=".boards"
							searchIn=".item-text,.item-title"
							expandable
						/>
					</Navbar>
					
					<Boards />
				</Page>
			</View>
		</App >
	)
}

export default AppMain
