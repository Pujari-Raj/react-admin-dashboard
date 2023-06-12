import React from 'react';
import './Transactions.css';
import FeaturedValues from '../../components/FeaturedValues/FeaturedValues';
import Areachart from '../../components/Areachart/Areachart';
import Piechart from '../../components/Piechart/Piechart';
import ProductsTransaction from '../../components/ProductsTransaction/ProductsTransaction';

const Transactions = () => {
  return (
    <div className='Transactions'>
      <FeaturedValues />
      <div className="income-expense">
        <Areachart title="FY Income" />
        <Piechart title="Expense Data" />
      </div>
      <ProductsTransaction/>
    </div>
  )
}

export default Transactions