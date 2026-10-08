function PriceTag({price, OriginalPrice}) {
    return (
        <span>
            {OriginalPrice && (
                <span className="text-decoration-line text-muted me-2">
                    ${OriginalPrice}
                </span>
            )}
            <span className={OriginalPrice ? "text-danger fw_bold" : ""}>${price}</span>
        </span>
    );
} 

export default PriceTag;