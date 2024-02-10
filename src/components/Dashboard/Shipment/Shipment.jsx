import React from 'react'
import { useRef, useState } from 'react';
import { Select } from '@mantine/core';
import './shipment.css'
import profilepic from '../../../assets/images/icons.png'
import iphone from '../../../assets/images/iphone.png';
import { TimeInput, DateInput } from '@mantine/dates';
import { ActionIcon, } from '@mantine/core';

const Shipment = () => {
  const ref = useRef(null);
  const [value, setValue] = useState(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <i class="fa-regular fa-clock"></i>
    </ActionIcon>
  );

  return (
    <>
      <section className='add-shipment'>
        <div className='topbar d-flex justify-content-between'>
          <h1>ADD SHIPMENT</h1>
          <a href=""><img src={profilepic} /></a>
        </div>
        <div className="shipmentside">
          <div className='shipmentid'>
            <div className='id-side'>
              <h2>Order Id:</h2>
              <p>AWB8648955</p>
            </div>
            <div className='date-side'> <span>Date :</span><p>2023-12-20</p></div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-7 p-3">
                <div className="order-details">
                  <h3 className='fw-bold px-3 py-2'>Order Detailed</h3>
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th className='text-start px-3' scope="col">Item Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">QTY</th>
                        <th scope="col">Price</th>
                        <th scope="col" className='text-center ps-md-4 px-2'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr  >
                        <td scope="col" className='align-middle text-start '> <img src={iphone} className='mx-2' /> iPhone 11 Pro Max</td>
                        <td className='align-middle' >0.5kg</td>
                        <td className='align-middle' >02</td>
                        <td className='align-middle' >AED 20,000</td>
                        <td className='text-end pe-md-4 px-2 align-middle'>AED 40,000</td>
                      </tr>
                      <tr>
                        <td colspan="4" className='text-end border-0 py-2 fw-bolder'>Subtotal:</td>
                        <td className='text-end pe-md-4 py-2 border-0 px-2'>40000</td>
                      </tr>
                      <tr>
                        <td colspan="4" className='text-end py-2 border-0 fw-bolder'>Delivery Fee:</td>
                        <td className='text-end pe-md-4 py-2 border-0 px-2'>50.00</td>
                      </tr>
                      <tr>
                        <td colspan="4" className='text-end  py-2 fw-bolder'>Other Charges:</td>
                        <td className='text-end pe-md-4 py-2  px-2'>00.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <td colspan="4" className='text-end fw-bolder'>Total:</td>
                      <td className='text-end pe-md-4 px-2'>AED 40,050</td>
                    </tfoot>
                  </table>

                </div>
              </div>
              <div className="col-md-5 p-3">
                <div className="customer-information">
                  <h3 className='text-center p-4'>Customer Information</h3>
                  <table className='table m-0'>
                    <tbody>
                      <tr>
                        <td className='text-start  fw-bolder  border-0 '>Name</td>
                        <td className='text-end   border-0 ' >Arkansas</td>
                      </tr>
                      <tr>
                        <td className='text-start fw-bolder   border-0 '>Email</td>
                        <td className='text-end   border-0 ' >Arkansas@gmail.com</td>
                      </tr>
                      <tr>
                        <td className='text-start fw-bolder   border-0 '>Contact</td>
                        <td className='text-end   border-0 ' >+901 00022 222</td>
                      </tr>
                      <tr>
                        <td className='text-start  fw-bolder  border-0 '>Address</td>
                        <td className='text-end   border-0 ' >Abc Dubai United Arab</td>
                      </tr>
                      <tr>
                        <td className='text-start  fw-bolder  border-0 '>Postcode</td>
                        <td className='text-end   border-0 ' >409092</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <DateInput
                value={value}
                onChange={setValue}
                label="Date input"
                placeholder="Date input"
              />
            </div>
            <div className="col-md-6">
              <TimeInput
                ref={ref} rightSection={pickerControl}
                label="Collection Time"
                placeholder="Input placeholder"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <Select
                label="Driver"
                placeholder="Select Method"
                data={['React', 'Angular', 'Vue', 'Svelte']}
              />
            </div>

            <div className="col-md-6">
              <Select
                label="Payment Method"
                placeholder="Choose Method"
                data={['React', 'Angular', 'Vue', 'Svelte']}
              />
            </div>
          </div>
        </div>

      </section>

    </>
  )
}
export default Shipment