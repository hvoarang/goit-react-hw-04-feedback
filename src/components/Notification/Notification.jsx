import { MessageTag } from './Notificaton.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
	return <MessageTag>{message}</MessageTag>;
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};
