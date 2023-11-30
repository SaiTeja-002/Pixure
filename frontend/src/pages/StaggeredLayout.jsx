// import React from 'react'

// function StaggeredLayout() {
//     return (
//         <div style={styles.pin_container}>
//             <Card size="small" />
//             <Card size="medium" />
//             <Card size="large" />
//         </div>
//     )
// }

// const styles = {
//     container: {
//         margin: 0,
//         padding: 0,
//         width: '80vw',
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, 250px)',
//         gridAutoRows: '10px',
//         position: 'absolute',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         justifyContent: 'center',
//         backgroundColor: 'black'
//     }
// }

// export default StaggeredLayout


import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const StaggeredLayout = () => {
    const images = [
        'https://images.unsplash.com/photo-1682687982298-c7514a167088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1697980060888-60eceb7fa798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1701274101625-d1328ac138dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1701275610953-d6877e61b897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1701273973387-8abff988bb88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1701226362119-cc86312846af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1701079169931-efac6c6847ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1700882759985-f1ffc657cb5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1698846881210-7e72890501c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1701272439309-189bb464d36e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1701220293175-5c17f172b77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1701187887029-907bed510db6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1701168245325-71fa002939fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D',
    ];

    return (
        <div style={{ height: "100vh", overflowY: "scroll", padding: "20px" }}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                // gutter="20px"
            >
                <Masonry>
                    {images.map((image, i) => (
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
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}

export default StaggeredLayout;
