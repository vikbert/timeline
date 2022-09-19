import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import LineItemIcon from '@mui/icons-material/ArrowDownward';
import Typography from '@mui/material/Typography';
import {RocketLaunch} from '@mui/icons-material';

export default function MyTimeLineItem(props) {
    const isFirst =  1 === props.index + 1;

    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{m: 'auto 0'}} variant="h3" color="text.primary">
                {props.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector/>
                <TimelineDot color="secondary">
                    {isFirst ? <RocketLaunch/> : <LineItemIcon/>}
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
                <Typography variant="h6" component="span" sx={{textTransform: 'capitalize' }}>
                    {props.title}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}