import React from 'react';
import ModalPractice from './ModalPractice';

export default function DeleteBadgeModal(props) {
    return(
    <ModalPractice 
        isOpen={props.isOpen} 
        onClose={props.onClose}
    >
        <div className="DeleteBadgeModal">
            <h1>Are you sure?</h1>
            <p>You are about to delete this badge.</p>
            <div>
                <button 
                    className="btn btn-danger mr-4"
                    onClick={props.onDeleteBadge}>Delete</button>
                <button 
                    className="btn btn-primary" 
                    onClick={props.onClose}>Cancel</button>
            </div>
        </div>
    </ModalPractice>);
}