import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LineItemIcon from '@mui/icons-material/ArrowDownward';
import Typography from '@mui/material/Typography';

export default function MyTimeLineItem(props) {
  return (
    <TimelineItem>
          <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="h2"
              color="text.secondary"
          >
              { props.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <LineItemIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                {props.title}
            </Typography>
              <Typography color={ "text.secondary"}>
                { props.description}
            </Typography>
        </TimelineContent>
        </TimelineItem>
  );
}