import { Box } from 'Box/Box';
import { Container } from 'App/App.styled';
import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';

export const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleIncrement = e => {
		switch (e) {
			case 'good':
				setGood(prevState => prevState + 1);
				break;
			case 'neutral':
				setNeutral(prevState => prevState + 1);
				break;
			case 'bad':
				setBad(prevState => prevState + 1);
				break;
			default:
				console.log('first');
				break;
		}
	};

	const handleTotal = () => good + neutral + bad;
	const handlePositive = () => {
		return Math.round((good / handleTotal()) * 100);
	};
	return (
		<Container>
			<Box display="flex" justifyContent="center" flexWrap="wrap" pt={2}>
				<Box>
					<Section title="Leave your feedback">
						<FeedbackOptions
							options={['good', 'neutral', 'bad']}
							onLeaveFeedback={handleIncrement}
						/>
					</Section>
					<Section title="Statistics:">
						{handleTotal() ? (
							<Statistics
								good={good}
								neutral={neutral}
								bad={bad}
								total={handleTotal()}
								totalPositive={handlePositive()}
							/>
						) : (
							<Notification message="There is no feedback" />
						)}
					</Section>
				</Box>
			</Box>
		</Container>
	);
};
