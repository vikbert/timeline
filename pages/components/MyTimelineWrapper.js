import GlobalStyles from '@mui/material/GlobalStyles';
import Timeline from '@mui/lab/Timeline';
import MyTimeLineItem from './MyTimeLineItem';

const styles = {
    ul: {
        alignItems: 'center',
    }, li: {
        margin: '20px 0', maxWidth: '780px',
    }, p: {
        color: '#9b9999',
        backgroundColor: 'rgba(255,255,255,0.47)',
        padding: '4px 10px',
        borderRadius: '8px',
    },
};

export default function MyTimelineWrapper(props) {
    const length = props.items.length;
    return <>
        <GlobalStyles styles={styles}/>
        <Timeline position="alternate">
            {props.items.map(function(item, index) {
                return <MyTimeLineItem
                    key={index}
                    length={length}
                    index={index}
                    date={item.date}
                    title={item.title}
                    description={item.description}/>;
            })}
        </Timeline>
    </>;
}
