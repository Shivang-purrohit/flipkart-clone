 import React from 'react';
 import './FilterPage.css';
 import Records from './records.json';
 import Card from './Card';
 import { Use_r_state } from './Store';

 const FilterPage = () => {
  const {
    filter: { sort, Material, brand,  },
    dis_fill,
  } = Use_r_state();

  const getUniqueData = (Records, property) => {
    let newVal = Records.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ['All', ...new Set(newVal)]);
    /*   console.log(newVal) */
  };
  const genderData = getUniqueData(Records, 'Material');

  const Filltred_product = (Records) => {
    let newproduct = Records;
    if (sort) {
      newproduct = newproduct.sort((a, b) => {
        return sort === 'low' ? a.price - b.price : b.price - a.price;
      });
    }
    if (Material) {
      newproduct = newproduct.filter((curElem) => 
         curElem.Material === Material); 
    
    }
    if(brand){
      newproduct = newproduct.filter((curElem) => curElem.brand === brand);
    }
   

    return newproduct;
  };
const allMaterial = Records.map((record) => record.Material)
  const allBrands = Records.map((record) => record.brand);
  const uniqueBrands = [...new Set(allBrands)];
const uniqueMaterial = [...new Set(allMaterial)]

  const filteredProducts = Filltred_product(Records) ?? [];




  return (
    <div className='container'>
      <div className='section__1'>
        <div >
          <p className='filters' >Filters</p>
         
        </div>
        <div >
          
          <div class='form-check low__high'>
          <p className='price'>Price</p>
            <input
              className='form-check-input'
              type='radio'
              name='exampleRadios'
              key={1}
              value='low'
              id='exampleRadios1'
              onChange={(e) => {
                dis_fill({
                  type: 'Sort_change',
                  payload: e.target.value,
                });
              }}
            />
            <label className='form-check-label' htmlFor='exampleRadios1'>
              Low to High
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              key={2}
              name='exampleRadios'
              value='high'
              id='exampleRadios2'
              onChange={(e) => {
                dis_fill({
                  type: 'Sort_change',
                  payload: e.target.value,
                });
               }}
             />
            <label className='form-check-label' htmlFor='exampleRadios1'>
               High to Low
           </label>
           </div>

           {/* <div className='low__high'>
           {uniqueMaterial.map((Material)=>{
             return <div class='form-check  '> */}

            {/* <div class='form-check low__high'>
             <input
               class='form-check-input'
               type='radio'
               name='exampleRadios'
               id='exampleRadios1'
               value='Cotton'
              onChange={(e) => {
                 dis_fill({
                   type: 'Material_select',
                   payload: e.target.value,
                });
              }} 
            />
            
            { <label class='form-check-label' htmlFor='exampleRadios1'>
              Cotton
            </label> }
          </div>
           <div class='form-check'>
             <input
               class='form-check-input'
               type='radio'
               name='exampleRadios'
               id='exampleRadios1'
               value='Silk'
               onChange={(e) => {
                 dis_fill({
                 type: 'Material_select',
                  payload: e.target.value,
                });
                
              }}
            />
            <label class='form-check-label' htmlFor='exampleRadios1'>
              Silk
             </label>
           </div>
          {/* <div class='form-check'>
             <input
               class='form-check-input'
               type='radio'
              name='exampleRadios'
               id='exampleRadios2'
               value='xyz'
               onChange={(e) => {                 dis_fill({
                   type: 'Size_change',
                   payload: e.target.value,
                 });
               }}
             />
             <label class='form-check-label' htmlFor='exampleRadios2'>
               XL
            </label>
          </div>  */}

 
 
 

<div className='low__high'>
<p className='typeoffabric'>Type of Fabric</p>
           {uniqueMaterial.map((Material)=>{
             return <div className='form-check '>
             { <input
             class='form-check-input'
             
              type='radio'
              name='Material'
              id='Material'
               value={Material}
               onChange={(e) => {
                 dis_fill({
                   type: 'Material_select',
                   payload: e.target.value,
                });
              }}
             /> }
             <label class='form-check-label' htmlFor='exampleRadios3'>
               {Material}
             </label>
           </div>
         })}
         </div>

          



<div className='low__high'>
           {uniqueBrands.map((brand)=>{
             return <div class='form-check '>
             {/* { <input
             class='form-check-input'
              type='radio'
              name='brand'
              id='brand'
               value={brand}
               onChange={(e) => {
                 dis_fill({
                   type: 'brand',
                   payload: e.target.value,
                });
              }}
             /> } */}
             <label class='form-check-label' htmlFor='exampleRadios2'>
               {brand}
             </label>
           </div>
         })}
         </div>
       </div>
     </div>

      <div className='section__2'>
       {
         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
           {filteredProducts.map((record) => {
               return (
                <Card
                 name={record.name}
                 brand={record.brand}
                 image={record.image}
                 price={record.price}
                 mainPrice={record.mainPrice}
                 discountPercent={record.discountPercent}
                 quantity={record.quantity}
                  Material={record.Material}
                  gender={record.gender}
               />
              );
            })}
             {filteredProducts.length === 0 && <p>No products found with selected filters</p>}
           </div>
         }
      </div>
     </div>
   );
 };

export default FilterPage;