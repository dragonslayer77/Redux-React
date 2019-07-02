import React from 'react';
import { connect } from 'react-redux';
import Hit from './Hit';
import actionTypes from '../constants/action-types';


const Hitlist = (props) => {
    const { filterType, hits } = props;
    const filteredHits = () => {
        if (filterType === actionTypes.SHOW_ALL) return hits;
        if (filterType === actionTypes.SHOW_ALIVE) {
            return hits.filter(h => !h.done);
        }
        if (filterType === actionTypes.SHOW_DEAD) {
            return hits.filter(h => h.done);
        } return [];
    };
    return (
        <div>
            <p>HitList</p>
            {
                filteredHits().map(hit => <Hit key={hit.id} hit={hit} />)
            }
        </div>
    );
};

const mapStateToProps = state => ({
    hits: state.hits,
    filterType: state.filter
});

export default connect(mapStateToProps, null)(Hitlist);
