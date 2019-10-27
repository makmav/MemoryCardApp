import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import CardContent from "../../container/card/Card";

class Card extends React.Component {
    render() {
        const { i, x, y, rot, scale, trans, bind, data } = this.props;
        return (
            <animated.div
                key={i}
                style={{
                    transform: interpolate(
                        [x, y],
                        (x, y) => `translate3d(${x}px,${y}px,0)`
                    )
                }}
            >
                <animated.div
                    {...bind(i)}
                    style={{
                        transform: interpolate([rot, scale], trans)
                    }}
                >
                    <div className="card">
                        <CardContent source={data[i]}/>
                    </div>
                </animated.div>
            </animated.div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    distance: PropTypes.string,
    text: PropTypes.string,
    pics: PropTypes.array
};

export default Card;
