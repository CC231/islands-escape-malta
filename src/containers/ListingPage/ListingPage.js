import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import ListingPricing from '../../components/ListingPricing';

const ListingPricing = ({ listing }) => {
  const [isFullDay, setIsFullDay] = useState(true);
  
  const fullDayPrice = listing.attributes.publicData.full_day_price || 0;
  const halfDayPrice = listing.attributes.publicData.half_day_price || 0;

  return (
    <ListingPricing listing={listing} />
    <div className="pricing-section">
    
      <label className="toggle-label">Half-Day</label>
      <label className="switch">
        <input
          type="checkbox"
          checked={isFullDay}
          onChange={() => setIsFullDay(!isFullDay)}
        />
        <span className="slider round"></span>
      </label>
      <label className="toggle-label">Full-Day</label>

      <h3>
        <FormattedMessage id="ListingPage.priceLabel" />
        {isFullDay ? `$${fullDayPrice}` : `$${halfDayPrice}`}
      </h3>
    </div>
  );
};

export default ListingPricing;
