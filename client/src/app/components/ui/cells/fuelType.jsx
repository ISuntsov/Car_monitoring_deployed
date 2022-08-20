import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFuelTypeById, getFuelTypesLoadingStatus } from '../../../store/slices/fuelTypes';

const FuelType = ({ id }) => {
    const isLoading = useSelector(getFuelTypesLoadingStatus());
    const fuelType = useSelector(getFuelTypeById(id));
    if (isLoading) return 'Loading...';
    return <>{fuelType.name}</>;
};
FuelType.propTypes = {
    id: PropTypes.string
};

export default FuelType;
