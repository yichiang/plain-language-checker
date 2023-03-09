import React from 'react';
import {
	Header as CarbonHeader,
	SkipToContent,
	HeaderName
} from '@carbon/react';
import { LinkProps as RRLinkProps, Link } from 'react-router-dom';

function Header(): JSX.Element {

	return (
		<CarbonHeader aria-label="Plain Language Checker">
			<SkipToContent/>
			<HeaderName <RRLinkProps> element={Link} to="/" prefix="Plain Language">
				Checker
			</HeaderName>
		</CarbonHeader>
	);
}

export default Header;
