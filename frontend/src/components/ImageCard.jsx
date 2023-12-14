import React from 'react'
import PropTypes from 'prop-types'

function ImageCard(props) {
  return (
    <div>{props.images.map((image, i) => (
        <div key={i} style={{ margin: "10px 10px" }}>
            <img
                src={image}
                style={{
                    width: "100%",
                    display: "block",
                }}
                alt="img"
            />
        </div>
    ))}</div>
  )
}

ImageCard.propTypes = {}

export default ImageCard
