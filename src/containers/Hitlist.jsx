import React from 'react';
import { connect } from 'react-redux';
import Hit from './Hit';


const Hitlist = (props) => {
    return (
        <div>
            <p>HitList</p>
            {
                props.hits.map(hit => <Hit key={hit.id} hit={hit} />)
            }
        </div>
    );
};

const mapStateToProps = state => ({
    hits: state.hits,
})

export default connect(mapStateToProps, null)(Hitlist);
