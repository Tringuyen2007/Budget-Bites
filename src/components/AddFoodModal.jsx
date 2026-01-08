import { useState } from 'react';

function AddFoodModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('addfood')
    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}>X</button>
                <div className="Tab-Container">
                    <button onClick={() => setActiveTab('addfood')}>Add Food</button>
                    <button onClick={() => setActiveTab('recipes')}>My Recipes</button>
                    <button onClick={() => setActiveTab('foods')}>My Foods</button>
                </div>
            </div>
        </div>
    );
}

export default AddFoodModal;