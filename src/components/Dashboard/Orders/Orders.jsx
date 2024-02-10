import React  from 'react'
import './orders.css';
import { Link } from 'react-router-dom';
import { tabledata } from '../../../data.js'
import profilepic from '../../../assets/images/icons.png'
import { Modal, Menu, Button, FileInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Orders = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>  
      <section className='orders'>
        <div className='topbar d-flex justify-content-between'>
          <h1>ORDERS</h1>
          <a href=""><img src={profilepic} /></a>
        </div>
        <div className=" ordertable">
          <div className="searching d-flex justify-content-between">
            <div class="search-container">
              <input type="text" class="searchbar form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
              <i > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 33" fill="none">
                <path d="M32 32L25.8956 25.8956M30.0449 15.5225C30.0449 17.4296 29.6693 19.318 28.9394 21.08C28.2096 22.8419 27.1399 24.4428 25.7914 25.7914C24.4428 27.1399 22.8419 28.2096 21.08 28.9394C19.318 29.6693 17.4296 30.0449 15.5225 30.0449C13.6153 30.0449 11.7269 29.6693 9.96495 28.9394C8.203 28.2096 6.60206 27.1399 5.25353 25.7914C3.90499 24.4428 2.83528 22.8419 2.10546 21.08C1.37563 19.318 1 17.4296 1 15.5225C1 11.6709 2.53004 7.97701 5.25353 5.25353C7.97701 2.53004 11.6709 1 15.5225 1C19.374 1 23.0679 2.53004 25.7914 5.25353C28.5149 7.97701 30.0449 11.6709 30.0449 15.5225Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></i>
            </div>
            <div className='d-flex rightside justify-content-between'>
              <Modal title="Upload your file here" opened={opened} onClose={close} centered>
                <form>
                  <FileInput
                    variant="filled"
                    size="lg"
                    radius="md"
                    placeholder="upload file"
                    accept=".csv"
                  />
                  <button className='sbmt btn btn-success'> submit</button>  
                </form>
              </Modal>
              <button className='btn cssv' onClick={open}  >
                Csv File
              </button>
              <button className='filter btn d-flex align-items-center justify-content-between '> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15" fill="none">
                <path d="M1.38525 1.125L24.4984 1.125" stroke="#3D3C42" stroke-width="2" stroke-linecap="square" />
                <path d="M5.40527 7.5H21.484" stroke="#3D3C42" stroke-width="2" stroke-linecap="square" />
                <path d="M8.41992 13.875H17.4642" stroke="#3D3C42" stroke-width="2" stroke-linecap="square" />
              </svg>Filter</button>
            </div>
          </div>
          <div className='mytab'>
            <table className="table">
              <thead >
                <tr >
                  <th scope="col">#</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">QTY</th>
                  <th scope="col">Address</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tabledata?.map((item, index) => (
                  <tr scope="row" key={index}>
                    <td>{item.srno}</td>
                    <td>{item.orderid}</td>
                    <td>{item.itemname}</td>
                    <td>{item.qty}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.date}</td>
                    <td>{item.price}</td>
                    <td><Menu shadow="md" width={180}>
                      <Menu.Target>
                        <Button variant="outline" color="#000849" size="xs">Add to shipment</Button>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item className='text-center'>
                         <Link className='text-decoration-none' to="/Shipment/addshipment"> Add to shipment </Link>
                        </Menu.Item>
                        <Menu.Item className='text-center'>
                       <Link className='text-decoration-none' to="/Shipment/details"> View details</Link> 
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu></td>
                  </tr>
                ))}


              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default Orders










