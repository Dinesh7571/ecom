import React from 'react'

import './MyOrderPage.css'
import Table from '../Common/Table'

const MyOrderPage = () => {
  return (
    <section className="align_center myorder_page">
        <Table headings={["Orders" , "Products" , "Total" , "Status"]}>
           <tbody>
            <tr>
                <td>1</td>
                <td>iphone, Power Bank</td>
                <td>$1299</td>
                <td>Shipped</td>
            </tr>
            <tr>
                <td>1</td>
                <td>iphone, Power Bank</td>
                <td>$1299</td>
                <td>Shipped</td>
            </tr>
           </tbody>
        </Table>
    </section>
  )
}

export default MyOrderPage