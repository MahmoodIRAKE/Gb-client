import Divider from 'components/Divider/divider';
import MainCard from 'components/MainCard';
import './styles.css';

const CalenderEvents = ({}) => {
    return (
        <div id="mainContainer">
            <div id="rightSided">
                <MainCard id="mainCard">
                    <div id="titleContainer">
                        <MainCard id="title">{'sessions'}</MainCard>
                        <MainCard id="PlusBtn">{'+'}</MainCard>
                    </div>
                    <Divider/>
                    <div></div>                    
                </MainCard>
                <MainCard id="mainCard">
                    <div id="titleContainer">
                        <MainCard id="title">{'Pacakges'}</MainCard>
                        <MainCard id="PlusBtn">{'+'}</MainCard>
                    </div>
                    <Divider/>
                    <div></div> 
                </MainCard>
            </div>
            <div id="leftSided"></div>
        </div>
    );
};

export default CalenderEvents;
