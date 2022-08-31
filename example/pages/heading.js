import { useVariable } from '@evolv-delivery-tools/react';

export default function Heading() {
  const headingText = useVariable('shop.checkout-steps', 'control');

  return (
    <div>
      <h1 className="title">{headingText}</h1>
    </div>
  )
}