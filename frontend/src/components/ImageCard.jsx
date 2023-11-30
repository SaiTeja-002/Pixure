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
                    // borderRadius: "8px",
                    // padding: "10px",
                    // margin: "5px 5px 5px 5px",
                    // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
                alt="img"
            />
        </div>
    ))}</div>
  )
}

ImageCard.propTypes = {}

export default ImageCard
