import { Head, SectionTag } from './Section.styled';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
	return (
		<SectionTag>
			<Head>{title}</Head>
			{children}
		</SectionTag>
	);
};
Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};
