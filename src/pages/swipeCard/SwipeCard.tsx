import React, {ReactElement} from 'react';
import Deck from "../../component/swipeCard/Deck";
import './SwipeCard.scss'
import Menu from "../../container/layout/header/Menu";

export default function Hello() {
    return <>
        <Menu/>
        <Deck onLeftLeave={() => {console.log('left')}} onRightLeave={() => console.log('right')} />
    </>
}
