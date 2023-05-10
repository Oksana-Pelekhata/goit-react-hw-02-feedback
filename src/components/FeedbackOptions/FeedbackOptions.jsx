import React from "react";
import PropTypes from 'prop-types';
import { Button} from './styled'

export const FeedbackOptions =({ onLeaveFeedback, options }) => {

        return (
            <div>
                {options.map((key) => (
                <Button type="button" key={key} name={key} onClick={onLeaveFeedback}>{key}</Button>
            ))
            }
                </div>    
            )
    }

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};