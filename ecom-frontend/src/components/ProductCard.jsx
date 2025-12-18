import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onEdit, onDelete }) => {
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
            onDelete(product._id);
        }
    };

    return (
        <div className="product-card">
            <div className="product-image">
                {product.image ? (
                    <img src={product.image} alt={product.name} />
                ) : (
                    <div className="no-image">📦</div>
                )}
                {product.category && (
                    <span className="product-category">{product.category}</span>
                )}
            </div>
            <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                {product.description && (
                    <p className="product-description">{product.description}</p>
                )}
                <div className="product-details">
                    <div className="product-price">${Number(product.price).toFixed(2)}</div>
                    {product.stock !== undefined && (
                        <div className="product-stock">
                            Stock: <span>{product.stock}</span>
                        </div>
                    )}
                </div>
                <div className="product-actions">
                    <button className="btn-edit" onClick={() => onEdit(product)}>
                        ✏️ Edit
                    </button>
                    <button className="btn-delete" onClick={handleDelete}>
                        🗑️ Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
