import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_51JDYRcIVEDGZuIImUE9XWtsNQ0T09ISrLXJTmgomkG28KViIgqdVjX60Gy4eHoY45IvYIxLzzZ8zA6ryUgUKQl2N00intEkUSZ'

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    } 

    return(
        <StripeCheckout
          label='Pay Now'
          name='GVB Demo Clothes'
          billingAddress
          shippingAddress
          image=''
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;