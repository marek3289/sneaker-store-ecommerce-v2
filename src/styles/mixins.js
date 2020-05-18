import { css } from 'styled-components';
import media from './media';

const mixins = {
    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    flexColumn: css`
        display: flex;
        flex-direction: column;
    `,

    gridTemplate: css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    `,

    fullHeight: css`
        height: calc(100vh - 75px);
    `,

    fullSize: css`
        width: 100%;
        height: 100%;
    `,

    transition: css`
        transition: 0.25s ease-in-out;
    `,

    pseudoElements: css`
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;;
    `,

    sidePadding: css`
        padding: 0 150px;
        ${media.bigDesktop`padding: 0 80px;`};
        ${media.tablet`padding: 0 60px;`};
        ${media.phablet`padding: 0 15px;`};
    `,

    hiddenScrollbar: css`
        overflow-y: scroll;

        ::-webkit-scrollbar {
            width: 0px;
        }
    `,
};

export default mixins;