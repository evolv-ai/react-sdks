import { useVariable } from '@evolv-delivery-tools/react';

export default function Button() {
  const buttonText = useVariable('shop.button-cta-label', 'control');

  return (
    <div>
      <button>{buttonText}</button>
    </div>
  )
}