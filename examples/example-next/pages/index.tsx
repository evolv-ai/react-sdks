import { useVariable, useEvolvClient } from "@evolv/react";
import { Button } from "ui";

export default function Web() {
  const checkoutStepsVariant = useVariable('shop.checkout-steps', 'control');
  const copyrightVariant = useVariable('shop.copyright', 'control');
  const buttonCtaLabelVariant = useVariable('shop.button-cta-label', 'control');

  const { client } = useEvolvClient();

  const handleClick = () => {
    client.client.context.update({ 'pageName': 'test' });
    client.client.emit('test-event');
  };

  return (
    <div>
      <h1>{checkoutStepsVariant}</h1>
      <h1>{copyrightVariant}</h1>
      <h1>{buttonCtaLabelVariant}</h1>
      <Button onClick={handleClick} />
    </div>
  );
}
