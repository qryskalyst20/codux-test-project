import { createBoard } from '@wixc3/react-board';
import { SlideBar } from '../../../components/slide-bar/slide-bar';

export default createBoard({
    name: 'SlideBar',
    Board: () => <SlideBar />,
    environmentProps: {
        canvasHeight: 23,
        canvasWidth: 145,
    },
});
