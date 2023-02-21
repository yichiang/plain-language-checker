import React, {useState} from 'react';
import {
	Header as CarbonHeader,
	SkipToContent,
	HeaderName,
	HeaderNavigation,
	HeaderMenuItem,
	HeaderMenuButton,
	SideNav,
	SideNavItems,
	HeaderSideNavItems
} from '@carbon/react';

function Header(): JSX.Element {
	const [isSideNavExpanded, setIsSideNavExpanded] = useState<boolean>(false);

	function onClickSideNavExpand() {
		setIsSideNavExpanded(
			(prevIsSideNavExpanded: boolean) => {
				return !prevIsSideNavExpanded;
			}
		);
	}

	return (
		<CarbonHeader aria-label="Plain Language Checker">
			<SkipToContent/>
			<HeaderMenuButton
				aria-label="Open menu"
				onClick={onClickSideNavExpand}
				isActive={isSideNavExpanded}
			/>
			<HeaderName href="#" prefix="Plain Language">
				Checker
			</HeaderName>
			<HeaderNavigation aria-label="Plain Language Checker">
				<HeaderMenuItem isCurrentPage href="#">
					About
				</HeaderMenuItem>
				<HeaderMenuItem href="#">
					Contact
				</HeaderMenuItem>
			</HeaderNavigation>
			<SideNav
				aria-label="Side navigation"
				expanded={isSideNavExpanded}
				isPersistent={false}
			>
				<SideNavItems>
					<HeaderSideNavItems>
						<HeaderMenuItem href="#">
							About
						</HeaderMenuItem>
						<HeaderMenuItem href="#">
							Contact
						</HeaderMenuItem>
					</HeaderSideNavItems>
				</SideNavItems>
			</SideNav>
		</CarbonHeader>
	);
}

export default Header;
