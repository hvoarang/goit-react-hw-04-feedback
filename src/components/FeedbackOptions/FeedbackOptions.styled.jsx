import styled from '@emotion/styled';

function btnColor(props) {
	switch (props.children) {
		case 'good':
			return '#16a085';
		case 'neutral':
			return '#eb9532';
		case 'bad':
			return '#c82647';

		default:
			return '#16a085';
	}
}

export const FeedBackHead = styled.h2`
	text-align: center;
	color: #2d2c3e;
`;
export const FeedBackHeadAccent = styled.span`
	color: #eb9532;
`;
export const FeedBackBtnWrapper = styled.div`
	width: 231px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const FeedBackBtn = styled.button`
	display: block;
	width: 70px;
	padding: 8px;
	border-radius: 4px;
	border: none;
	cursor: pointer;
	background-color: #2d2c3e;
	color: #ffffff;
	transition: 250ms background-color ease-in-out;

	:hover,
	:focus {
		background-color: ${p => btnColor(p)};
	}
`;

