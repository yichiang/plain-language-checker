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
import { LinkProps as RRLinkProps, Link } from 'react-router-dom';

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
			<HeaderName <RRLinkProps> element={Link} to="/" prefix="Plain Language">
				Checker
			</HeaderName>
			<HeaderNavigation aria-label="Plain Language Checker">
				<HeaderMenuItem<RRLinkProps> element={Link} to="/about">
					About
				</HeaderMenuItem>
				<HeaderMenuItem<RRLinkProps> element={Link} to="/contact">
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
						<HeaderMenuItem<RRLinkProps> element={Link} to="/">
							Checker
						</HeaderMenuItem>
						<HeaderMenuItem<RRLinkProps> element={Link} to="/about">
							About
						</HeaderMenuItem>
						<HeaderMenuItem<RRLinkProps> element={Link} to="/contact">
							Contact
						</HeaderMenuItem>
					</HeaderSideNavItems>
				</SideNavItems>
			</SideNav>
		</CarbonHeader>
	);
}

export default Header;
