import React from 'react'

const Rating = (props) => {
    const { rating, numRatings } = props
    console.log(rating);

    return (
        <div className='rating'>
            {[1, 2, 3, 4, 5].map(cur =>
                <span>
                    <i className={
                        rating >= cur
                            ? 'fas fa-star'
                            : rating >= (cur - 0.5)
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                    />
                </span>
            )}
        </div>
    )
}

export default Rating