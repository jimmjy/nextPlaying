import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

//progress bar styling
Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

const Logo = styled.h1`
	font-size: 4rem;
	margin-left: 2rem;
	position: relative;
	z-index: 2;
	transform: skew(-7deg);
	a {
		padding: 0.5rem 1rem;
		background: ${props => props.theme.red};
		color: white;
		text-transform: uppercase;
		text-decoration: none;
	}
	@media (max-width: 1300px) {
		text-align: center;
		margin: 0;
	}
`;

const StyledHeader = styled.div`
	.bar {
		border-bottom: 10px solid ${props => props.theme.black};
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		@media (max-width: 1350px) {
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}
	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto;
		border-bottom: 1px solid ${props => props.theme.lightGrey};
	}
`;

const Header = () => (
	<StyledHeader>
		<div className="bar">
			<Logo>
				<Link href="/">
					<a>Sick Fits</a>
				</Link>
			</Logo>
			<Nav />
		</div>
		<div className="sub-bar">
			<p>search</p>
		</div>
		<div>cart</div>
	</StyledHeader>
);

export default Header;
